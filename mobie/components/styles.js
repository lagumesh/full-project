import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start', // Align items to the start (top-left)
    padding: 35,
    backgroundColor: '#ffffff', // Change this if needed
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 1,
  },
  subheading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#ccc', 
  },
  focusedInputContainer: {
    backgroundColor: 'white', 
    borderColor: '#F83758', 
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: '100%',
  },
  focusedInput: {
    backgroundColor: 'white', 
    borderColor:'#F83758',
  },
  iconContainer: {
    padding: 10,
    backgroundColor: '#ccc', 
  },
  focusedIconContainer: {
    backgroundColor: 'white', 
  },
  icon: {
    color: '#666',
  },
  forgotPasswordContainer: {
    width: '100%', 
    alignItems: 'flex-end', 
  },
  focusedIcon: {
    color: 'black',
  },
  forgotPassword: {
    marginBottom: 20,
    color: '#F83758',
    alignSelf: 'flex-end',
  },
  button: {
    width: '100%',
    backgroundColor: '#F83758', 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  eyeIconContainer:{
    paddingRight: 15,
  },
  orContinueText: {
    marginTop:59,
    marginBottom:25,
    alignSelf:'center',
    fontSize: 16,
    color: '#575757',
    justifyContent: 'center',
    alignItems: 'center', 
  },

  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',  
    width: '100%',              
    alignItems: 'center',      
               
  },

  iconButton: {
    borderWidth: 2,
    borderColor: '#F83758',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',   
    alignItems: 'center',        
    marginHorizontal: 10,  
    backgroundColor: '#FCF3F6',       
  },
  createAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
   alignSelf:'center',
    alignItems: 'center',
  },
  createAccountText: {
    color: "#575757",
    fontSize: 16,
  },
  signUpText: {
    color: "#F83758",
    fontSize: 16,
    marginLeft: 5,
    textDecorationLine: "underline",
  },
  registerText: {
    color: "#FF4B26",
  },
  agreementText: {
    marginBottom: 10,
    fontSize: 14,
    color: "#333",
  },
  //home page
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  statusBarIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  centerItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 500,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 18,
  },
  modalBackground: {
    flex: 1,
  },
  dropdownPosition: {
    position: "absolute",
    top: 60,
    right: 15,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    elevation: 5,
  },
  dropdownItem: {
    fontSize: 16,
    paddingVertical: 5,
    color: "#000",
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  smallLogo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: 10,
  },
  loadingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4392F9",
    textAlign: "center",
    letterSpacing: 1,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 5,
    margin: 10,
  },
  iconContainer1: {
    padding: 10,
  
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
   
  },
  searchBarFocused: {
    backgroundColor: "#fff",
    borderWidth:2,
    borderColor:'#ccc',
  },
  featuredContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  
  featuredText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000', 
  },
  
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  button1: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff', 
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:2,
    borderColor:'#ccc',   

  },
  
  buttonText1: {
    color: '#000', 
    fontWeight: 'bold',
  },

  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  imagesContainer: {
    marginTop: 1,
    padding: 1,
  },
  scrollContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  homeImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: 'cover',
    marginRight: 12,
  },
  homeLabel: {
    marginTop: 8,
    fontSize: 16,
    textAlign: "center",
  },
  offerCard: {
  flexDirection: "row",
  backgroundColor: "#fff",
  borderRadius: 10,
  padding: 16,
  marginHorizontal: 16,
  marginTop: 20,
  elevation: 3, // for Android shadow
  shadowColor: "#000", // for iOS shadow
  shadowOffset: { width: 0, height: 2 }, // for iOS shadow
  shadowOpacity: 0.1, // for iOS shadow
  shadowRadius: 6, // for iOS shadow
},
offerCardTextContainer: {
  flex: 1,
  justifyContent: "space-between",
},
offerTitle: {
  fontSize: 18,
  fontWeight: "bold",
  color: "#223B8C",
},
offerSubtitle: {
  fontSize: 14,
  color: "#333",
  marginTop: 5,
},
shopNowButton: {
  backgroundColor: "#223B8C",
  borderRadius: 20,
  paddingVertical: 8,
  paddingHorizontal: 16,
  marginTop: 10,
},
shopNowButtonText: {
  color: "#fff",
  fontSize: 14,
  fontWeight: "bold",
},
offerCardImageContainer: {
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 20,
},
offerImage: {
  width: 100,
  height: 100,
  resizeMode: "contain",
},
imageWithTextContainer: {
  position: "relative",
  alignItems: "center",
  marginTop: 16, 
  margin:10,
},

