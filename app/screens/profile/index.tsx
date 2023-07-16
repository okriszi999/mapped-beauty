import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ProfileScreen() {
  const username = "John Doe";

  return (
    <View>
      <Text className="text-3xl text-primary-foreground underline">
        Hello, {username}!
      </Text>
      <View>
        <Text className="text-secondary-foreground mt-1">
          This is your profile page.
        </Text>
      </View>

      {/** His icon, and username, both editable and does something on touch */}
      <View className="flex flex-row items-center mt-4">
        <TouchableOpacity className="bg-primary rounded-full w-12 h-12 flex items-center justify-center border-2 border-secondary">
          <Text className="text-2xl text-secondary-foreground">JD</Text>
        </TouchableOpacity>
        <View className="ml-4">
          <Text className="text-2xl text-primary-foreground">{username}</Text>
        </View>
      </View>
    </View>
  );
}
