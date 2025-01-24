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
  onPress: () => void;
};

export function CheckBox({ label, value, isChecked, onPress }: CheckBoxProps) {
  return (
    <VStack mt={"$4"}>
      <Checkbox
        isChecked={isChecked}
        value={value}
        size="md"
        onChange={onPress}
        aria-label={label}
      >
        <CheckboxIndicator mr={"$2"}>
          <CheckboxIcon as={CheckIcon} color="$white" />
        </CheckboxIndicator>
        <CheckboxLabel fontFamily="$body" fontSize={"$md"}>
          {label}
        </CheckboxLabel>
      </Checkbox>
    </VStack>
  );
}
