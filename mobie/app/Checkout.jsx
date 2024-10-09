import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Using Ionicons for icons
import { useNavigation } from "@react-navigation/native"; // Use useNavigation from react-navigation
import { useRouter } from "expo-router";
import styles from "../components/styles"; // Importing the styles from the new file

export default function Checkout() {
  const router = useRouter();
  const navigation = useNavigation(); // For navigation
  const [selectedVariation, setSelectedVariation] = useState("red"); // State to manage selected variation

  // Images for variations
  const images = {
    black: require("../assets/images/black.png"),
    red: require("../assets/images/red.jpg"),
    white: require("../assets/images/white-shoe.png"),
  };

  return (
    <View style={styles.settingsContainer}>
      <View style={styles.settingsTopBar}>
        <TouchableOpacity
          style={styles.settingsBackButton}
          onPress={() => router.push("/shop")} // Navigate to the Shop screen
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.settingsTitle}>Checkout</Text>
      </View>

      <ScrollView contentContainerStyle={styles.settingsScrollView}>
        {/* Delivery Address section */}
        <View style={styles.deliveryAddressContainer}>
          <View style={styles.addressTitleContainer}>
            <Icon name="location-outline" size={24} color="#000" />
            <Text style={styles.addressTitle}>Delivery Address</Text>
          </View>

          <View style={styles.CheckoutCardsContainer}>
            {/* First Card - Address */}
            <View style={styles.checkoutCard}>
              <View style={styles.checkoutCardHeader}>
                <Text style={styles.checkoutCardHeaderText}>Address:</Text>
                <TouchableOpacity>
                  <Icon name="create-outline" size={20} color="#000" />
                </TouchableOpacity>
              </View>
              <Text style={styles.checkoutCardText}>
                2nd cross shanthinagar, banglore
              </Text>
              <Text style={styles.checkoutCardText}>
                Contact: +91-9361129250
              </Text>
            </View>

            {/* Second Card - Map */}
            <View style={styles.checkoutCard1}>
              <View style={styles.checkoutCardHeader}>
                <TouchableOpacity>
                  <Icon
                    name="add"
                    color="#000"
                    style={styles.checkoutAddIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.addressTitle1}>Shopping List</Text>

        <View style={styles.productCard}>
          <Image
            source={images[selectedVariation]} // Use selected variation image
            style={styles.productImage}
          />

          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>Women’s Casual Wear</Text>
            <View style={styles.radioGroup}>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => setSelectedVariation("red")}
              >
                <View
                  style={[
                    styles.radioCircle,
                    selectedVariation === "red" && styles.selectedRadio1,
                  ]}
                />
                <Text style={styles.radioLabel}>Red</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => setSelectedVariation("black")}
              >
                <View
                  style={[
                    styles.radioCircle,
                    selectedVariation === "black" && styles.selectedRadio,
                  ]}
                />
                <Text style={styles.radioLabel}>Black</Text>
              </TouchableOpacity>
            </View>

            {/* Star Rating */}
            <View style={styles.starRating}>
              {[...Array(5)].map((_, index) => (
                <Icon
                  key={index}
                  name="star"
                  size={24}
                  color={index < 4 ? "#FFD700" : "#d3d3d3"} // Yellow for 4 stars, grey for the last one
                  style={styles.star}
                />
              ))}
            </View>

            {/* Pricing and Discount */}
            <View style={styles.priceContainer1}>
              <Text style={styles.uptoText}>$ 34.00</Text>
              <View style={styles.discountContainer}>
                <Text style={styles.discountText1}>33% off</Text>
                <Text style={styles.originalPrice}>$ 64.00</Text>
              </View>
            </View>
          </View>

          {/* Total Order Text Below the Image */}
          <View style={styles.totalOrderContainer}>
            {/* Horizontal Line */}
            <View style={styles.hrLine1}></View>
            <Text style={styles.totalOrderText}>Total Order (1):</Text>
          </View>

          {/* Total Amount Below the Product Info */}
          <View style={styles.totalAmountContainer}>
            <Text style={styles.totalAmountText}>$ 34.00</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
