import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import LoginScreen from "../components/LoginScreen";
import SignUp from "../app/SignUp";
import { Redirect } from "expo-router";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isSignUpMode, setIsSignUpMode] = useState(false); // To switch between login and signup

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false); // Hide splash after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set logged-in state
  };

  const handleSignUpSuccess = () => {
    setIsLoggedIn(true); // Set logged-in state when sign-up is successful
  };

  // Redirect to the home page if logged in
  if (isLoggedIn) {
    return <Redirect href="/tabs/home" />; // Redirect to your home page in the tabs folder
  }

  // Show the appropriate screen after the splash
  if (!isSplashVisible) {
    return (
      <View style={{ flex: 1 }}>
        {isSignUpMode ? (
          <SignUp onSignUpSuccess={handleSignUpSuccess} /> // Pass onSignUpSuccess to the SignUp component
        ) : (
          <LoginScreen onLoginSuccess={handleLoginSuccess} />
        )}
        {/* Toggle between login and signup */}
      </View>
    );
  }

  // Show splash screen while splash is visible
  return (
    <View style={styles.splashContainer}>
      <Image
        source={require("../assets/images/loading.png")}
        style={styles.splashImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  splashImage: {
    width: "60%",
    height: "60%",
  },
  toggleText: {
    textAlign: "center",
    color: "#007BFF",
    marginTop: 20,
  },
});
