import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../components/styles"; // Your custom styles
import { useRouter } from "expo-router"; // Import useRouter for navigation

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState(false);

  const router = useRouter(); // Initialize router for navigation

  const handleSignUp = () => {
    if (password === confirmPassword) {
      // Perform sign-up logic here (e.g., API call)
      router.push("/tabs/home"); // Navigate to your home route
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create an</Text>
      <Text style={styles.subheading}>account!</Text>

      {/* Username Input */}
      <View
        style={[
          styles.inputContainer,
          (isUsernameFocused || username) && styles.focusedInputContainer,
        ]}
      >
        <View
          style={[
            styles.iconContainer,
            (isUsernameFocused || username) && styles.focusedIconContainer,
          ]}
        >
          <Icon
            name="user"
            size={20}
            style={[styles.icon, isUsernameFocused && styles.focusedIcon]}
          />
        </View>
        <TextInput
          style={[
            styles.input,
            (isUsernameFocused || username) && styles.focusedInput,
          ]}
          placeholder="Username or Email"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          keyboardType="email-address"
          onFocus={() => setIsUsernameFocused(true)}
          onBlur={() => setIsUsernameFocused(false)}
        />
      </View>

      {/* Password Input */}
      <View
        style={[
          styles.inputContainer,
          (isPasswordFocused || password) && styles.focusedInputContainer,
        ]}
      >
        <View
          style={[
            styles.iconContainer,
            (isPasswordFocused || password) && styles.focusedIconContainer,
          ]}
        >
          <Icon
            name="lock"
            size={20}
            style={[
              styles.icon,
              (isPasswordFocused || password) && styles.focusedIcon,
            ]}
          />
        </View>
        <TextInput
          style={[
            styles.input,
            (isPasswordFocused || password) && styles.focusedInput,
          ]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.eyeIconContainer}
        >
          <Icon name={isPasswordVisible ? "eye" : "eye-slash"} size={20} />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View
        style={[
          styles.inputContainer,
          (isConfirmPasswordFocused || confirmPassword) &&
            styles.focusedInputContainer,
        ]}
      >
        <View
          style={[
            styles.iconContainer,
            (isConfirmPasswordFocused || confirmPassword) &&
              styles.focusedIconContainer,
          ]}
        >
          <Icon
            name="lock"
            size={20}
            style={[
              styles.icon,
              (isConfirmPasswordFocused || confirmPassword) &&
                styles.focusedIcon,
            ]}
          />
        </View>
        <TextInput
          style={[
            styles.input,
            (isConfirmPasswordFocused || confirmPassword) &&
              styles.focusedInput,
          ]}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!isConfirmPasswordVisible}
          onFocus={() => setIsConfirmPasswordFocused(true)}
          onBlur={() => setIsConfirmPasswordFocused(false)}
        />
        <TouchableOpacity
          onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
          style={styles.eyeIconContainer}
        >
          <Icon
            name={isConfirmPasswordVisible ? "eye" : "eye-slash"}
            size={20}
          />
        </TouchableOpacity>
      </View>

      {/* Agreement Text */}
      <Text style={styles.agreementText}>
        By clicking the <Text style={styles.registerText}>Register</Text>{" "}
        button, you agree to the public offer
      </Text>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)/home")}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      {/* Social Icons */}
      <Text style={styles.orContinueText}>- OR Continue with -</Text>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="google" size={30} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="facebook" size={30} color="#3B5998" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="instagram" size={30} color="#C13584" />
        </TouchableOpacity>
      </View>

      {/* Create Account */}
      <View style={styles.createAccountContainer}>
        <Text style={styles.createAccountText}>I Already Have an Account</Text>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles.signUpText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
