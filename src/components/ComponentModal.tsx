import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@gluestack-ui/themed";

import {
  VStack,
  Text,
  HStack,
  Center,
  Heading,
  Icon,
  Switch,
} from "@gluestack-ui/themed";
import { Dimensions } from "react-native";

import { icons } from "lucide-react-native";
import { CheckBox } from "./CheckBox";
import { Button } from "./Button";

const width = (Dimensions.get("window").width - 4 * 20) / 2;
const height = Dimensions.get("window").height;
const maxHeight = (height * 70) / 100;
const marginTop = (height * 30) / 100;

type CheckBoxProps = {
  handleCancel: () => void;
  handleClose: () => void;
  handleFilter: () => void;
};

export function ComponentModal({
  handleCancel,
  handleClose,
  handleFilter,
}: CheckBoxProps) {
  const LucideIcon = icons["CircleX"];

  return (
    <Modal
      isOpen={true}
      onClose={() => {
        //   setShowModal(false);
      }}
      size="full"
    >
      <ModalBackdrop onPress={handleClose} />
      <ModalContent
        p={"$4"}
        mt={marginTop}
        height={maxHeight}
        //   borderWidth={2}
        //   borderColor="$gray1"
      >
        <Center>
          <HStack w={"$1/5"} borderWidth={2} borderColor="$gray500"></HStack>
        </Center>
        <ModalHeader>
          <Heading size="lg">Filtrar anúncios</Heading>
          <ModalCloseButton onPress={handleClose}>
            <Text color="$gray400" size="2xl">
              X
            </Text>
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody
        //   borderWidth={2} borderColor="$gray1"
        >
          <VStack mt={"$4"}>
            <Text color="$gray200" fontFamily="$heading" fontSize={"$md"}>
              Condição
            </Text>
            <HStack
              mt={"$4"}
              w={"$full"}
              // borderWidth={1}
              // borderColor="$gray1"
            >
              <HStack
                alignItems="center"
                justifyContent="center"
                rounded={"$full"}
                //   borderWidth={1}
                //   borderColor="$gray1"
                mr={"$2"}
                px={"$3"}
                h={"$8"}
                bg="$bluelight"
              >
                <Text
                  color="$white"
                  fontFamily="$heading"
                  fontSize={"$sm"}
                  mr={"$1"}
                >
                  NOVO
                </Text>

                <Icon ml={"$1"} as={LucideIcon} color={"$white"} />
              </HStack>
              <HStack
                alignItems="center"
                justifyContent="center"
                rounded={"$full"}
                //   borderWidth={1}
                //   borderColor="$gray1"
                px={"$3"}
                h={"$8"}
                bg="$gray500"
              >
                <Text
                  color="$gray300"
                  fontFamily="$heading"
                  fontSize={"$sm"}
                  mr={"$1"}
                >
                  USADO
                </Text>

                {/* <Icon ml={"$1"} as={LucideIcon} color={"$white"} /> */}
              </HStack>
            </HStack>
          </VStack>
          <VStack mt={"$6"}>
            <Text color="$gray200" fontFamily="$heading" fontSize={"$md"}>
              Aceita Troca?
            </Text>
            <HStack
              mt={"$4"}
              w={"$full"}
              // borderWidth={1}
              // borderColor="$gray1"
            >
              <Switch
                trackColor={{
                  false: "$gray500",
                  true: "$bluelight",
                }}
                thumbColor={"$white"}
              />
            </HStack>
          </VStack>
          <VStack mt={"$6"}>
            <Text color="$gray200" fontFamily="$heading" fontSize={"$md"}>
              Meios de pagamentos aceitos
            </Text>
            <VStack
              mt={"$4"}
              w={"$full"}
              // borderWidth={1}
              // borderColor="$gray1"
            >
              <CheckBox label="Boleto" value="boleto" isChecked={true} />
              <CheckBox label="Pix" value="pix" isChecked={true} />
              <CheckBox label="Dinheiro" value="dinheiro" isChecked={true} />
              <CheckBox
                label="Cartão de Crédito"
                value="cartaocredito"
                isChecked={true}
              />
              <CheckBox
                label="Depósito Bancário"
                value="deposito"
                isChecked={false}
              />
            </VStack>
          </VStack>
        </ModalBody>
        <ModalFooter
          // alignItems="center"
          justifyContent="space-between"
          // borderWidth={1}
          // borderColor="$gray1"
        >
          <HStack
            w={"$full"}
            justifyContent="space-between"
            //   borderWidth={1}
            //   borderColor="$gray1"
          >
            <Button
              w={160}
              title="Resetar Filtros"
              variantButton="SECONDARY"
              onPress={handleCancel}
            />
            <Button onPress={handleFilter} w={160} title="Aplicar Filtros" />
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
