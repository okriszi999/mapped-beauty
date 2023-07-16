import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { navOptions } from "@src/data/routes";
import { BlurView } from "expo-blur";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <BlurView
      intensity={30}
      className="absolute bottom-0 left-0 w-screen pb-12 pt-2 backdrop-blur-xl"
    >
      <View className="flex flex-row  h-full items-center justify-evenly w-screen">
        {navOptions.map((option) => {
          const icon =
            pathname === option.path ? option.icon.on : option.icon.off;

          return (
            <Link
              href={option.path}
              key={option.path}
              className={
                pathname === option.path ? "border-t-2 border-black" : ""
              }
              asChild
            >
              <TouchableOpacity className="flex items-center gap-2 h-full">
                <Ionicons name={icon} size={24} color="white" />
                <Text className="text-primary-foreground">{option.name}</Text>
              </TouchableOpacity>
            </Link>
          );
        })}
      </View>
    </BlurView>
  );
}
