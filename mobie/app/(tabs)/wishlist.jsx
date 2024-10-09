import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StatusBar,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import styles from "../../components/styles";
import buttonOptions from "../(tabs)/buttonOptions.json";
import wishlistData from "../../app/wishlist.json"; // Import your wishlist data

// Statically import all images
const images = {
  item1: require("../../assets/images/item1.png"),
  item2: require("../../assets/images/item2.png"),
  black: require("../../assets/images/watch.png"),

  sandals: require("../../assets/images/women-printed-kurta.png"),
  // Add more images as necessary
};

export default function Wishlist() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const icons = {
    sort: require("../../assets/images/sort-icon.png"),
    filter: require("../../assets/images/filter-icon.png"),
  };

  // Updated renderCard function
  const renderCard = ({ item }) => (
    <View style={styles.card1}>
      <Image style={styles.cardImage1} source={images[item.src]} />
      <Text style={styles.cardHeading1}>{item.heading}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <Text style={styles.cardRate}>{item.rate}</Text>
      <View style={styles.starContainer}>
        {[...Array(5)].map((_, index) => (
          <Image
            key={index}
            source={require("../../assets/images/star-filled.png")} // Your star image
            style={styles.starIcon}
          />
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.homeContainer}>
      <StatusBar backgroundColor="#223B8C" barStyle="light-content" />

      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.statusBarIcon}
        />
        <View style={styles.centerItem}>
          <View style={styles.loadingContainer}>
            <Image
              source={require("../../assets/images/homelogosmall.png")}
              style={styles.smallLogo}
            />
            <Text style={styles.loadingText}>Stylish</Text>
          </View>
        </View>
        <TouchableOpacity onPress={toggleDropdown}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View
        style={[
          styles.searchBarContainer,
          inputFocused && styles.searchBarFocused,
        ]}
      >
        <TouchableOpacity style={styles.iconContainer1}>
          <Image
            source={require("../../assets/images/search-icon.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        <TouchableOpacity style={styles.iconContainer1}>
          <Image
            source={require("../../assets/images/mic-icon.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* All Featured Text and Buttons */}
      <View style={styles.featuredContainer}>
        <Text style={styles.featuredText}>{wishlistData.length} Items</Text>
        <View style={styles.buttonContainer}>
          {buttonOptions.map((option, index) => (
            <TouchableOpacity key={index} style={styles.button1}>
              <Text style={styles.buttonText1}>{option.label}</Text>
              <Image source={icons[option.icon]} style={styles.iconSmall} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Wishlist Cards */}
      <View style={styles.cardContainer1}>
        <FlatList
          data={wishlistData}
          keyExtractor={(item) => item.id.toString()} // Ensure ID is a string
          renderItem={renderCard}
          numColumns={2} // Display two cards per row
          columnWrapperStyle={styles.columnWrapper} // Add styling for columns
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Dropdown Modal */}
      <Modal
        transparent={true}
        visible={dropdownVisible}
        animationType="fade"
        onRequestClose={() => setDropdownVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setDropdownVisible(false)}
        >
          <View style={styles.dropdownPosition}>
            <View style={styles.dropdown}>
              <Text style={styles.dropdownItem}>Name: Lagumesh</Text>
              <Text style={styles.dropdownItem}>Sign Out</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
}
