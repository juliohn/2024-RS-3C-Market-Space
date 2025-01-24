import {
  VStack,
  Text,
  Center,
  Box,
  Icon,
  ScrollView,
} from "@gluestack-ui/themed";

import { UserPhoto } from "@components/UserPhoto";
import { Title } from "@components/Title";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import Logo from "@assets/logo-marketspace.svg";
import Avatar from "@assets/avatar.png";
import { PencilLine, Eye, EyeOff } from "lucide-react-native";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { api } from "@services/api";

type FormData = {
  avatar: string;
  name: string;
  email: string;
  tel: string;
  password: string;
  confirmPassword: string;
};

type ApiResponse = {
  status: number;
};

export function Signup() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [userPhoto, setUserPhoto] = useState("");

  function handleSignin() {
    navigator.navigate("signin");
  }

  async function handleUserPhotoSelect() {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        return Alert.alert(
          "Permissão necessária",
          "Precisamos de acesso às suas fotos para continuar."
        );
      }

      const photo = await ImagePicker.launchImageLibraryAsync({
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (!photo.canceled && photo.assets[0]) {
        setUserPhoto(photo.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Erro ao selecionar a imagem.");
    }
  }

  const onSubmit = async (data: FormData) => {
    if (!userPhoto) {
      return Alert.alert(
        "Selecione uma foto",
        "A foto de perfil é obrigatória"
      );
    }

    try {
      const formData = new FormData();

      // Append the image file
      const imageFile = {
        uri: userPhoto,
        type: "image/jpeg",
        name: "avatar.jpg",
      } as any;
      formData.append("avatar", imageFile);

      // Append other form data
      Object.keys(data).forEach((key) => {
        if (key !== "avatar") {
          formData.append(key, data[key as keyof FormData] as string);
        }
      });

      const response = await api.post<ApiResponse>("/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { status } = response;

      if (status === 201) {
        reset();
        setUserPhoto("");
        Alert.alert("Sucesso!", "Cadastro realizado com sucesso!");
        navigator.navigate("signin", { email: data.email });
      }
    } catch (error: any) {
      if (error.response) {
        // Erro da API com resposta
        Alert.alert(
          "Erro",
          error.response.data.message || "Erro ao fazer cadastro"
        );
      } else {
        // Erro de rede ou outro erro

        Alert.alert(
          "Erro",
          "Não foi possível realizar o cadastro. Tente novamente mais tarde."
        );
      }
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      automaticallyAdjustKeyboardInsets={true}
    >
      <VStack
        bg="$gray600"
        flex={1}
        alignItems="center"
        justifyContent="flex-start"
      >
        <Center mt="$16">
          <Logo width={80} height={60} />
        </Center>

        <VStack mt="$2">
          <VStack px="$6" gap={"$3"}>
            <Title title="Boas Vindas!" />

            <Text
              lineHeight={24}
              textAlign="center"
              color="$gray200"
              fontFamily="$body"
              fontSize={"$md"}
            >
              Crie sua conta e use o espaço para comprar itens variados e vender
              seus produtos
            </Text>
          </VStack>

          <VStack px={"$6"} mt={"$4"}>
            <Center>
              <UserPhoto
                alt="Photo of User"
                source={userPhoto ? { uri: userPhoto } : Avatar}
                size={"lg"}
              />
              <Box
                width={40}
                height={40}
                alignItems="center"
                justifyContent="center"
                rounded="$full"
                bg={"$bluelight"}
                mt={-30}
                mr={-65}
                as={TouchableOpacity}
                onPress={handleUserPhotoSelect}
              >
                <Icon as={PencilLine} size="sm" color="$green200" />
              </Box>
            </Center>

            <Center mt={"$2"} gap={"$3"}>
              <Controller
                control={control}
                name="name"
                rules={{ required: "Nome é obrigatório" }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Input
                      placeholder="Name"
                      onChangeText={onChange}
                      value={value}
                      isInvalid={!!errors.name}
                    />
                    {errors.name && (
                      <Text color="$red500" fontSize="$xs">
                        {errors.name.message}
                      </Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name="email"
                rules={{
                  required: "Email é obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Input
                      placeholder="E-mail"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      onChangeText={(text) => onChange(text.toLowerCase())}
                      value={value}
                      isInvalid={!!errors.email}
                    />
                    {errors.email && (
                      <Text color="$red500" fontSize="$xs">
                        {errors.email.message}
                      </Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name="tel"
                rules={{ required: "Telefone é obrigatório" }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Input
                      mask="(99) 99999-9999"
                      placeholder="Phone"
                      keyboardType="numeric"
                      onChangeText={onChange}
                      value={value}
                      isInvalid={!!errors.tel}
                    />
                    {errors.tel && (
                      <Text color="$red500" fontSize="$xs">
                        {errors.tel.message}
                      </Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name="password"
                rules={{
                  required: "Senha é obrigatória",
                  minLength: {
                    value: 6,
                    message: "A senha deve ter no mínimo 6 caracteres",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Input
                      placeholder="Password"
                      isPassword
                      onChangeText={onChange}
                      value={value}
                      isInvalid={!!errors.password}
                    />
                    {errors.password && (
                      <Text color="$red500" fontSize="$xs">
                        {errors.password.message}
                      </Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name="confirmPassword"
                rules={{
                  required: "Confirmação de senha é obrigatória",
                  validate: (value, formValues) =>
                    value === formValues.password || "As senhas não conferem",
                }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Input
                      placeholder="Confirm Password"
                      isPassword
                      onChangeText={onChange}
                      value={value}
                      isInvalid={!!errors.confirmPassword}
                    />
                    {errors.confirmPassword && (
                      <Text color="$red500" fontSize="$xs">
                        {errors.confirmPassword.message}
                      </Text>
                    )}
                  </>
                )}
              />
            </Center>
            <Center mt={"$4"} gap="$3">
              <Button title="Criar" onPress={handleSubmit(onSubmit)} />
              <Text fontSize={"$sm"} color="$grey200" fontFamily="$body">
                Já tem uma conta?
              </Text>
              <Button
                onPress={handleSignin}
                variantButton="SECONDARY"
                title="Ir para login"
              />
            </Center>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
