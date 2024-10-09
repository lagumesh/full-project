import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../components/styles";
import yourImage from "../../assets/images/settings-logo.png";
import { Picker } from "@react-native-picker/picker";

export default function Settings() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(""); // State for country

  return (
    <View style={styles.settingsContainer}>
      <View style={styles.settingsTopBar}>
        <TouchableOpacity style={styles.settingsBackButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.settingsTitle}>Checkout</Text>
      </View>

      <ScrollView contentContainerStyle={styles.settingsScrollView}>
        {/* Centered image */}
        <View style={styles.imageContainer}>
          <Image
            source={yourImage}
            style={styles.centeredImage}
            resizeMode="contain"
          />
        </View>

        {/* Personal Details Heading */}
        <Text style={styles.personalDetailsHeading}>Personal Details</Text>

        {/* Email Input */}
        <View style={styles.inputContainer1}>
          <Text style={styles.settingsLabel}>Email</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.settingsInput}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer1}>
          <Text style={styles.settingsLabel}>Password</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.settingsInput}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={styles.eyeIcon}
            >
              <Icon
                style={styles.settingEyeIcon}
                name={passwordVisible ? "eye-off" : "eye"}
                size={24}
                color="#000"
              />
            </TouchableOpacity>
          </View>
          {/* Horizontal Line */}
          <View style={styles.hrLine}></View>
        </View>

        {/* Business Address Details */}
        <Text style={styles.AddressDetailsHeading}>
          Business Address Details
        </Text>

        {/* Pincode Input */}
        <View style={styles.inputContainer1}>
          <Text style={styles.settingsLabel}>Pincode</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.settingsInput}
              placeholder="Enter your pincode"
              value={Number}
              keyboardType="numeric"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Address Input */}
        <View style={styles.inputContainer1}>
          <Text style={styles.settingsLabel}>Address</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.settingsInput}
              placeholder="Enter your address"
              value={Text}
              keyboardType="text"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* City Input */}
        <View style={styles.inputContainer1}>
          <Text style={styles.settingsLabel}>City</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.settingsInput}
              placeholder="Enter your City"
              value={Text}
              keyboardType="text"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Country Dropdown */}
        <View style={styles.inputContainer1}>
          <Text style={styles.settingsLabel}>Country</Text>
          <View style={styles.passwordInputContainer}>
            <Picker
              selectedValue={selectedCountry}
              onValueChange={(itemValue) => setSelectedCountry(itemValue)}
              style={styles.settingsInput} // Reuse styles
            >
              <Picker.Item label="Select your country" value="" />
              <Picker.Item label="United States" value="US" />
              <Picker.Item label="Canada" value="CA" />
              <Picker.Item label="United Kingdom" value="UK" />
              <Picker.Item label="India" value="IN" />
              {/* Add more countries as needed */}
            </Picker>
          </View>
          {/* Horizontal Line */}
          <View style={styles.hrLine}></View>
        </View>
        {/* Bank Account Details */}
        <Text style={styles.AddressDetailsHeading}>Bank Account Details</Text>

        {/* Pincode Input */}
        <View style={styles.inputContainer1}>
          <Text style={styles.settingsLabel}>Bank Account Number</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.settingsInput}
              placeholder="Enter your Bank Account Number"
              value={Number}
              keyboardType="numeric"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Address Input */}
        <View style={styles.inputContainer1}>
          <Text style={styles.settingsLabel}>Account Holder’s Name</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.settingsInput}
              placeholder="Enter your name"
              value={Text}
              keyboardType="text"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* City Input */}
        <View style={styles.inputContainer1}>
          <Text style={styles.settingsLabel}>IFSC Code</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.settingsInput}
              placeholder="Enter your IFSC Code"
              value={Text}
              keyboardType="text"
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity style={styles.settingSaveButton}>
            <Text style={styles.shopNowButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
