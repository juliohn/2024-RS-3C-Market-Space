import { useState } from "react";

import { CardAds } from "@components/CardAds";

import { ComboBox, OptionProps } from "@components/ComboBox";

import {
  VStack,
  HStack,
  Text,
  FlatList,
  SafeAreaView,
} from "@gluestack-ui/themed";

// - remove because it is temporary
import shirt from "@assets/png/4.png";
import shoes from "@assets/png/5.png";
import bike from "@assets/png/6.png";

import { ListRenderItemInfo, TouchableOpacity } from "react-native";

import { CardAdsProps } from "@components/CardAds";

export function ListMyAds() {
  const data = [
    {
      title: "Tênis Vermelho",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Bicicleta",
      variantTag: "TERTIARY",
      titleTag: "Novo",
      price: "120,00",
      imageUri: shoes,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: bike,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Sofá",
      variantTag: "TERTIARY",
      titleTag: "Novo",
      price: "1200,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shoes,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Tênis Vermelho",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Bicicleta",
      variantTag: "TERTIARY",
      titleTag: "Novo",
      price: "120,00",
      imageUri: shoes,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: bike,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Sofá",
      variantTag: "TERTIARY",
      titleTag: "Novo",
      price: "1200,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shoes,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Tênis Vermelho",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Bicicleta",
      variantTag: "TERTIARY",
      titleTag: "Novo",
      price: "120,00",
      imageUri: shoes,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: bike,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Sofá",
      variantTag: "TERTIARY",
      titleTag: "Novo",
      price: "1200,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shoes,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Tênis Vermelho",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Bicicleta",
      variantTag: "TERTIARY",
      titleTag: "Novo",
      price: "120,00",
      imageUri: shoes,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: bike,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Sofá",
      variantTag: "TERTIARY",
      titleTag: "Novo",
      price: "1200,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shoes,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      adsActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 10,
    },
  ];

  const OptionsComboBox: OptionProps[] = [
    {
      label: "Ativos",
      value: "active",
    },
    {
      label: "Desativados",
      value: "disable",
    },
  ];

  function renderItem({ item }: ListRenderItemInfo<CardAdsProps>) {
    return <CardAds item={item} />;
  }

  return (
    <SafeAreaView flex={1}>
      <VStack px="$6" bg="$gray700">
        <HStack
          mt={"$8"}
          mb="$2"
          alignItems="center"
          justifyContent="space-between"
          rounded={"$md"}
          px="$2"
          h={"$12"}
        >
          <HStack alignItems="center" gap="$3">
            <VStack>
              <Text fontFamily="$body" fontSize={"$md"}>
                {data.length} anúncios
              </Text>
            </VStack>
          </HStack>
          <HStack alignItems="center" gap="$2">
            <ComboBox options={OptionsComboBox} />
          </HStack>
        </HStack>

        <VStack>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={data}
            renderItem={renderItem}
          />
        </VStack>
      </VStack>
    </SafeAreaView>
  );
}
