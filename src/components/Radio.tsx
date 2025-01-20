import {
  Radio as GlueRadio,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
} from "@gluestack-ui/themed";
import { Circle } from "lucide-react-native";

interface RadioProps {
  label: string;
  value: string;
}

export function Radio({ label, value, ...rest }: RadioProps) {
  return (
    <GlueRadio value={value} {...rest}>
      <RadioIndicator>
        <RadioIcon as={Circle} size="sm" />
      </RadioIndicator>
      <RadioLabel> {label}</RadioLabel>
    </GlueRadio>
  );
}