overlayImage: {
  width: "100%", 
  height: 200, 
  resizeMode: "cover",
},

textContainer: {
  position: "absolute",
  top: 20, 
  left: 16, 
},

discountText5: {
  color: "white",
  fontSize: 30,
  fontWeight: "bold",
},

productText: {
  color: "white",
  fontSize: 20,
},

colorText: {
  color: "white",
  fontSize: 20,
},

shopNowButton: { 
  borderWidth:2,  
  padding: 10,
  borderRadius: 5,
  borderColor: 'white',
  width:150,
  marginTop:15,
  flexDirection: 'row',       
  alignItems: 'center',         
  justifyContent: 'center', 
},

shopNowButtonText: {
  color: "white",
  fontSize: 16,
  textAlign: "center",
},
arrowIcon: {
  marginLeft: 8,                
},
dealCard: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 16,
  backgroundColor: '#4392F9',
  borderRadius: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 6,
  elevation: 3,
  marginVertical: 10,
  margin:10,
},

dealLeftSection: {
  flexDirection: 'column',
  justifyContent: 'center',
},

dealTitle: {
  fontSize: 25,
  fontWeight: 'medium',
  color: '#fff',
},

dealCountdown: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 15,
},

clockIcon: {
  marginRight: 6,
  color: '#fff', 
},

countdownText: {
  color: '#fff', // Red for the countdown text
  fontSize: 14,
},

dealButton: {
  borderWidth:2,  
  padding: 8,
  borderRadius: 5,
  borderColor: 'white',
  width:100,
  marginTop:8,
  flexDirection: 'row',       
  alignItems: 'center',         
  justifyContent: 'center',
},

dealButtonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
},
cardContainer: {
 margin:10,
  width: 200, 
  marginRight: 15, 
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 10,
  elevation: 3, 
  shadowColor: '#000', 
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.2,
  shadowRadius: 2,
},
cardImage: {
  width: 180,
  height: 150,
 
},
cardTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: 5,
},
cardDescription: {
  fontSize: 14,
  color: '#555',
},
cardRate: {
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: 5,
},
cardOriginalPrice: {
  fontSize: 14,
  textDecorationLine: 'line-through',
  color: '#888',
},
discount: {
  color: '#FF0000',
},
ratingContainer: {
  flexDirection: 'row',
  marginTop: 5,
},
cardsContainer: {
  paddingVertical: 10,
},
specialOffersCard: {
  flexDirection: "row",
  backgroundColor: "#fff",
  borderRadius: 10,
  margin: 15,
  padding: 15,
  alignItems: "center",
  elevation: 5, // For Android shadow
  shadowColor: "#000", // For iOS shadow
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
},
specialOffersTitleContainer: {
  flexDirection: 'row', 
  alignItems: 'center', 
},
smallIcon: {
  width: 20, 
  height: 20, 
  marginLeft: 5, 
},
specialOffersLeft: {
  flex: 1,
},

specialOffersImage: {
  width: 80,
  height: 80,
  resizeMode: "contain",
},

specialOffersRight: {
  flex: 3,
  justifyContent: "center",
  paddingLeft: 30,
},

specialOffersTitle: {
  fontSize: 18,
  fontWeight: "bold",
  color: "#000",
  alignItems: 'center',         
  justifyContent: 'center',
  flexDirection:'row',
  
},

specialOffersSubtitle: {
  fontSize: 14,
  color: "#666",
  marginVertical: 5,
},

healsWithTextContainer: {
  position: "relative",
  alignItems: "center",
  marginTop: 16, 
  margin:10,
},

overlayImage: {
  width: "100%", 
  height: 200, 
  resizeMode: "cover",
},

healsContainer: {
  position: "absolute",
  right: 16, // Aligns the text container to the right
  alignItems: "flex-end",
  top: 30,
},

