import { ComponentProps, ReactNode } from "react";
import {
  Button as GluestakButton,
  Text,
  ButtonSpinner,
  Icon,
  HStack,
} from "@gluestack-ui/themed";

import { icons } from "lucide-react-native";

type ButtonProps = ComponentProps<typeof GluestakButton> & {
  title: string;
  variantButton?: "PRIMARY" | "SECONDARY" | "TERTIARY";
  isLoading?: boolean;
  iconName: keyof typeof icons;
  iconColor?: string;
};

export function ButtonIcon({
  title,
  variantButton = "PRIMARY",
  isLoading = false,
  iconName,
  iconColor,
  ...rest
}: ButtonProps) {
  const LucideIcon = icons[iconName];

  return (
    <GluestakButton
      w="$full"
      h="$12"
      alignItems="center"
      justifyContent="center"
      borderWidth="$0"
      borderColor="$gray500"
      rounded="$lg"
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
        <HStack gap={"$2"}>
          <Icon as={LucideIcon} color={iconColor} />
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
        </HStack>
      )}
    </GluestakButton>
  );
}
