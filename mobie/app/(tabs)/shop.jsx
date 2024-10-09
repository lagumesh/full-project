import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  Text,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../components/styles";
import Carousel from "react-native-reanimated-carousel";
import cartButtonData from "../../app/cartbutton.json"; // Import the JSON data
import { useNavigation } from "@react-navigation/native";
import shopData from "../../app/wishlist.json";
import buttonOptions from "../(tabs)/buttonOptions.json";
import { useRouter } from "expo-router";
export default function Shop() {
  const router = useRouter();
  const navigation = useNavigation(); // Call useNavigation to get the navigation object
  const width = Dimensions.get("window").width;
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide
  const [selectedSize, setSelectedSize] = useState("7 UK"); // Default size
  const list = [
    {
      id: 1,
      title: "slide1",
      image: require("../../assets/images/slider1.png"),
    },
    {
      id: 2,
      title: "slide2",
      image: require("../../assets/images/white-shoe.png"),
    },
    {
      id: 3,
      title: "slide3",
      image: require("../../assets/images/slider3.png"),
    },
  ];
  const [showFullText, setShowFullText] = useState(false);

  const fullText = `
      Perhaps the most iconic sneaker of all-time, this original "Chicago" colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the return of the classic style, featuring the iconic red, black, and white color palette. The high-top silhouette and premium materials ensure that it not only looks great but also offers comfort and support for all-day wear. Whether you're a sneakerhead or just looking for a stylish addition to your wardrobe, this shoe is a must-have.
    `;
  const icons = {
    sort: require("../../assets/images/sort-icon.png"),
    filter: require("../../assets/images/filter-icon.png"),
  };
  const images = {
    item1: require("../../assets/images/item1.png"),
    item2: require("../../assets/images/item2.png"),
    black: require("../../assets/images/watch.png"),

    sandals: require("../../assets/images/women-printed-kurta.png"),
    // Add more images as necessary
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
    <View style={styles.cartContainer}>
      <View style={styles.cartTopBar}>
        <TouchableOpacity
          style={styles.settingsBackButton}
          onPress={() => router.push("/home")} // Navigate to the Shop screen
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Icon style={styles.cartIcon} name="cart" size={24} color="black" />
      </View>
      <ScrollView style={{ flex: 1, marginTop: 20 }}>
        <Carousel
          width={width}
          height={width / 2}
          data={list}
          onSnapToItem={(index) => setActiveSlide(index)} // Update active slide index
          renderItem={({ item }) => (
            <View>
              <Image style={styles.cartImage} source={item.image} />
            </View>
          )}
        />
        {/* Dots Indicator */}
        <View style={styles.dotsContainer}>
          {list.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dot,
                { backgroundColor: activeSlide === index ? "#FA7189" : "gray" },
              ]}
            />
          ))}
        </View>

        {/* Size Text */}
        <Text style={styles.sizeText}>Size: {selectedSize}</Text>

        {/* Size Buttons */}
        <View style={styles.sizeButtonsContainer}>
          {cartButtonData.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.sizeButton,
                selectedSize === button.size && styles.activeButton, // Apply active style if selected
              ]}
              onPress={() => setSelectedSize(button.size)} // Update size on button press
            >
              <Text
                style={[
                  styles.sizeButtonText,
                  selectedSize === button.size && styles.activeButtonText, // Change text color if active
                ]}
              >
                {button.size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Additional Text */}
        <Text style={styles.cartHeadingadditionalText}>NIke Sneakers</Text>
        <Text style={styles.ratingText}>
          Vision Alta Men’s Shoes Size (All Colours)
        </Text>

        {/* Stars Rating */}
        <View style={styles.cartStarContainer}>
          {[...Array(5)].map((_, index) => (
            <Icon
              key={index}
              name={index < 4 ? "star" : "star-outline"} // 4 yellow stars and 1 grey star
              size={24}
              color={index < 4 ? "#FFD700" : "gray"} // Color for stars
            />
          ))}
        </View>

        <View style={styles.cartoffers}>
          <View style={styles.cartOffersTitleContainer}>
            <Text style={styles.cartspecialOffersTitle}>₹2,999</Text>
            <Text style={styles.cartspecialOffers}>₹1,500</Text>
            <Text style={styles.cartOfferRate}>50% Off</Text>
          </View>
        </View>

        {/* Product Details Text */}
        <Text style={styles.cartProductDetailsText}>Product Details</Text>
        <View>
          <Text style={styles.cartParagraphDetailsText}>
            {showFullText ? fullText : `${fullText.substring(0, 100)}...`}
          </Text>
          <TouchableOpacity onPress={() => setShowFullText(!showFullText)}>
            <Text style={{ color: "red" }}>
              {showFullText ? "Less" : "More"}
            </Text>
          </TouchableOpacity>
        </View>
        {/* Additional Buttons Below Product Details */}
        <View style={styles.additionalButtonsContainer}>
          <TouchableOpacity style={styles.additionalButton}>
            <Icon name="location-outline" size={20} color="#000" />
            <Text style={styles.additionalButtonText}>Nearest Location</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.additionalButton}>
            <Icon name="lock-closed-outline" size={20} color="#000" />
            <Text style={styles.additionalButtonText}>VIP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.additionalButton}>
            <Icon name="timer-outline" size={20} color="#000" />
            <Text style={styles.additionalButtonText}>Return Policy</Text>
          </TouchableOpacity>
        </View>

        {/* New Buttons Below Additional Buttons */}
        <View style={styles.newButtonsContainer}>
          <TouchableOpacity
            style={styles.cartRoundButton}
            onPress={() => navigation.navigate("Checkout")} // Navigate to Checkout page
          >
            <Icon
              name="cart"
              size={20}
              color="#fff"
              style={styles.cartIconButton}
            />
            <Text style={styles.roundButtonText}>Go to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buyRoundButton}
            onPress={() => navigation.navigate("Shopping")} // Navigate to Shopping page
          >
            <Icon
              name="finger-print"
              size={20}
              color="#fff"
              style={styles.cartIconButton}
            />
            <Text style={styles.roundButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>

        {/* Deal of the Day Card */}
        <View style={styles.deliveryCard}>
          <View style={styles.deliveryLeftSection}>
            <Text style={styles.deliveryTitle}>Delivery in </Text>
            <Text style={styles.deliveryTitle2}>1 within Hour </Text>
          </View>
        </View>

        {/* Additional Buttons Below Product Details */}
        <View style={styles.viewAdditionalButtonsContainer}>
          <TouchableOpacity style={styles.viewAdditionalButton}>
            <Icon name="eye-outline" size={20} color="#000" />
            <Text style={styles.additionalButtonText}>View Similar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewAdditionalButton}>
            <Icon name="phone-portrait-outline" size={20} color="#000" />
            <Text style={styles.additionalButtonText}>Add to Compare</Text>
          </TouchableOpacity>
        </View>

        {/* Product Details Text */}
        <Text style={styles.similarText}>Similar To</Text>
        {/* All Featured Text and Buttons */}
        <View style={styles.featuredContainer}>
          <Text style={styles.featuredText}>{shopData.length} Items</Text>
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
            data={shopData}
            keyExtractor={(item) => item.id.toString()} // Ensure ID is a string
            renderItem={renderCard}
            numColumns={2} // Display two cards per row
            columnWrapperStyle={styles.columnWrapper} // Add styling for columns
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}