healsText: {
  color: "black",
  fontSize: 30,
  fontWeight: "bold",
},

healsproductText: {
  color: "black",
  fontSize: 15,
},

shopNowButton1: {
  backgroundColor: "#F83758",
  borderRadius: 10,
  paddingVertical: 8,
  paddingHorizontal: 16,
  marginTop: 10,
  width:150,
  flexDirection: "row", 
  justifyContent: "center", 
  alignItems: "center",
},
dealCard1: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 16,
  backgroundColor: '#FD6E87',
  borderRadius: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 6,
  elevation: 3,
  marginVertical: 10,
  margin:10,
},
dealTitle1: {
  fontSize: 20,
  fontWeight: 'medium',
  color: '#fff',
},
countdownText1: {
  color: '#fff', // Red for the countdown text
  fontSize: 15,
  paddingLeft: 8,
},
imageBelowGadgetsContainer: {
  alignItems: 'center',
  marginVertical: 20, 
},
imageBelowGadgets: {
  width: '100%', 
  height: 200, 
  resizeMode: 'contain', 
},
newArrivalsContainer: {
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  paddingHorizontal: 20, 
 
},
newArrivaltextContainer: {
  flexDirection: 'column',
},
newArrivalsText: {
  fontSize: 20, 
  fontWeight: 'bold',
  color: '#000',
},
summerCollectionText: {
  fontSize: 16, 
  color: '#666', 
},
newArrivalButton:{
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#F83758', 
  paddingHorizontal: 20, 
  paddingVertical: 10,
  borderRadius: 10, 
},
newArrivalButtonText:{
  color: 'white',
  fontSize: 16,
  
},
headingAndImageContainer: {
  alignItems: 'flex-start', 
  marginVertical: 20, 
},
sectionHeading: {
  fontSize: 24, // Adjust font size as needed
  fontWeight: 'bold',
  color: '#000', // Adjust heading color as needed
  marginBottom: 10, 
  paddingHorizontal:10,
},
sectionImage:{
  margin:10,
},
// wish list
starContainer: {
  flexDirection: 'row', // Arrange items in a row
  alignItems: 'center', // Center vertically
  justifyContent: 'flex-start', // Align items to the start
},
starIcon: {
  width: 20, // Adjust the size as needed
  height: 20, // Adjust the size as needed
  marginRight: 2, // Space between stars
},
columnWrapper: {
  justifyContent: "space-between",
   width:100,

},
card1: {
  width:170,
  borderWidth: 2,
  borderColor: '#ccc', 
  borderRadius: 10,
  margin: 10,
  shadowColor: '#000', 
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.3, 
  shadowRadius: 4, 
  elevation: 5, 
  backgroundColor: 'white', 
},
cardHeading1:{
  fontSize:20,
  fontWeight:"bold",
},
/*settings*/
settingsContainer: {
  flex: 1,
  padding: 16,
  backgroundColor: '#fff',
},
settingsTopBar: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: 60,
  backgroundColor: "#f8f8f8",
  elevation: 2, // Adds shadow on Android
},
settingsBackButton: {
  position: "absolute",
  left: 16, // Positioning the back button to the left
},
settingsTitle: {
  fontSize: 18,
  fontWeight: "bold",
  textAlign: "center",
},
settingsScrollView: {
  padding: 16, // Add some padding for the content
},
settingsContent: {
  fontSize: 16,
  marginBottom: 20, // Space between content items
},
inputContainer1: {
  width: '100%',  
},
settingsLabel: {
  fontSize: 16,
  fontWeight: '600',
  marginBottom: 5,
  color: '#000',
  marginTop:10,
},
passwordInputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,

},
settingsInput: {
  flex: 1,
  padding: 10,
  
},
personalDetailsHeading:{
  fontSize:20,
  fontWeight:'bold',
},
AddressDetailsHeading:{
  fontSize:20,
  fontWeight:'bold',
  marginTop:10,
},
eyeIcon: {
  position: "absolute",
  right: 10, 
  top: "30%",
  transform: [{ translateY: -12 }], 
  padding: 10, 
},

