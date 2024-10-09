import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import styles from "../components/styles"; // Existing styles

export default function Payment() {
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); // State to manage selected payment method
  const [modalVisible, setModalVisible] = useState(false); // State for account details modal visibility
  const [successVisible, setSuccessVisible] = useState(false); // State for success popup visibility

  // Function to handle radio button press
  const handleRadioPress = () => {
    setSelectedPaymentMethod("visa");
    setModalVisible(true); // Show modal when selected
  };

  // Function to handle confirming payment
  const handleConfirmPayment = () => {
    setModalVisible(false); // Close account details modal
    setSuccessVisible(true); // Show success popup
  };

  return (
    <View style={styles.settingsContainer}>
      <View style={styles.settingsTopBar}>
        <TouchableOpacity
          style={styles.settingsBackButton}
          onPress={() => router.push("/Shopping")}
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.settingsTitle}>Shopping Bag</Text>
      </View>

      <ScrollView contentContainerStyle={styles.settingsScrollView}>
        <View style={styles.finalPaymentContainer}>
          <View style={styles.cupponOffersTitleContainer}>
            <Text style={styles.cupponOffersTitle}>Order</Text>
          </View>
          <Text style={styles.totalAmountText}>₹7000</Text>
        </View>
        <View style={styles.finalPaymentContainer}>
          <View style={styles.cupponOffersTitleContainer}>
            <Text style={styles.cupponOffersTitle}>Shipping</Text>
          </View>
          <Text style={styles.totalAmountText}>₹70</Text>
        </View>
        <View style={styles.finalPaymentContainer}>
          <View style={styles.cupponOffersTitleContainer}>
            <Text style={styles.cupponOffersTitle}>Total</Text>
          </View>
          <Text style={styles.totalAmountText}>₹7030</Text>
        </View>
        <View style={styles.hrLine1}></View>
        <Text style={styles.settingsTitle}>Payment</Text>

        {/* Payment Method Card */}
        <View style={styles.paymentCard}>
          <Image
            source={require("../assets/images/visa.png")} // Path to your VISA icon
            style={styles.visaIcon}
          />
          <TouchableOpacity
            style={styles.radiobutton1}
            onPress={handleRadioPress} // Set state on radio button press
          >
            <View style={styles.radioSelected}>
              {selectedPaymentMethod === "visa" && (
                <View style={styles.tickMark} />
              )}
            </View>
          </TouchableOpacity>
        </View>

        {/* Modal for Account Details */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Account Number:</Text>
              <TextInput
                style={styles.input1}
                placeholder="Enter Account Number"
                keyboardType="numeric"
              />
              <Text>Holder Name:</Text>
              <TextInput
                style={styles.input1}
                placeholder="Enter Holder Name"
              />
              <Text>IFSC Code:</Text>
              <TextInput style={styles.input1} placeholder="Enter IFSC Code" />
              <TouchableOpacity
                style={styles.button2}
                onPress={handleConfirmPayment} // Show success popup on confirm
              >
                <Text style={styles.buttonText}>Confirm Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Success Popup with Image */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={successVisible}
          onRequestClose={() => setSuccessVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Replace with your success image */}
              <Image
                source={require("../assets/images/success.gif")} // Path to your success image
                style={styles.successImage}
              />

              <TouchableOpacity
                style={styles.button2}
                onPress={() => setSuccessVisible(false)} // Close success popup
              >
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}
