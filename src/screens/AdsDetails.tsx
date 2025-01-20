import {
  VStack,
  Text,
  HStack,
  Icon,
  Image,
  Heading,
  SafeAreaView,
  ScrollView,
} from "@gluestack-ui/themed";

import {
  ArrowLeft,
  Banknote,
  Barcode,
  BarcodeIcon,
  CreditCard,
  Landmark,
  QrCode,
  ScanBarcode,
} from "lucide-react-native";

import Carousel from "react-native-reanimated-carousel";

import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { HomeStackNavigatorProps } from "@routes/bkp/stack.routes";

import { Dimensions } from "react-native";

import { CardAdsProps } from "@components/CardAds";

import { UserPhoto } from "@components/UserPhoto";
import { ConditionTag } from "../components/ConditionTag";
import { ButtonIcon } from "@components/ButtonIcon";

export function AdsDetails() {
  const dataPaymentMethod = [
    {
      icon: Barcode,
      title: "Boleto",
    },
    {
      icon: QrCode,
      title: "Pix 123",
    },

    {
      icon: Landmark,
      title: "Depósito Bancário",
    },
  ];
  const route = useRoute();
  const { item } = route.params as CardAdsProps;

  const width = Dimensions.get("window").width;

  const navigation = useNavigation<HomeStackNavigatorProps>();
  const handleGoBack = () => navigation.goBack();

  const handleToogleAdds = () => {
    item.adsActive ? console.log("DESATIVAR") : console.log("ATIVAR");
  };

  return (
    <SafeAreaView flex={1}>
      <VStack>
        {/* <TouchableOpacity onPress={() => handleGoBack()}>
          <HStack pl={24} py={5} w={"$1/5"}>
            <Icon as={ArrowLeft} size="xl" color="$gray100" />
          </HStack>
        </TouchableOpacity>
 */}
        <HStack>
          <Carousel
            loop
            width={width}
            height={200}
            autoPlay={true}
            mode={"parallax"}
            data={item.pictures}
            scrollAnimationDuration={1500}
            renderItem={({ item, index }) => (
              <HStack flex={1}>
                <Image
                  alt="Image product"
                  rounded={"$lg"}
                  source={item}
                  w={"$full"}
                  h={"$full"}
                />
              </HStack>
            )}
          />
        </HStack>
        <VStack mt={"$3"} px="$6">
          <ScrollView>
            <HStack gap={"$2"} alignItems="center">
              <UserPhoto
                alt="Photo of User"
                h={35}
                w={35}
                type="SECONDARY"
                source={"https://github.com/juliohn.png"}
              />
              <VStack justifyContent="center">
                <Text color="$gray100" fontFamily="$body" fontSize={"$md"}>
                  Julio Helena Neto
                </Text>
              </VStack>
            </HStack>

            <HStack mt={"$3"}>
              <ConditionTag
                variantTag={item.variantTag}
                title={item.titleTag}
              />
            </HStack>

            <HStack
              alignItems="center"
              justifyContent="space-between"
              mt={"$3"}
              // borderWidth={1}
              // borderColor="$gray1"
            >
              <Heading fontFamily="$heading">{item.title}</Heading>
              <HStack
                gap={"$2"}
                alignItems="baseline"
                mt={"$3"}
                // borderWidth={1}
                // borderColor="$gray1"
              >
                <Text
                  color="$blue500"
                  textAlign="center"
                  fontFamily="$heading"
                  fontSize={"$sm"}
                >
                  R$
                </Text>
                <Text
                  color="$blue500"
                  textAlign="center"
                  fontFamily="$heading"
                  fontSize={"$3xl"}
                >
                  {item.price}
                </Text>
              </HStack>
            </HStack>

            <HStack mt={"$3"}>
              <Text
                color="$gray200"
                textAlign="left"
                fontFamily="$body"
                fontSize={"$sm"}
                numberOfLines={7}
              >
                {item.description}
              </Text>
            </HStack>

            <HStack
              alignItems="baseline"
              mt={"$4"}
              gap={"$2"}
              //   borderWidth={1}
              //   borderColor="$gray1"
            >
              <Text
                color="$gray200"
                textAlign="auto"
                fontFamily="$heading"
                fontSize={"$lg"}
              >
                Aceita troca?
              </Text>
              <Text
                color="$gray100"
                textAlign="center"
                fontFamily="$boddy"
                fontSize={"$md"}
              >
                {item.changeAllowed === true ? "Sim" : "Não"}
              </Text>
            </HStack>

            <VStack
              alignItems="baseline"
              mt={"$4"}
              gap={"$2"}
              //   borderWidth={1}
              //   borderColor="$gray1"
            >
              <Text
                mb={"$1"}
                color="$gray200"
                textAlign="auto"
                fontFamily="$heading"
                fontSize={"$lg"}
              >
                Meios de pagamento
              </Text>

              {dataPaymentMethod.map((payment) => {
                return (
                  <HStack
                    gap={"$2"}
                    mb={"$1"}
                    justifyContent="center"
                    alignItems="center"
                    // borderWidth={1}
                    // borderColor="$gray1"
                  >
                    <Icon as={payment.icon} size="md" color="$gray100" />

                    <Text
                      color="$gray100"
                      textAlign="center"
                      fontFamily="$boddy"
                      fontSize={"$md"}
                    >
                      {payment.title}
                    </Text>
                  </HStack>
                );
              })}
            </VStack>
          </ScrollView>
        </VStack>
      </VStack>
      <VStack
        alignItems="center"
        justifyContent="flex-end"
        // borderWidth={1}
        // borderColor="$gray1"
        mt={"$3"}
        // minHeight={"$32"}
        // pb={"$8"}
        // bg="$white"
        h={"$full"}
        px="$6"
        flex={2}
      >
        <ButtonIcon
          mb={"$2"}
          w={"$full"}
          variantButton={item.adsActive ? "PRIMARY" : "TERTIARY"}
          iconColor={"$white"}
          iconName="Tag"
          title={item.adsActive ? "Desativar anúncio" : "Ativar anúncio"}
          onPress={handleToogleAdds}
        />

        <ButtonIcon
          w={"$full"}
          variantButton="SECONDARY"
          iconColor={"$gray100"}
          iconName="Trash"
          title="Excluir anúncio"
        />
      </VStack>
    </SafeAreaView>
  );
}
