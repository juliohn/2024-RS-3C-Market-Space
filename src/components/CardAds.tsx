import { useState } from "react";

import { VStack, Text, Image, HStack } from "@gluestack-ui/themed";
import { Dimensions, TouchableOpacity } from "react-native";

import { UserPhoto } from "./UserPhoto";

import shoes from "@assets/png/2.png";

import { ConditionTag } from "./ConditionTag";
import { ComponentProps } from "react";
import { useNavigation } from "@react-navigation/native";
import { AdsStackNavigatorProps } from "@routes/app.routes";

const width = (Dimensions.get("window").width - 4 * 20) / 2;

export type CardAdsProps = ComponentProps<typeof VStack> & {
  item: {
    title: string;
    variantTag?: "PRIMARY" | "SECONDARY" | "TERTIARY";
    titleTag: string;
    price: string;
    imageUri: string;
    userPhoto: string;
    pictures: [string];
    description: string;
    changeAllowed: boolean;
    adsActive: boolean;
    owner_user_id: number;
  };
};

export function CardAds({ item }: CardAdsProps) {
  const [userId, setUserId] = useState<number>(10);
  const navigation = useNavigation<AdsStackNavigatorProps>();
  const handleNavigate = () => navigation.navigate("adsDetails", { item });

  return (
    <TouchableOpacity onPress={() => handleNavigate()}>
      <VStack
        margin={"$2"}
        h={"$34"}
        w={width}
        // borderWidth={1}
        // borderColor="$gray1"
        // alignItems="center"
        // justifyContent="center"
        rounded={"$md"}
      >
        <VStack h={"$24"}>
          <Image
            alt="Image product"
            rounded={"$lg"}
            source={item.imageUri}
            w={"$full"}
            h={"$full"}
          />
          <HStack mt={-90} px="$1" justifyContent="flex-end">
            <ConditionTag variantTag={item.variantTag} title={item.titleTag} />
          </HStack>

          {!item.adsActive && (
            <HStack alignItems="baseline" mt={"$12"} mx={"$2"} w={"$full"}>
              <Text fontFamily="$heading" fontSize={"$sm"} color="$white">
                ANÚNCIO DESATIVADO
              </Text>
            </HStack>
          )}
        </VStack>

        <VStack mt={"$1"}>
          <Text>{item.title}</Text>
          <HStack
            gap={"$1"}
            alignItems="center"
            // borderWidth={1}
            // borderColor="$gray1"
          >
            <Text textAlign="center" fontFamily="$heading" fontSize={"$sm"}>
              R$
            </Text>
            <Text textAlign="center" fontFamily="$heading" fontSize={"$lg"}>
              {item.price}
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </TouchableOpacity>
  );
}
