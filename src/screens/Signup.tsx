import {
  VStack,
  Text,
  Center,
  ScrollView,
  Heading,
} from "@gluestack-ui/themed";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import Logo from "@assets/logo-marketspace.svg";

export function Signup() {
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

            <Input placeholder="E-mail" keyboardType="email-address" />

            <Input placeholder="Password" secureTextEntry isPassword />

            <Button mt={"$6"} title="Entrar" variantButton="TERTIARY" />
          </Center>
        </VStack>
      </VStack>
      <VStack flex={2} bg="$white" mt={"$8"} px="$16">
        <Center mt={"$8"} gap="$3">
          <Text fontSize={"$sm"} color="$grey200" fontFamily="$body">
            Ainda nao tem acesso?
          </Text>
          <Button variantButton="SECONDARY" title="Criar uma conta" />
        </Center>
      </VStack>
    </ScrollView>
  );
}
