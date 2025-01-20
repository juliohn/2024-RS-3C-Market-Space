import { Image } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type UserPhotoProps = ComponentProps<typeof Image> & {
  type?: "PRIMARY" | "SECONDARY";
};

export function UserPhoto({ type = "PRIMARY", ...rest }: UserPhotoProps) {
  return (
    <Image
      rounded="$full"
      borderWidth={type === "PRIMARY" ? 4 : 1}
      borderColor={type === "PRIMARY" ? "$bluelight" : "$white"}
      backgroundColor="$gray3"
      {...rest}
    />
  );
}
