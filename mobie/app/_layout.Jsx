import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { SplashScreen, Stack, useRouter } from "expo-router"; // expo-router for navigation
import LoginScreen from "../components/LoginScreen.jsx";
import SignUp from "./SignUp.jsx";
import Shop from "./shop.jsx"; // Import shop

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });

  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <SignedIn>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="shop" component={Shop} /> {/* Correct path */}
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen onLoginSuccess={handleLoginSuccess} />{" "}
        {/* LoginScreen on signed out */}
      </SignedOut>
    </ClerkProvider>
  );
}
