import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Icon,
} from "@gluestack-ui/themed";

import { ArrowDown } from "lucide-react-native";

export interface OptionProps {
  label: string;
  value: string;
}
type ComboBoxProps = {
  options: [OptionProps];
};

export function ComboBox({ options }: ComboBoxProps) {
  return (
    <Select>
      <SelectTrigger variant="outline" size="md" w={"$40"}>
        <SelectInput placeholder="Todos" />
        <SelectIcon as={ArrowDown} mr={"$1"} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent pb={"$6"}>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>

          {options.map((item) => {
            return (
              <SelectItem
                // borderBottomWidth={0.5}
                m={"$1"}
                // borderColor="$gray1"
                key={item.value.toString()}
                label={item.label}
                value={item.value}
              />
            );
          })}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}
