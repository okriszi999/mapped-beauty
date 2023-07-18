import { Redirect } from "expo-router";

export default function MainScreen() {
  const isAuthenticated = false;

  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Redirect href="authentication/login" />;
  }

  return <Redirect href="screens/main" />;
}
