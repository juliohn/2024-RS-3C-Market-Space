import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  VStack,
} from "@gluestack-ui/themed";

import { CheckIcon } from "lucide-react-native";

type CheckBoxProps = {
  label: string;
  value: string;
  isChecked: boolean;
};

export function CheckBox({ label, value, isChecked }: CheckBoxProps) {
  return (
    <VStack mt={"$4"}>
      <Checkbox isChecked={isChecked} value={value} size="md">
        <>
          <CheckboxIndicator mr={"$2"}>
            <CheckboxIcon as={CheckIcon} color="$white" />
          </CheckboxIndicator>
          <CheckboxLabel fontFamily="$body" fontSize={"$md"}>
            {label}
          </CheckboxLabel>
        </>
      </Checkbox>
    </VStack>
  );
}
