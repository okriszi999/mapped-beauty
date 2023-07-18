import { colors } from "@src/data/colors";
import { useState } from "react";
import { Text, TextInputProps, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

type InputProps = TextInputProps & {
  label: string;
};

export default function Input(props: InputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  function onFocusStyle() {
    setIsFocused(true);
  }

  function onBlurStyle() {
    setIsFocused(false);
  }

  return (
    <View className="flex gap-2 mb-3">
      <Text
        style={{
          borderColor: isFocused
            ? colors.primary.focus
            : colors.primary.DEFAULT,
        }}
        className="text-primary"
      >
        {props.label}
      </Text>
      <TextInput
        style={{
          borderColor: isFocused
            ? colors.primary.focus
            : colors.primary.DEFAULT,
        }}
        className="border-b-2 focus-visible:bg-red-500 px-1 py-2"
        onFocus={onFocusStyle}
        onBlur={onBlurStyle}
        {...props}
      />
    </View>
  );
}
