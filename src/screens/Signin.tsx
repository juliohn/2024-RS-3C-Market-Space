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
import { PencilLine } from "lucide-react-native";

export function Signin() {
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
              <UserPhoto alt="Photo of User" source={Avatar} />
              <Box
                width={40}
                height={40}
                alignItems="center"
                justifyContent="center"
                rounded="$full"
                bg={"$bluelight"}
                mt={-30}
                mr={-65}
              >
                <Icon as={PencilLine} size="sm" color="$green200" />
              </Box>
            </Center>

            <Center mt={"$2"} gap={"$3"}>
              <Input placeholder="Name" />
              <Input placeholder="E-mail" keyboardType="email-address" />
              <Input placeholder="Phone" keyboardType="number-pad" />

              <Input placeholder="Password" secureTextEntry isPassword />
              <Input
                placeholder="Confirm Password"
                secureTextEntry
                isPassword
              />
            </Center>
            <Center mt={"$4"} gap="$3">
              <Button title="Criar" />
              <Text fontSize={"$sm"} color="$grey200" fontFamily="$body">
                Já tem uma conta?
              </Text>
              <Button variantButton="SECONDARY" title="Ir para login" />
            </Center>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
