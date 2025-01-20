import {
  Textarea as GluestackTextArea,
  TextareaInput,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type TextAreaProps = ComponentProps<typeof TextareaInput>;

export function TextArea({ ...rest }: TextAreaProps) {
  return (
    <GluestackTextArea
      bg="$white"
      borderRadius={"$md"}
      px={"$1"}
      py={"$2"}
      w={"$full"}
      borderWidth={"$0"}
      $focus={{
        borderWidth: 1,
        borderColor: "$bluelight",
      }}
    >
      <TextareaInput
        placeholderTextColor={"$gray400"}
        fontFamily="$body"
        color="$gray300"
        {...rest}
      />
    </GluestackTextArea>
  );
}