settingEyeIcon: {
  marginLeft: 5, 
  color: "#000", 
},
changePassword:{
  fontSize:16,
  color:"#F83758",
  alignItems:"flex-end",
  flexDirection:"row",
  justifyContent:"flex-end",
  marginTop:8,
  
},
changePasswords:{
  fontSize:16,
  color:"#F83758",
  alignItems:"flex-end",
  flexDirection:"row",
  justifyContent:"flex-end",
  textDecorationLine:"underline", 
},
hrLine: {
  height: 1, 
  backgroundColor: "#ccc", 
  marginTop: 20,

},
settingSaveButton:{
  backgroundColor:"#F83758",
  padding:10,
  marginVertical:10,
  borderRadius:8,
},
cartContainer: {
  flex: 1,
  padding: 16,
  backgroundColor: '#fff',
},
cartTopBar: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  height: 60,
  backgroundColor: "#fff",
  elevation: 4, 
},
cartBackButton: {
  position: "absolute",
  left: 16, 
},
cartIcon:{
  right:10,
},
sliderItem: {
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
},
sliderImage: {
  width: "100%",
  height: 250, // Adjust height as needed
  resizeMode: "cover",
},
settingsScrollView: {
  paddingBottom: 20,
},
cartImage:{
  width: "100%",
  height: 250, 
  resizeMode: "contain",
},
dotsContainer: {
  flexDirection: "row",
  justifyContent: "center",
  
},

dot: {
  width: 10, 
  height: 10,
  borderRadius: 5, 
  marginHorizontal: 5, 
  marginTop:10,
},
sizeText: {
  fontSize: 18,
  textAlign: "flex-start",
  marginVertical: 10,
  fontWeight:"bold",
},
sizeButtonsContainer: {
  flexDirection: "row",
  justifyContent: "flex-start",
  marginVertical: 10,
  flexWrap: "nowrap",
},
sizeButton: {
  padding: 8,
  borderRadius: 5,
  borderWidth: 2,
  borderColor: "#FA7189"   ,
  margin: 5,
  backgroundColor: "white",
},
activeButton: {
  backgroundColor: "red",
},
sizeButtonText: {
  fontSize: 16,
  color: "#FA7189", 
},
activeButtonText: {
  color: "white", 
},
cartHeadingadditionalText:{
  fontSize:22,
  fontWeight:"bold",
},
cartStarContainer:{
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'flex-start',
  marginTop:10,
},
priceContainer: {
  alignItems: "center", 
  marginVertical: 10,
},
originalPrice: {
  fontSize: 18,
  textDecorationLine: "line-through", 
  color: "gray",
},
discountedPrice: {
  fontSize: 22,
  fontWeight: "bold",
  color: "#FA7189", 
},
discountText: {
  fontSize: 18,
  color: "red", 
},
cartOffersTitleContainer:{
flexDirection:"row",
gap:10,
marginTop:10,
},
cartspecialOffersTitle:{
  fontSize:18,
  color:"#ccc",
  textDecorationLine:"line-through",
},
cartspecialOffers:{
  fontSize:18,
  color:"#000",
},
cartOfferRate:{
  fontSize:20,
  color:"#FA7189",
  fontWeight:"bold",
},
cartProductDetailsText:{
  fontSize:18,
  marginTop:12,
  fontWeight:"ultralight",
},
cartParagraphDetailsText: {
  fontSize: 18,
  fontWeight: '200', 
  lineHeight: 24, 
  textAlign: 'justify',
  maxWidth: 400, 
  flexWrap: 'wrap', 
  overflow: 'hidden',
},
moreLessText: {
  color: 'red',
  marginTop: 8, 
},
additionalButtonsContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 20,
  paddingBottom: 20,
},
additionalButton: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 5,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  backgroundColor: '#f9f9f9',
  width: '30%', 
  justifyContent: 'center',
},
additionalButtonText: {
  marginLeft: 5,
  fontSize: 16,
},
newButtonsContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 16,
},
cartRoundButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#3F92FF',
  borderRadius: 10,
  padding: 20,
  width: '48%', // Adjust width as needed
},
buyRoundButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#31B769',
  borderRadius: 10,
 
  width: '50%', 
},
roundButtonText: {
  marginLeft: 8,
  color: '#fff',
  fontWeight: 'bold',
  fontSize:20,
},
deliveryCard:{
  justifyContent: 'space-between',
  
  padding: 16,
  backgroundColor: '#FFCCD5',
  borderRadius: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 6,
  elevation: 3,
  marginVertical: 10,
  margin:10,
},
deliveryTitle:{
  fontSize:18,
  fontWeight:"bold",
},
deliveryTitle2:{
  fontSize:25,
  fontWeight:"bold",
  marginTop:10,
},
viewAdditionalButtonsContainer: {
  flexDirection: 'row',
gap:10,
  marginTop: 20,
  paddingBottom: 20,
},
viewAdditionalButton:{
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth:2,
  borderColor: '#ccc',
  borderRadius:10,
  padding:10,
},
similarText:{
  fontSize:18,
  fontWeight:"bold",
},
deliveryAddressContainer: {
  marginTop: 20,
},
addressTitleContainer: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 10,
},
addressTitle: {
  fontSize: 18,
  fontWeight: "bold",
  marginLeft: 8,
},
addressTitle1: {
  fontSize: 18,
  fontWeight: "bold",
  marginLeft: 8,
  marginTop:15,
},

CheckoutCardsContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
},

checkoutCard: {
  width: 246, 
  backgroundColor: "#fff",
  padding: 16,
  borderRadius: 10,
  marginRight: 10, // Space between the card and the container edge
  // Shadow properties for iOS
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.5,
  // Shadow properties for Android
  elevation: 5,
},

checkoutCard1: {
  width: 70, 
  backgroundColor: "#fff",
  padding: 16,
  borderRadius: 10,
  marginRight: 10, // Space between the card and the container edge
  // Shadow properties for iOS
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.5,
  // Shadow properties for Android
  elevation: 5,
},

checkoutCardHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 8,
},

checkoutCardHeaderText: {
  fontSize: 18,
  fontWeight: "bold",
},
checkoutCardText:{
  fontSize:18,
  fontWeight:"normal",
},
checkoutAddIcon:{
  fontSize:42,
  right:5,
  color:"#ccc",
  top:20,
},
radioGroup: {
  flexDirection: "row",
  alignItems: "center",
},
radioButton: {
  flexDirection: "row",
  alignItems: "center",
  marginRight: 16,
},
radioCircle: {
  width: 20,
  height: 20,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: "#000",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 8,
  
},
selectedRadio: {
  backgroundColor: "#000", 
},
selectedRadio1: {
  backgroundColor: "red", 
  borderColor:"red",
},
radioLabel: {
  fontSize: 16,
},
productImage:{
  width:150,
  height:150,
  borderRadius:20,
  marginRight: 16,
},
productCard:{
  width:"100%",
  flexDirection:"row",
  backgroundColor: "#fff",
  height:220,
  marginTop:10,
  padding: 10,
  borderRadius: 10,
  marginRight: 10, // Space between the card and the container edge
  // Shadow properties for iOS
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.5,
 
  elevation: 5,
},
productInfo: {
  flex: 1, 
  paddingLeft: 5,
},
productTitle:{
  fontSize:18,
  fontWeight:"bold",
},
starRating: {
  flexDirection: "row",
  marginTop: 8,
},
star: {
  marginRight: 4,
},
priceContainer1: {
  flexDirection: "row",
  alignItems: "flex-end",
  marginTop: 10,
},
discountContainer: {
  flexDirection: "column", 
  alignItems: "center",
},
uptoText: {
  color: "#000", 
  fontSize: 18,
  fontWeight:"bold",
  marginRight: 10,
  marginBottom:10, 
},
discountText1: {
  color: "#FF6347", 
  fontSize: 18,
  fontWeight: "bold",
  marginLeft: 5,
},
originalPrice: {
  textDecorationLine: "line-through", 
  color: "#A7A7A7", 
  fontSize: 18,
  fontWeight:"bold",
  marginLeft: 5,
},
totalOrderContainer: {
  position: "absolute", 
  bottom: 0, 
  left: 10,
  marginTop: 20,

},
totalOrderText: {
  fontSize: 16,
  fontWeight: "bold",

},
totalAmountContainer: {
  position: "absolute",
  bottom: 0,
  right: 10, 
},
totalAmountText: {
  fontSize: 18,
  fontWeight: "bold",
  color: "#000",
},
hrLine1: {
  width: 500,
  height: 1,
  backgroundColor: "#E0E0E0", // Light grey line
  marginVertical: 10, 
},
hrLine2: {
  width: 500,
  height: 1,
  backgroundColor: "#E0E0E0", // Light grey line
  marginVertical: 10, 
},
productCard1:{
  width:"100%",
  flexDirection:"row",
  backgroundColor: "#fff",
  height:220,
  marginTop:10,
  padding: 10,
  borderRadius: 10,
  marginRight: 10, // Space between the card and the container edge
  // Shadow properties for iOS
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.5,
  // Shadow properties for Android
  elevation: 5,
},
buttonRow:{
  flexDirection:"row",
  justifyContent:"space-between"
},
sizeButton1:{
  borderWidth:2,
  flexDirection:"row",
  padding:2,
  alignItems:"center",
  
  borderColor:"#F83758",
  borderRadius:10,
  justifyContent:"space-between",
},
quantityControl: {
  flexDirection: "row",
},
quantityButton: {
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 2,
  borderColor: "#F83758",
  borderRadius: 2,
 
  marginTop: 8,
  marginLeft:10,
 
  width: 30, 
},
quantityText: {
  fontWeight: "bold",
  fontSize: 25,
  color: "#000",
},
quantityNumber: {
  fontSize: 25,
  marginHorizontal: 2,
  alignSelf: "center",
},
quantityText1: {
  fontWeight: "bold",
  fontSize: 25,
  color: "#000",
},
cupponContainer:{
  flexDirection:"row",
  justifyContent:"space-between",
  marginVertical: 30, 
},
cupponOffersTitleContainer:{
  flexDirection:"row",
},
cupponOffersTitle:{
  fontSize:16,
  fontWeight:"bold",
},
cupponOffersSubtitle:{
  fontSize:16,
  color:"#F83758",
  fontWeight:"bold",
},
convienceContainer:{
  flexDirection:"row",
  justifyContent:"space-between",
},
convienceOffersTitleContainer:{
  flexDirection:"row",
  gap:4,
},
convienceOffersTitle:{
  fontSize:16,
  fontWeight:"bold",
},
convienceOffersTitle1:{
  fontSize:16,
  fontWeight:"bold",
  color:"#F83758",
},
convirnceAmountText:{
  fontSize:16,
  color:"#EA1712",
},

