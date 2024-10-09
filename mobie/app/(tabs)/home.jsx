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
import imageData from "../../app/imageData.json";
import buttonOptions from "../(tabs)/buttonOptions.json";
import cardData from "../../app/cardData.json"; // Import your card data JSON
import Ionicons from "react-native-vector-icons/Ionicons";
import gadgetsData from "../../app/gadgets.json";

// Statically import all images
const images = {
  "homeimg-1": require("../../assets/images/homeimg-1.png"),
  "homeimg-2": require("../../assets/images/homeimg-2.png"),
  "homeimg-3": require("../../assets/images/homeimg-3.png"),
  "homeimg-4": require("../../assets/images/homeimg-4.png"),
  "homeimg-5": require("../../assets/images/homeimg-5.png"),
  "homeimg-6": require("../../assets/images/homeimg-6.png"),
  "women-printed-kurta": require("../../assets/images/women-printed-kurta.png"), // Add this image
  shoe: require("../../assets/images/shoe.png"), // Add this image
  black: require("../../assets/images/black.png"), // Add this image
  watch: require("../../assets/images/watch.png"), // Add this image
  "white-shoe": require("../../assets/images/white-shoe.png"), // Add this image
  handbag: require("../../assets/images/handbag.png"), // Add this image
  sandals: require("../../assets/images/sandals.png"), // Add this image
};
const icons = {
  sort: require("../../assets/images/sort-icon.png"),
  filter: require("../../assets/images/filter-icon.png"),
};

export default function Home() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const renderCard = ({ item }) => (
    <View style={styles.cardContainer}>
      <Image
        source={images[item.image.split(".")[0]]}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <Text style={styles.cardRate}>₹{item.rate}</Text>
      <Text style={styles.cardOriginalPrice}>
        ₹{item.originalPrice}{" "}
        <Text style={styles.discount}>{item.discount}</Text>
      </Text>
      <View style={styles.ratingContainer}>
        {[...Array(item.rating)].map((_, index) => (
          <TouchableOpacity key={index} onPress={() => console.log("Rated!")}>
            <Ionicons name="star" size={20} color="#FFD700" />
          </TouchableOpacity>
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
        <Text style={styles.featuredText}>All Featured</Text>
        <View style={styles.buttonContainer}>
          {buttonOptions.map((option, index) => (
            <TouchableOpacity key={index} style={styles.button1}>
              <Text style={styles.buttonText1}>{option.label}</Text>
              <Image source={icons[option.icon]} style={styles.iconSmall} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Scrollable Images Section */}
      <View style={styles.imagesContainer}>
        <FlatList
          data={imageData}
          keyExtractor={(item) => item.id}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image style={styles.homeImage} source={images[item.src]} />
              <Text style={styles.homeLabel}>{item.label}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        />
      </View>
      {/* slider with overlay*/}
      <View style={styles.imageWithTextContainer}>
        <Image
          source={require("../../assets/images/offer-image.png")} // Replace with your image source
          style={styles.overlayImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.discountText5}>50-40% OFF</Text>
          <Text style={styles.productText}>Now in (product)</Text>
          <Text style={styles.colorText}>All colours</Text>
          {/* Shop Now Button */}
          <TouchableOpacity style={styles.shopNowButton}>
            <Text style={styles.shopNowButtonText}>Shop Now</Text>
            <Ionicons
              name="arrow-forward"
              size={24}
              color="white"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Deal of the Day Card */}
      <View style={styles.dealCard}>
        <View style={styles.dealLeftSection}>
          <Text style={styles.dealTitle}>Deal of the Day</Text>
          <View style={styles.dealCountdown}>
            <Ionicons
              name="time-outline"
              size={16}
              color="#FF0000"
              style={styles.clockIcon}
            />
            <Text style={styles.countdownText}>22h 55m 20s remaining</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.dealButton}>
          <Text style={styles.shopNowButtonText}>view All</Text>
          <Ionicons
            name="arrow-forward"
            size={24}
            color="white"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Cards Section */}
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id}
        horizontal={true}
        renderItem={renderCard}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      />
      {/* Special Offers Card */}
      <View style={styles.specialOffersCard}>
        <View style={styles.specialOffersLeft}>
          <Image
            source={require("../../assets/images/special-offer.png")}
            style={styles.specialOffersImage}
          />
        </View>
        <View style={styles.specialOffersRight}>
          <View style={styles.specialOffersTitleContainer}>
            <Text style={styles.specialOffersTitle}>Special Offers</Text>
            <Image
              source={require("../../assets/images/emoji.png")}
              style={styles.smallIcon}
            />
          </View>
          <Text style={styles.specialOffersSubtitle}>
            We make sure you get the offer you need at best prices
          </Text>
        </View>
      </View>
      {/*heals */}
      <View style={styles.healsWithTextContainer}>
        <Image
          source={require("../../assets/images/flats.png")} // Replace with your image source
          style={styles.overlayImage}
        />
        <View style={styles.healsContainer}>
          <Text style={styles.healsText}>Flat and Heels</Text>
          <Text style={styles.healsproductText}>
            Stand a chance to get rewarded
          </Text>

          {/* Visit now Button */}
          <TouchableOpacity style={styles.shopNowButton1}>
            <Text style={styles.shopNowButtonText}>Visit now </Text>
            <Ionicons
              name="arrow-forward"
              size={24}
              color="white"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* trending product*/}
      <View style={styles.dealCard1}>
        <View style={styles.dealLeftSection}>
          <Text style={styles.dealTitle1}>Trending Products </Text>
          <View style={styles.dealCountdown}>
            <Ionicons name="calendar-number-outline" size={24} color="white" />
            <Text style={styles.countdownText1}>Last Date 29/02/22</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.dealButton}>
          <Text style={styles.shopNowButtonText}>view All</Text>
          <Ionicons
            name="arrow-forward"
            size={24}
            color="white"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>
      {/* Gadgets Section */}
      <FlatList
        data={gadgetsData} // Use the gadgetsData here
        keyExtractor={(item) => item.id}
        horizontal={true}
        renderItem={renderCard}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      />
      {/* Image Below Gadgets Section */}
      <View style={styles.imageBelowGadgetsContainer}>
        <Image
          source={require("../../assets/images/summer-sale.png")} // Replace with the actual image you want to display
          style={styles.imageBelowGadgets}
        />
      </View>
      {/* New Arrivals Section */}
      <View style={styles.newArrivalsContainer}>
        {/* Left: Texts */}
        <View style={styles.newArrivaltextContainer}>
          <Text style={styles.newArrivalsText}>New Arrivals</Text>
          <Text style={styles.summerCollectionText}>
            Summer '25 Collections
          </Text>
        </View>

        {/* Right: Button */}
        <TouchableOpacity style={styles.newArrivalButton}>
          <Text style={styles.newArrivalButtonText}>Shop Now</Text>
          <Ionicons
            name="arrow-forward"
            size={24}
            color="white"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>
      {/* Heading and Image */}
      <View style={styles.headingAndImageContainer}>
        {/* Heading */}
        <Text style={styles.sectionHeading}>Sponserd</Text>

        {/* Image Below Heading */}
        <Image
          source={require("../../assets/images/sponsered.png")}
          style={styles.sectionImage}
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
