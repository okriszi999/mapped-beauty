import Navigation from "@src/components/navigation";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function Layout() {
  return (
    <View className="h-screen bg-base-100 dark:bg-base-300-dark relative">
      <StatusBar />
      <View>
        <Slot />
      </View>
      <Navigation />
    </View>
  );
}
