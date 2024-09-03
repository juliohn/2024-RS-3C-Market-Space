import { VStack, Text } from "@gluestack-ui/themed";
interface TitleProps {
  title: string;
}
export function Title({ title }: TitleProps) {
  return (
    <VStack alignItems="center" justifyContent="center">
      <Text color="$gray100" fontFamily="$heading" fontSize={"$lg"}>
        {title}
      </Text>
    </VStack>
  );
}
