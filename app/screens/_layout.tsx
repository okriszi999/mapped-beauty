import { Slot, usePathname, useRouter } from "expo-router";
import { navOptions } from "@src/data/routes";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  const { push } = useRouter();
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return push("authentication/login");
  }
  const pathname = usePathname();

  const isMain = pathname === "/screens/main";
  const currentRoute = navOptions.find((route) => route.path === pathname);

  const CalculatedView = isMain ? View : SafeAreaView;

  return (
    <CalculatedView className={`${isMain ? "" : "p-2"}`}>
      {!isMain && (
        <View className="flex flex-row justify-between items-center">
          <Text className="text-2xl text-primary-foreground opacity-50">
            {currentRoute?.name}
          </Text>
        </View>
      )}
      <Slot />
    </CalculatedView>
  );
}
