import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function AuthLayout() {
  return (
    <View className="h-screen bg-primary flex items-center justify-between">
      <Slot />
    </View>
  );
}
