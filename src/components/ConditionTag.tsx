import { VStack, Text } from "@gluestack-ui/themed";
import { ComponentProps } from "react";
type ConditionTagProps = ComponentProps<typeof VStack> & {
  title: string;
  variantTag?: "PRIMARY" | "SECONDARY" | "TERTIARY";
};

export function ConditionTag({ title, variantTag }: ConditionTagProps) {
  return (
    <VStack
      rounded="$full"
      w={"$16"}
      h={"$6"}
      bg={
        variantTag === "PRIMARY"
          ? "$gray100"
          : variantTag === "SECONDARY"
          ? "$gray200"
          : "$blue"
      }
      alignItems="center"
      justifyContent="center"
    >
      <Text color={"$gray700"} fontFamily="$body" fontSize={"$sm"}>
        {title}
      </Text>
    </VStack>
  );
}
