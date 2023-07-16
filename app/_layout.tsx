import Navigation from "@src/components/navigation";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <View className="h-screen bg-primary relative">
      <View>
        <Slot />
      </View>
      <Navigation />
      <StatusBar style="light" />
    </View>
  );
}
