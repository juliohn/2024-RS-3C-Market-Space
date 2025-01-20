import {
  VStack,
  Text,
  HStack,
  Image,
  ScrollView,
  Center,
  SafeAreaView,
} from "@gluestack-ui/themed";
import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { UserPhoto } from "@components/UserPhoto";

import { CheckBox } from "@components/CheckBox";

// - remove beucase it is temporary
import shirt from "@assets/png/1.png";
import shoes from "@assets/png/2.png";
import bike from "@assets/png/3.png";
import { ButtonIcon } from "@components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

export function AdsPreview() {
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;

  // Mock data - replace with actual data from form
  const pictures = [shirt, shoes, bike];

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
              data={pictures}
              scrollAnimationDuration={1500}
              renderItem={({ item }) => (
                <Image
                  alt="Product image"
                  rounded="$lg"
                  source={item}
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
                source={{ uri: "https://github.com/juliohn.png" }}
              />
              <Text color="$gray100" fontFamily="$body" fontSize="$md">
                Julio Helena
              </Text>
            </HStack>

            {/* Product Status */}
            <HStack>
              <Text
                px="$2"
                py="$1"
                bg="$gray500"
                rounded="$full"
                color="$gray200"
                fontSize="$xs"
                textTransform="uppercase"
              >
                USADO
              </Text>
            </HStack>

            {/* Product Info */}
            <HStack justifyContent="space-between" alignItems="center">
              <Text color="$gray100" fontSize="$xl" fontFamily="$heading">
                Luminária pendente
              </Text>
              <HStack alignItems="baseline" space="xs">
                <Text color="$blue500" fontSize="$sm" fontFamily="$heading">
                  R$
                </Text>
                <Text color="$blue500" fontSize="$2xl" fontFamily="$heading">
                  45,00
                </Text>
              </HStack>
            </HStack>

            {/* Description */}
            <Text color="$gray200" fontSize="$sm" fontFamily="$body">
              Cras congue cursus in tortor sagittis placerat nunc, tellus arcu.
              Vitae ante leo eget maecenas urna mattis cursus.
            </Text>

            {/* Trade Option */}
            <HStack space="sm">
              <Text color="$gray200" fontSize="$sm" fontFamily="$heading">
                Aceita troca?
              </Text>
              <Text color="$gray200" fontSize="$sm" fontFamily="$body">
                Não
              </Text>
            </HStack>

            {/* Payment Methods */}
            <VStack space="sm">
              <Text color="$gray200" fontSize="$sm" fontFamily="$heading">
                Meios de pagamento:
              </Text>
              <CheckBox label="Boleto" value="boleto" isChecked={true} />
              <CheckBox label="Pix" value="pix" isChecked={true} />
              <CheckBox
                label="Depósito Bancário"
                value="deposit"
                isChecked={true}
              />
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
            onPress={() => {
              console.log("Publicar");
            }}
          />
        </HStack>
      </VStack>
    </SafeAreaView>
  );
}
