import { VStack, Text, Image } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type UserPhotoProps = ComponentProps<typeof Image>;

export function UserPhoto({ ...rest }: UserPhotoProps) {
  return (
    <Image
      rounded="$full"
      borderWidth={4}
      borderColor="$bluelight"
      backgroundColor="$gray3"
      {...rest}
    />
  );
}
