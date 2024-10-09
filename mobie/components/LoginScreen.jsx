import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { useRouter } from "expo-router"; // Import useRouter

const LoginScreen = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [errors, setErrors] = useState({ username: "", password: "" });

  const router = useRouter(); // Initialize router

  // Validation function
  const validateInputs = () => {
    let valid = true;
    let newErrors = { username: "", password: "" };

    // Username validation
    if (!username) {
      newErrors.username = "Username or email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(username)) {
      newErrors.username = "Enter a valid email address";
      valid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle login click
  const handleLogin = () => {
    if (validateInputs()) {
      // If validation passes, perform login logic
      onLoginSuccess();
      router.push("/(tabs)/home"); // Move to another page
    } else {
      Alert.alert("Invalid Input", "Please check your username and password");
    }
  };

  // Clear validation error when the user provides input
  const handleUsernameChange = (value) => {
    setUsername(value);
    if (value && /\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (value.length >= 6) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.subheading}>Back!</Text>

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
          onChangeText={handleUsernameChange}
          autoCapitalize="none"
          keyboardType="email-address"
          onFocus={() => setIsUsernameFocused(true)}
          onBlur={() => setIsUsernameFocused(false)}
        />
      </View>
      {errors.username ? (
        <Text style={styles.errorText}>{errors.username}</Text>
      ) : null}

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
          onChangeText={handlePasswordChange}
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
      {errors.password ? (
        <Text style={styles.errorText}>{errors.password}</Text>
      ) : null}

      {/* Forgot Password */}
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity
          onPress={() => {
            /* Handle forgot password */
          }}
        >
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
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
        <Text style={styles.createAccountText}>Create An Account</Text>
        <TouchableOpacity onPress={() => router.push("/SignUp")}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
