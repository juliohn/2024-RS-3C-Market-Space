import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Text,
  Switch,
  HStack,
  RadioGroup,
  FormControl,
  ScrollView,
  Center,
} from "@gluestack-ui/themed";
import { Button } from "@components/Button";
import { CheckBox } from "@components/CheckBox";
import { Input } from "@components/Input";
import { Radio } from "@components/Radio";
import { TextArea } from "@components/TextArea";
import { HomeStackNavigatorProps } from "@routes/app.routes";

export function AdsNew() {
  const navigation = useNavigation<HomeStackNavigatorProps>();
  const [radioValues, setRadioValues] = useState("new");

  const handleChangeOptionValue = (value: string) => {
    setRadioValues(value);
  };

  const handleNavigateToPreview = () => {
    navigation.navigate("adsPreview");
  };

  return (
    <VStack flex={1} bg="$gray700" mt={"$4"} p="$2">
      <ScrollView
        flex={1}
        px="$4"
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Images Section */}
        <FormControl gap="$4" mb="$4">
          <Text fontSize="$md" fontFamily="$heading" color="$gray100">
            Imagens
          </Text>
          <Text fontSize="$sm" color="$gray300" fontFamily="$body">
            Escolha até 3 imagens para mostrar o quanto o seu produto é
            incrível!
          </Text>
          <HStack mt="$2" mb={"$2"} space="md">
            <Button w="$24" h="$24" variantButton="SECONDARY" title="+" />
          </HStack>
        </FormControl>

        {/* Product Details Section */}
        <FormControl gap="$4" mb="$4">
          <Text fontSize="$md" fontFamily="$heading" color="$gray100">
            Sobre o produto
          </Text>

          <Input placeholder="Título do anúncio" />

          <TextArea placeholder="Descrição do produto" multiline h="$32" />

          <RadioGroup
            value={radioValues}
            onChange={(value) => {
              handleChangeOptionValue(value);
            }}
          >
            <HStack space="md">
              <Radio label="Produto usado" value="used" />
              <Radio label="Produto novo" value="new" />
            </HStack>
          </RadioGroup>
        </FormControl>

        {/* Price Section */}
        <FormControl gap="$4" mb="$4">
          <Text fontSize="$md" fontFamily="$heading" color="$gray100">
            Venda
          </Text>
          <Center>
            <Input placeholder="R$ Valor do produto" keyboardType="numeric" />
          </Center>
        </FormControl>

        {/* Trade Option */}
        <FormControl gap="$4">
          <HStack alignItems="center" space="md" mb="$4">
            <Text fontSize="$md" fontFamily="$heading" color="$gray100">
              Aceita troca?
            </Text>
            <Switch />
          </HStack>
        </FormControl>

        {/* Payment Methods */}
        <FormControl gap="$4">
          <Text fontSize="$md" fontFamily="$heading" color="$gray100" mb="$2">
            Meios de pagamento aceitos
          </Text>
          <VStack space="sm">
            <CheckBox label="Boleto" value="boleto" isChecked={false} />
            <CheckBox label="Pix" value="pix" isChecked={true} />
            <CheckBox label="Dinheiro" value="cash" isChecked={true} />
            <CheckBox
              label="Cartão de Crédito"
              value="card"
              isChecked={false}
            />
            <CheckBox
              label="Depósito Bancário"
              value="deposit"
              isChecked={false}
            />
          </VStack>
        </FormControl>
      </ScrollView>

      {/* Action Buttons */}
      <HStack bottom={0} left={0} right={0} p="$6" space="md" bg="$white">
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          flex={1}
          variantButton="SECONDARY"
          title="Cancelar"
        />
        <Button
          onPress={handleNavigateToPreview}
          flex={1}
          variantButton="PRIMARY"
          title="Avançar"
        />
      </HStack>
    </VStack>
  );
}