paymentButton: {
  backgroundColor: "#F83758",
  padding: 15,
  borderRadius: 5,
  alignItems: "center",
  justifyContent: "center",
  marginBottom:40,
},

paymentButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
},
finalPaymentContainer:{
  flexDirection:"row",
  justifyContent:"space-between"
},
paymentCard: {
  flexDirection: "row",
  alignItems: "center",
  padding: 16,
  backgroundColor: "#fff",
  borderRadius: 8,
  marginVertical: 10,
  elevation: 2, // Shadow for Android
  shadowColor: "#000", // Shadow for iOS
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 1.5,
  justifyContent: "space-between",
},
radioButton1: {
  width: 24,
  height: 24,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 12,
  borderWidth: 1,
  borderColor: "#ccc",
},
radioSelected: {
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: "#223B8C", // Color for selected radio button
  justifyContent: "center",
  alignItems: "center",
},
tickMark: {
  width: 14,
  height: 14,
  borderRadius: 7,
  backgroundColor: "#4CAF50", // Green background for tick mark
  position: "absolute",
  top: 3, // Adjust as needed
  left: 3, // Adjust as needed
},
modalContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
},
modalContent: {
  width: 300,
  backgroundColor: "#fff",
  padding: 20,
  borderRadius: 10,
  elevation: 5,
},
input1: {
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 5,
  padding: 10,
  marginBottom: 15,
},
button2: {
  backgroundColor: "#008631",
  padding: 10,
  borderRadius: 5,
  alignItems: "center",
},
buttonText: {
  color: "#fff",
  fontWeight: "bold",
},
successImage: {
  width: 100, 
  height: 100, 
  marginBottom: 20,
  left:80,
},

errorText: {
  color: "red",
  fontSize: 16,
 
  marginBottom: 8,
},
});

export default styles;
