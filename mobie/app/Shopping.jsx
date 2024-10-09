import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import styles from "../components/styles";

export default function Shopping() {
  const router = useRouter();
  const [selectedVariation] = useState("black"); // State to manage selected variation
  const [size, setSize] = useState("Select Size"); // State to manage selected size
  const [quantity, setQuantity] = useState(1); // State to manage quantity
  const basePrice = 1000; // Define base price for the product

  // Images for variations
  const images = {
    black: require("../assets/images/black.png"),
  };

  // Array for available sizes
  const availableSizes = ["S", "M", "L", "XL"];

  // Function to handle quantity increase
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle quantity decrease
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Calculate the total amount based on the quantity
  const totalAmount = basePrice * quantity;

  return (
    <View style={styles.settingsContainer}>
      <View style={styles.settingsTopBar}>
        <TouchableOpacity
          style={styles.settingsBackButton}
          onPress={() => router.push("/shop")}
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.settingsTitle}>Shopping Bag</Text>
      </View>
      <ScrollView contentContainerStyle={styles.settingsScrollView}>
        <View style={styles.productCard}>
          <Image
            source={images[selectedVariation]} // Use selected variation image
            style={styles.productImage}
          />

          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>Women’s Casual Wear</Text>
            <Text style={styles.paymentText}>
              Solid Black Dress for Women, Sexy Chain Shorts Ladi...
            </Text>

            {/* Buttons for Size and Quantity */}
            <View style={styles.buttonRow}>
              {/* Dropdown for selecting size */}
              <TouchableOpacity
                style={styles.sizeButton1}
                onPress={() => {
                  setSize((prevSize) =>
                    prevSize === availableSizes[availableSizes.length - 1]
                      ? availableSizes[0]
                      : availableSizes[availableSizes.indexOf(prevSize) + 1]
                  );
                }}
              >
                <Text style={styles.sizeText}>{size}</Text>
                <Icon name="chevron-down" size={16} color="#000" />
              </TouchableOpacity>

              {/* Quantity control */}
              <View style={styles.quantityControl}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={decreaseQuantity}
                >
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityNumber}>{quantity}</Text>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={increaseQuantity}
                >
                  <Text style={styles.quantityText1}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Total Order Text Below the Image */}
          <View style={styles.totalOrderContainer}>
            <View style={styles.hrLine1}></View>
            <Text style={styles.totalOrderText}>Total :</Text>
          </View>

          {/* Total Amount Below the Product Info */}
          <View style={styles.totalAmountContainer}>
            <Text style={styles.totalAmountText}>₹{totalAmount}</Text>
          </View>
        </View>
        <View style={styles.cupponContainer}>
          <View style={styles.cupponOffersTitleContainer}>
            <Icon name="ticket-outline" size={24} color="black" />
            <Text style={styles.cupponOffersTitle}>Apply Coupons</Text>
          </View>
          <Text style={styles.cupponOffersSubtitle}>Select</Text>
        </View>
        <View style={styles.hrLine2}></View>

        <Text style={styles.addressTitle}>Order Payment Details</Text>
        <View style={styles.cupponContainer}>
          <View style={styles.cupponOffersTitleContainer}>
            <Text style={styles.cupponOffersTitle}>Order Amounts</Text>
          </View>
          <Text style={styles.totalAmountText}>₹{totalAmount}</Text>
        </View>
        <View style={styles.convienceContainer}>
          <View style={styles.convienceOffersTitleContainer}>
            <Text style={styles.convienceOffersTitle}>Convenience</Text>
            <Text style={styles.convienceOffersTitle1}>Know More</Text>
          </View>
          <Text style={styles.convirnceAmountText}>Apply Coupon</Text>
        </View>
        <View style={styles.cupponContainer}>
          <View style={styles.cupponOffersTitleContainer}>
            <Text style={styles.cupponOffersTitle}>Delivery Fee</Text>
          </View>
          <Text style={styles.cupponOffersSubtitle}>Free</Text>
        </View>
      </ScrollView>
      {/* Payment Button pinned to the bottom */}

      <View style={styles.paymentButtonContainer}>
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() =>
            router.push({
              pathname: "/payment",
              params: {
                orderAmount: totalAmount,
              },
            })
          }
        >
          <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
