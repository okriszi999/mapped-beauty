import { useEffect } from "react";
import { Text, View } from "react-native";

export default function FavouritesScreen() {
  useEffect(() => {
    console.log("Hello, from favorites!");
  }, []);

  return (
    <View className="bg-primary">
      <Text className="text-secondary-foreground">Hello, from favs!</Text>
    </View>
  );
}
//# sourceMappingURL=index.js.map
