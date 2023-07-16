import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ProfileScreen() {
  const username = "John Doe";

  return (
    <View>
      <Text className="text-3xl text-primary-content underline">
        Hello, {username}!
      </Text>
      <View>
        <Text className="text-secondary-content mt-1">
          This is your profile page.
        </Text>
      </View>

      {/** His icon, and username, both editable and does something on touch */}
      <View className="flex flex-row items-center mt-4">
        <TouchableOpacity className="bg-base-200 rounded-full w-12 h-12 flex items-center justify-center border-2 border-primary">
          <Text className="text-2xl text-secondary-foreground">JD</Text>
        </TouchableOpacity>
        <View className="ml-4">
          <Text className="text-2xl text-primary-content">{username}</Text>
        </View>
      </View>
    </View>
  );
}
