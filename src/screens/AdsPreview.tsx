import {
  VStack,
  Text,
  HStack,
  Image,
  ScrollView,
  Center,
  SafeAreaView,
  Box,
  useToken,
} from "@gluestack-ui/themed";
import { Dimensions } from "react-native";
import { useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import { UserPhoto } from "@components/UserPhoto";

import { ButtonIcon } from "@components/ButtonIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AdDTO } from "@dtos/Ad";
import { useAppSelector } from "@hooks/index";
import { formatPrice } from "@utils/format";
import { usePaymentMethods } from "@hooks/usePaymentMethods";

import { Alert } from "react-native";
import { api } from "@services/api";

// Add AdDTO type
type RouteParams = {
  item: AdDTO;
};

export function AdsPreview() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params as RouteParams;
  const { paymentMethods } = usePaymentMethods(); // Destructure to get paymentMethods array

  const width = Dimensions.get("window").width;

  const user = useAppSelector((state) => state.auth.user);

  const gray100 = useToken("colors", "gray100");

  // Replace mock data with item
  const pictures = item.images;

  async function handlePublishAd() {
    try {
      setIsLoading(true);

      // First API call - Create product
      const productResponse = await api.post("/products", {
        name: item.name,
        description: item.description,
        is_new: item.is_new,
        price: item.price,
        accept_trade: item.accept_trade,
        payment_methods: item.payment_methods,
      });

      const { id: productId } = productResponse.data;

      // Second API call - Upload images
      const formData = new FormData();
      formData.append("product_id", productId);

      item.images?.forEach((imageUri, index) => {
        formData.append("images", {
          uri: imageUri,
          type: "image/jpeg",
          name: `image_${index}.jpg`,
        } as any);
      });

      await api.post("/products/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Alert.alert("Sucesso", "Anúncio cadastrado com sucesso!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("home"),
        },
      ]);
    } catch (error: any) {
      if (error.response?.status === 400 || error.response?.status === 401) {
        Alert.alert("Erro", error.response.data.message);
      } else {
        Alert.alert(
          "Erro",
          "Não foi possível publicar o anúncio. Tente novamente mais tarde."
        );
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView flex={1}>
      <VStack flex={1} bg="$gray700">
        {/* Header Title */}
        <Center pb="$4" bg="$blue">
          <Text color="$white" fontSize="$lg" fontFamily="$heading">
            Pré visualização do anúncio
          </Text>
          <Text color="$white" fontSize="$sm" fontFamily="$body">
            É assim que seu produto vai aparecer!
          </Text>
        </Center>

        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
          {/* Image Carousel */}
          <HStack w="$full" h="$48">
            <Carousel
              loop
              width={width}
              height={200}
              autoPlay={true}
              mode="parallax"
              data={pictures || []}
              scrollAnimationDuration={1500}
              renderItem={({ item }) => (
                <Image
                  alt="Product image"
                  rounded="$lg"
                  source={{ uri: item }}
                  w="$full"
                  h="$full"
                />
              )}
            />
          </HStack>

          <VStack px="$6" mt="$6" space="md">
            {/* User Info */}
            <HStack space="sm" alignItems="center">
              <UserPhoto
                h={35}
                w={35}
                alt="User photo"
                source={{
                  uri: `http://localhost:3333/images/${user?.avatar}`,
                }}
              />
              <Text color="$gray100" fontFamily="$body" fontSize="$md">
                {user?.name}
              </Text>
            </HStack>

            {/* Product Status */}
            <Box bg="$gray500" rounded="$md" alignSelf="flex-start">
              <Text
                px="$2"
                py="$1"
                color="$gray200"
                fontSize="$xs"
                textTransform="uppercase"
              >
                {item.is_new ? "NOVO" : "USADO"}
              </Text>
            </Box>

            {/* Product Info */}
            <HStack justifyContent="space-between" alignItems="center">
              <Text color="$gray100" fontSize="$xl" fontFamily="$heading">
                {item.name}
              </Text>
              <HStack alignItems="baseline" space="xs">
                <Text color="$blue500" fontSize="$sm" fontFamily="$heading">
                  R$
                </Text>
                <Text color="$blue500" fontSize="$2xl" fontFamily="$heading">
                  {formatPrice(item.price)}
                </Text>
              </HStack>
            </HStack>

            {/* Description */}
            <Text color="$gray200" fontSize="$sm" fontFamily="$body">
              {item.description}
            </Text>

            {/* Trade Option */}
            <HStack space="sm">
              <Text color="$gray200" fontSize="$sm" fontFamily="$heading">
                Aceita troca?
              </Text>
              <Text color="$gray200" fontSize="$sm" fontFamily="$body">
                {item.accept_trade ? "Sim" : "Não"}
              </Text>
            </HStack>

            {/* Payment Methods */}
            <VStack space="sm">
              <Text color="$gray200" fontSize="$sm" fontFamily="$heading">
                Meios de pagamento:
              </Text>
              {item.payment_methods.map((method) => {
                const paymentMethod = paymentMethods.find(
                  (pm) => pm.value === method
                );
                const Icon = paymentMethod?.icon;

                return (
                  <HStack key={method} alignItems="center">
                    {Icon && <Icon size={18} color={gray100} />}
                    <Text
                      ml="$2"
                      color="$gray200"
                      fontSize="$sm"
                      fontFamily="$body"
                    >
                      {paymentMethod?.label || method}
                    </Text>
                  </HStack>
                );
              })}
            </VStack>
          </VStack>
        </ScrollView>

        {/* Action Buttons */}
        <HStack p="$6" space="md" bg="$gray700">
          <ButtonIcon
            iconColor={"$gray200"}
            iconName="ArrowLeft"
            flex={1}
            variantButton="SECONDARY"
            title="Voltar e editar"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <ButtonIcon
            iconColor={"$white"}
            iconName="Tag"
            flex={1}
            variantButton="TERTIARY"
            title="Publicar"
            onPress={handlePublishAd}
          />
        </HStack>
      </VStack>
    </SafeAreaView>
  );
}
