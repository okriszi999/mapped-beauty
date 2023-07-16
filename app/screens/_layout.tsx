import { Slot, usePathname } from "expo-router";
import { navOptions } from "@src/data/routes";
import { Text, View } from "react-native";
export default function Layout() {
  const pathname = usePathname();

  const route = navOptions.find((option) => option.path === pathname);

  return (
    <View>
      {/* <Text>{route?.name}</Text> */}
      <Slot />
    </View>
  );
}
