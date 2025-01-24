import {
  Radio as GlueRadio,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
  CircleIcon,
} from "@gluestack-ui/themed";

interface RadioProps {
  label: string;
  value: string;
  isSelected: boolean;
}

export function Radio({ label, value, isSelected, ...rest }: RadioProps) {
  return (
    <GlueRadio value={value} {...rest}>
      <RadioIndicator>
        <RadioIcon
          as={CircleIcon}
          size="sm"
          color={isSelected ? "$primary500" : "transparent"}
        />
      </RadioIndicator>
      <RadioLabel ml="$2">{label}</RadioLabel>
    </GlueRadio>
  );
}
