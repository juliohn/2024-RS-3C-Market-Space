import { Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useRef } from "react";

import {
  VStack,
  Text,
  Center,
  ScrollView,
  Heading,
} from "@gluestack-ui/themed";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { api, setAuthToken } from "@services/api";
import { useAppDispatch } from "@hooks/index";
import { signIn } from "@slices/authSlice";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { UserDTO } from "@dtos/User";

import Logo from "@assets/logo-marketspace.svg";

type RouteParams = {
  email?: string;
};

type FormData = {
  email: string;
  password: string;
};

type AuthResponse = {
  token: string;
  user: UserDTO;
  refresh_token: string;
  status?: number;
  message?: string;
};

export function Signin() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();
  const route = useRoute();
  const params = route.params as RouteParams;
  const emailParam = params?.email;

  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: emailParam || "",
      password: "",
    },
  });

  // Add ref for password input
  const passwordInputRef = useRef<any>(null);

  function handleNewAccount() {
    navigator.navigate("signup");
  }

  async function handleSignIn(data: FormData) {
    try {
      const response = await api.post<AuthResponse>("/sessions", {
        email: data.email,
        password: data.password,
      });

      const { token, user, refresh_token } = response.data;
      setAuthToken(token);
      dispatch(signIn({ user, token, refresh_token }));
    } catch (error: any) {
      if (error.response) {
        // Erro da API com resposta
        Alert.alert(
          "Erro",
          error.response.data.message || "Erro ao fazer login"
        );
      } else {
        // Erro de rede ou outro erro
        //console.log("Error signing in:", error);
        Alert.alert(
          "Erro",
          "Não foi possível realizar o login. Tente novamente mais tarde."
        );
      }
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      automaticallyAdjustKeyboardInsets={true}
      bg="$white"
    >
      <VStack
        bg="$gray600"
        // bg="red"
        flex={1}
        alignItems="center"
        justifyContent="flex-start"
        borderBottomEndRadius={30}
        borderBottomStartRadius={30}
      >
        <Center mt="$32">
          <Logo width={130} height={80} />
        </Center>

        <VStack mt="$6">
          <VStack px="$8" alignItems="center">
            <Heading
              fontSize={"$37"}
              alignItems="center"
              justifyContent="center"
            >
              marketspace
            </Heading>

            <Text
              lineHeight={24}
              textAlign="center"
              color="$gray300"
              fontFamily="$body"
              fontSize={"$md"}
            >
              Seu espaço de compra e venda
            </Text>
          </VStack>

          <Center mt={"$20"} gap={"$4"}>
            <Text fontSize={"$sm"} color="$grey200" fontFamily="$body">
              Acesse sua conta
            </Text>

            <Controller
              control={control}
              name="email"
              rules={{
                required: "E-mail obrigatório",
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
                    autoComplete="off"
                    value={value}
                    onChangeText={(text) => onChange(text.toLowerCase())}
                    isInvalid={!!errors.email}
                    returnKeyType="next"
                    onSubmitEditing={() => passwordInputRef.current?.focus()}
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
              name="password"
              rules={{
                required: "Senha obrigatória",
              }}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    ref={passwordInputRef}
                    placeholder="Password"
                    isPassword
                    value={value}
                    onChangeText={onChange}
                    isInvalid={!!errors.password}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit(handleSignIn)}
                  />
                  {errors.password && (
                    <Text color="$red500" fontSize="$xs">
                      {errors.password.message}
                    </Text>
                  )}
                </>
              )}
            />

            <Button
              mt={"$6"}
              title="Entrar"
              variantButton="TERTIARY"
              onPress={handleSubmit(handleSignIn)}
            />
          </Center>
        </VStack>
      </VStack>
      <VStack
        flex={2}
        bg="$white"
        // borderWidth={1}
        // borderColor="$gray100"
        px="$16"
      >
        <Center mt={"$8"} gap="$3">
          <Text fontSize={"$sm"} color="$grey200" fontFamily="$body">
            Ainda nao tem acesso?
          </Text>
          <Button
            onPress={handleNewAccount}
            variantButton="SECONDARY"
            title="Criar uma conta"
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
