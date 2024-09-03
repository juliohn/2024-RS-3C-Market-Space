import { ComponentProps } from "react";
import {
  Button as GluestakButton,
  Text,
  ButtonSpinner,
} from "@gluestack-ui/themed";

type ButtonProps = ComponentProps<typeof GluestakButton> & {
  title: string;
  variantButton?: "PRIMARY" | "SECONDARY" | "TERTIARY";
  isLoading?: boolean;
};
export function Button({
  title,
  variantButton = "PRIMARY",
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <GluestakButton
      w="$full"
      h="$12"
      alignItems="center"
      justifyContent="center"
      borderWidth="$0"
      borderColor="$gray500"
      rounded="$sm"
      bg={
        variantButton === "PRIMARY"
          ? "$gray100"
          : variantButton === "SECONDARY"
          ? "$gray500"
          : "$bluelight"
      }
      $active-bg={
        variantButton === "PRIMARY"
          ? "$gray300"
          : variantButton === "SECONDARY"
          ? "$gray400"
          : "$blue"
      }
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <Text
          color={
            variantButton === "PRIMARY"
              ? "$gray700"
              : variantButton === "SECONDARY"
              ? "$gray200"
              : "$gray700"
          }
          fontFamily="$heading"
          fontSize={"$md"}
        >
          {title}
        </Text>
      )}
    </GluestakButton>
  );
}
