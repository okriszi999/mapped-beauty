import { Slot } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaView>
      <Text>
        <Slot />
      </Text>
    </SafeAreaView>
  );
}
