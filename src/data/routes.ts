import { Ionicons } from "@expo/vector-icons";

type iconsType = keyof (typeof Ionicons)["glyphMap"];

export const navOptions = [
  {
    name: "Home",
    path: "/screens/main",
    icon: {
      on: "home",
      off: "home-outline",
    },
  },
  {
    name: "Favourites",
    path: "/screens/favourites",
    icon: {
      on: "heart",
      off: "heart-outline",
    },
  },

  {
    name: "Profile",
    path: "/screens/profile",
    icon: {
      on: "person",
      off: "person-outline",
    },
  },
  ,
] as {
  name: string;
  path: string;
  icon: {
    on: iconsType;
    off: iconsType;
  };
}[];
