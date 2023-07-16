import { useEffect, useState } from "react";
import { View } from "react-native";
import Mapview from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MainScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [displayMode, setDisplayMode] = useState<"dark" | "light">("light");

  useEffect(() => {
    (async () => {
      let { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  function changeDisplayMode() {
    const mode: typeof displayMode = displayMode === "dark" ? "light" : "dark";
    setDisplayMode(mode);
  }

  const isLightMode = displayMode === "light";

  return (
    <View>
      {location?.coords.latitude && location?.coords.longitude && (
        <View>
          <View className="absolute right-8 top-16 z-20 flex gap-3">
            <TouchableOpacity onPress={changeDisplayMode}>
              <Ionicons
                name={isLightMode ? "moon-sharp" : "sunny-sharp"}
                size={24}
                color={isLightMode ? "black" : "white"}
              />
            </TouchableOpacity>
          </View>
          <Mapview
            showsCompass={false}
            showsUserLocation={true}
            userInterfaceStyle={displayMode}
            className="h-screen w-full"
            initialRegion={{
              latitude: location?.coords.latitude || 37.78825,
              longitude: location?.coords.longitude || -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          ></Mapview>
        </View>
      )}
    </View>
  );
}
