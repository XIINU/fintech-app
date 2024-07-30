import Colors from "@/constants/Colors";
import { AntDesign, Feather } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useFonts } from "expo-font";
import { Link, router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import "react-native-reanimated";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="signup"
        options={{
          title: "Sign up",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />

      <Stack.Screen
        name="login"
        options={{
          title: "Login",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerRight: () => (
            <Link href={"/help"} asChild>
              <TouchableOpacity>
                <Feather name="help-circle" size={24} color="black" />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />

      <Stack.Screen
        name="help"
        options={{
          title: "Help",
          presentation: "modal",
          headerShown: true,
          headerLeft: () => false,
          headerRight: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          ),
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
  );
}
