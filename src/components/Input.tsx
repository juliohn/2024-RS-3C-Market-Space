import { Input as GlustakInput, InputField, Icon } from "@gluestack-ui/themed";
import { ComponentProps, useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

type InputProps = Omit<ComponentProps<typeof InputField>, "type"> & {
  mask?: string;
  maskType?: any;
  maskOptions?: any;
  isPassword?: boolean;
  isInvalid?: boolean;
};

export function Input({
  mask,
  maskType = "cel-phone",
  maskOptions,
  isPassword = false,
  isInvalid,
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const defaultOptions = {
    "cel-phone": {
      maskType: "BRL",
      withDDD: true,
      dddMask: "+55 (99) ",
    },
  };

  const getOptions = () => {
    if (maskOptions) return { ...maskOptions, mask };
    if (maskType === "cel-phone")
      return { ...defaultOptions["cel-phone"], mask };
    return { mask };
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <GlustakInput
      bg="$gray700"
      borderRadius={"$md"}
      h="$12"
      w={"$full"}
      borderWidth={isInvalid ? "$1" : "$0"}
      borderColor={isInvalid ? "$red500" : "transparent"}
      $focus={{
        borderWidth: 1,
        borderColor: "$bluelight",
      }}
      alignItems="center"
    >
      {mask ? (
        <TextInputMask
          minHeight="$12"
          width={"$full"}
          type={maskType}
          options={getOptions()}
          customTextInput={InputField}
          customTextInputProps={{
            placeholderTextColor: "$gray400",
            fontFamily: "$body",
            color: "$gray200",
            ...rest,
          }}
          value={rest.value}
          onChangeText={rest.onChangeText}
        />
      ) : (
        <InputField
          minHeight="$12"
          width={"$full"}
          placeholderTextColor={"$gray400"}
          fontFamily="$body"
          color="$gray200"
          secureTextEntry={isPassword && !showPassword}
          {...rest}
        />
      )}

      {isPassword && (
        <TouchableOpacity onPress={togglePassword}>
          <Icon
            as={showPassword ? EyeOffIcon : EyeIcon}
            color="$gray100"
            size="xl"
            mr="$3"
          />
        </TouchableOpacity>
      )}
    </GlustakInput>
  );
}
