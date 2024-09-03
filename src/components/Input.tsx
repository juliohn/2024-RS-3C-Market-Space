import { Input as GlustakInput, Icon, InputField } from "@gluestack-ui/themed";
import { EyeIcon } from "lucide-react-native";
import { ComponentProps } from "react";

type InputProps = ComponentProps<typeof InputField> & {
  isPassword?: boolean;
};
export function Input({ isPassword = false, ...rest }: InputProps) {
  return (
    <GlustakInput
      bg="$white"
      borderRadius={"$md"}
      h="$12"
      px={"$4"}
      borderWidth={"$0"}
      $focus={{
        borderWidth: 1,
        borderColor: "$bluelight",
      }}
      alignItems="center"
    >
      <InputField
        placeholderTextColor={"$gray400"}
        fontFamily="$body"
        color="$gray300"
        {...rest}
      />

      {isPassword && <Icon as={EyeIcon} color="$gray100" size="xl" />}
    </GlustakInput>
  );
}
