import Navigation from "@src/components/navigation";
import { Slot, useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function Layout() {
  const { push } = useRouter();
  const isAuthenticated = false;

  console.log(isAuthenticated);

  return (
    <View className="h-screen bg-base-100 dark:bg-base-300-dark relative">
      <StatusBar />
      <View>
        <Slot />
      </View>
      {isAuthenticated && <Navigation />}
    </View>
  );
}
