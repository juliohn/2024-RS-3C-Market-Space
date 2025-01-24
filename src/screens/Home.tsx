import { useFocusEffect } from "@react-navigation/native";

import { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "@store/index"; // Adjust this import based on your Redux store setup

import { HomeStackNavigatorProps } from "@routes/app.routes";

import { ButtonIcon } from "@components/ButtonIcon";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { CardProduct, CardProductsProps } from "@components/CardProduct";
import { ComponentModal } from "@components/ComponentModal";

import { Tag, ArrowRight, Search, SlidersVertical } from "lucide-react-native";

import {
  VStack,
  HStack,
  Text,
  Box,
  Center,
  Icon,
  Divider,
  FlatList,
} from "@gluestack-ui/themed";

// - remove beucase it is temporary
import shirt from "@assets/png/1.png";
import shoes from "@assets/png/2.png";
import bike from "@assets/png/3.png";

import { TouchableOpacity } from "react-native";
import { api } from "@services/api";

export function Home() {
  const navigation = useNavigation<HomeStackNavigatorProps>();
  const user = useSelector((state: RootState) => state.auth.user);
  const [activeAdsCount, setActiveAdsCount] = useState<number>(0);

  async function fetchUserActiveAds() {
    try {
      const response = await api.get("/users/products");
      setActiveAdsCount(response.data.length);
    } catch (error) {
      console.error("Error fetching active ads count:", error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchUserActiveAds();
    }, [])
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
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
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
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
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
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
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
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
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
    {
      title: "Sofá",
      variantTag: "TERTIARY",
      titleTag: "Usado",
      price: "1200,90",
      imageUri: bike,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },

    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
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
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
    {
      title: "Sofá",
      variantTag: "TERTIARY",
      titleTag: "Usado",
      price: "1200,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
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
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
    {
      title: "Sofá",
      variantTag: "TERTIARY",
      titleTag: "Usado",
      price: "1200,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
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
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
    {
      title: "Sofá",
      variantTag: "TERTIARY",
      titleTag: "Usado",
      price: "1200,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
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
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
    {
      title: "Sofá",
      variantTag: "TERTIARY",
      titleTag: "Usado",
      price: "1200,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
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
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
    {
      title: "Gaveteiro",
      variantTag: "SECONDARY",
      titleTag: "Usado",
      price: "59,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
    {
      title: "Sofá",
      variantTag: "TERTIARY",
      titleTag: "Usado",
      price: "1200,90",
      imageUri: shirt,
      userPhoto: "https://github.com/juliohn.png",
      pictures: [shirt, shoes, bike],
      changeAllowed: true,
      addActive: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      owner_user_id: 11,
    },
  ];

  function handleNewAd() {
    navigation.navigate("adsNew");
  }

  function handleMyAds() {
    navigation.navigate("listMyAds");
  }

  function renderItem({ item }: CardProductsProps) {
    return <CardProduct item={item} />;
  }

  return (
    <VStack px="$6" bg="$gray700" flex={1}>
      <HStack
        w={"$full"}
        mt="$16"
        mb="$8"
        alignItems="center"
        justifyContent="space-between"
        // borderWidth={1}
        // borderColor="$gray1"
      >
        <HStack gap={"$2"} alignItems="center">
          <UserPhoto
            alt="Photo of User"
            h={50}
            w={50}
            source={{
              uri:
                `http://localhost:3333/images/${user?.avatar}` ||
                "https://github.com/juliohn.png",
            }}
          />
          <VStack justifyContent="center">
            <Text color="$gray100" fontSize={"$md"} fontFamily="$body">
              Boas Vindas,
            </Text>

            <Text color="$gray100" fontFamily="$heading" fontSize={"$md"}>
              {user?.name || "Usuário"}!
            </Text>
          </VStack>
        </HStack>

        <ButtonIcon
          iconName={"Plus"}
          iconColor="$white"
          w={"$34"}
          title="Criar anúncio"
          onPress={() => handleNewAd()}
        />
      </HStack>

      <Text color="$gray300" fontSize={"$sm"} fontFamily="$body">
        Seus produtos anunciados para venda
      </Text>

      <HStack
        mt={"$4"}
        mb="$8"
        alignItems="center"
        justifyContent="space-between"
        rounded={"$md"}
        // borderWidth={1}
        // borderColor="$gray1"
        px={"$3"}
        h={"$16"}
        bg="$lightBlue100"
      >
        <HStack alignItems="center" gap="$3">
          <Icon as={Tag} size="xl" color="$blue" />
          <VStack>
            <Text fontFamily="$heading" fontSize={"$lg"}>
              {activeAdsCount}
            </Text>
            <Text fontFamily="$body" fontSize={"$xs"}>
              anúncios ativos
            </Text>
          </VStack>
        </HStack>
        <TouchableOpacity onPress={handleMyAds}>
          <HStack alignItems="center" gap="$2">
            <Text fontFamily="$heading" color={"$blue"} fontSize={"$sm"}>
              Meus anúncios
            </Text>
            <Icon as={ArrowRight} size="lg" color="$blue" />
          </HStack>
        </TouchableOpacity>
      </HStack>

      <VStack>
        <Text color="$gray300" fontSize={"$sm"} fontFamily="$body">
          Compre produtos variados
        </Text>

        <HStack
          mt={"$3"}
          h="$14"
          bg="$white"
          rounded={"$md"}
          // borderWidth={1}
          // borderColor="$gray1"
          // w={"$32"}
          // borderWidth={1}
          // borderColor="$gray1"
          justifyContent="space-between"
        >
          <Center flex={3}>
            <Input placeholder="Buscar anúncio" />
          </Center>

          <HStack flex={1.5} alignItems="center" justifyContent="space-between">
            <TouchableOpacity>
              <Center h={"$14"} w={"$14"}>
                <Icon size={"lg"} as={Search}></Icon>
              </Center>
            </TouchableOpacity>

            <Divider orientation="vertical" h={"$6"} />

            <TouchableOpacity onPress={() => setIsModalOpen(true)}>
              <Center h={"$14"} w={"$14"}>
                <Icon size={"lg"} as={SlidersVertical}></Icon>
              </Center>
            </TouchableOpacity>
          </HStack>
        </HStack>
      </VStack>
      <Box mt={"$4"}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={data}
          renderItem={renderItem}
        />
      </Box>

      {isModalOpen && (
        <ComponentModal
          handleCancel={() => setIsModalOpen(false)}
          handleClose={() => setIsModalOpen(false)}
          handleFilter={() => setIsModalOpen(false)}
        />
      )}
    </VStack>
  );
}
