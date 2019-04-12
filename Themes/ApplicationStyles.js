import Fonts from "./Fonts";
import Metrics from "./Metrics";
import Colors from "./Colors";
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const innerScroll = screenHeight - 80;

const ApplicationStyles = {
  // General styles
  mainScrollContainer:{
    backgroundColor:Colors.white,
  },
  floatRight: {
    marginLeft: 'auto',
    width: '80%',
  },
  darkPicker: {
    backgroundColor: Colors.black,
    color: Colors.white,
    borderRadius:20,
    marginLeft:10,
  },
  textDivider: {
    height: 15,
    borderColor: 'rgba(255,255,255,0)',
    width: '90%',
    margin: 'auto',
    marginBottom: 15,
    borderBottomColor: Colors.white,
    borderWidth: 1,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row:{
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
  },
  column:{
    flexDirection: 'column',
  },
  pbDefault:{
    paddingBottom:20,
  },
  // Card Component Styles
  cardContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  cardContainerStyle: {
    maxWidth: 450,
    width: '90%',
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
  },
  fullCardContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  fullCardContainerStyle: {
    maxWidth: 650,
    width: '100%',
    borderRadius: 0,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
    marginTop: 20,
  },
  cardBackgorund: {
    justifyContent: 'center',
  },
  cardTitleContainer: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cardTitleIcon: {
    resizeMode: 'contain',
    width: 27,
    height: 27,
  },
  fullCardTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop:20,
  },
  cardIconStyles: {
    paddingLeft:15,
    color: Colors.white,
    fontSize: (screenWidth <= 600 ? 23 : 30),
  },
  cardTitleStyles: {
    paddingLeft:10,
    fontFamily: 'gotham-bold',
    color: Colors.white,
    fontSize: (screenWidth <= 600 ? 17 : 25),
    height: 30,
    lineHeight: 30,
  },
  cardBodyStyle: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
  },
  fullCardBody: {
    fontSize: 17,
    fontFamily: 'gotham-bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.white
  },
  // ScreenContainer Component Styles
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: screenHeight,
  },
  screenBackImage: {
    width: '100%', 
    height: '100%',
  },
  // Float Menu styles
  MenuHide: {
    left:'-120%',
  },
  MenuShow: {
    left:0,
  },
  cardfloatMenuData: {
    width: '80%',
    maxWidth: 300,
  },
  menuIconContainer:{
    width: 40, 
    height: 40,
    marginRight: 10,
    marginRight: 'auto',
    marginLeft: 10,
  },
  menuUserData:{
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: Colors.orange,
    borderBottomWidth: 1,
    paddingBottom:15,
    marginBottom:20,
    width:'95%',
    margin: 'auto',
  },
  menuUserPhotoContainer: {
    width: 75,
    height: 75,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 50,
    overflow: 'hidden',
  },
  menuUserPhoto: {
    width: '100%',
    height: '100%',
  },
  menuUserDataContainer:{
    width: '65%',
    justifyContent:'center',
    alignItems: 'flex-start',
    marginLeft:15,
  },
  menuUserUserName: {
    marginTop: (screenWidth <= 600 ? 10 : 15),
    fontSize: (screenWidth <= 600 ? 20 : 25),
    color: Colors.white,
    textAlign: 'right',
    fontFamily: 'gotham-bold',
  },
  menuUserUserSubtitle: {
    marginTop: (screenWidth <= 600 ? 7 : 10),
    fontSize: (screenWidth <= 600 ? 14 : 19),
    color: Colors.white,
    textAlign: 'right',
    fontFamily: 'gotham-bold',
  },
  menuLinks:{
    color: Colors.white,
    paddingTop:7,
    paddingBottom:7,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  menuLinksText: {
    fontSize: (screenWidth <= 600 ? 20 : 30),
    color: Colors.white,
  },
  menuIcons:{
    fontSize: (screenWidth <= 600 ? 17 : 30),
    color: Colors.white,
  },
  menuIconsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (screenWidth <= 600 ? 30 : 50),
    height: (screenWidth <= 600 ? 30 : 50),
  },
  menuIconsContainerBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (screenWidth <= 600 ? 30 : 50),
    height: (screenWidth <= 600 ? 30 : 50),
    borderRadius: (screenWidth <= 600 ? 15 : 25),
    backgroundColor: Colors.white,
  },
  menuIconsBottom:{
    fontSize: (screenWidth <= 600 ? 20 : 30),
    color: Colors.orange,
    padding:4,
  },
  menuListBottom:{
    borderTopColor: Colors.orange,
    borderTopWidth: 1,
  },
  // User card styles
  userCardTopBar: {
    minHeight: 80,
    paddingTop: 25,
    justifyContent:'flex-end',
    alignItems: 'center',
  },
  userCardfloatMenu:{
    width:'100%',
    height:'100%',
    position:'absolute',
    zIndex: 100,
    top:80,
    backgroundColor: Colors.menuBackground,
    opacity: 0.9,
    alignItems: 'center',
  },
  userCardPhotoContainer:{
    width: 100,
    height: 100,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 50,
    overflow: 'hidden',
  },
  userCardDataContainer:{
    width: '65%',
    justifyContent:'center',
    alignItems: 'center',
  },
  userCardPhoto:{
    width:100,
    height:100,
  },
  userCardDate: {
    fontFamily: 'gotham-bold',
    fontSize: (screenWidth <= 600 ? 13 : 17),
    color: Colors.white,
    textAlign: 'center',
  },
  userCardUserName: {
    marginBottom: (screenWidth <= 600 ? 15 : 20),
    fontSize: (screenWidth <= 600 ? 17 : 20),
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'gotham-bold',
  },
  userCardUserSubtitle: {
    marginTop: (screenWidth <= 600 ? 15 : 20),
    fontSize: (screenWidth <= 600 ? 14 : 19),
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'gotham-bold',
  },
  userCardMenuIcon: {
    resizeMode: 'contain',
    width: '100%', 
    height: '100%',
  },
  userCardImageLogo: {
    resizeMode: 'contain',
    width: 60, 
    height: 60,
    marginRight: 10,
  },
  userCardNavIcon: {
    resizeMode: 'contain',
    width: 45,
    height: 45,
    marginRight: 10,
  },

  // Home screen component styles
  homeCardIcon: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    marginRight: 5,
  },
  homeFirstSection: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  homePickerIcon: {
    position: 'absolute',
    right: 10,
    top: 5,
    width:25,
    height: 25,
    resizeMode: 'contain',
    zIndex: 100,
  },
  // Home screen component styles
  fullCardInnerColumn: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  fullCardInnerColumnLeft: {
    width: '60%',
  },
  fullCardInnerColumnRight: {
    width: '40%',
  },
  fullCardInnerFlatItem: {
    padding: 5,
    fontSize: (screenWidth <= 600 ? 13 : 15),
    height: 30,
    color: '#000',
  },
  // Login check options container styles
  checkOptionContainer: {
    width: '100%',
    margin: 'auto',
    fontFamily: 'gotham-regular',
    flexDirection: 'row',
    flexWrap: 'nowrap', 
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 20,
  },
  checkOptionInlineText: {
    width: '70%',
    fontSize: 14,
    paddingLeft:10,
    textAlign: 'justify',
    alignSelf: 'center',
    color: Colors.white,
  },
  checkOptionInlineSwitch: {
    width: '20%',
    paddingRight: 30,
    alignSelf: 'center',
    backgroundColor: 'red'
  },
  // Login component styles
  loginScrollViewContainer: {
    flexGrow: 0,
    minHeight: '100%',
    justifyContent: 'center',
  },
  loginContainer: {
    maxWidth: 350,
    width: '90%',
    alignSelf:'center'
  },
  loginImageLogo: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center', 
  },
  loginWelcomeText: {
    width: 300,
    fontSize: 17,
    lineHeight: 20,
    color: Colors.blueText,
    alignSelf: 'center',
    fontFamily: 'gotham-medium',
    textAlign: 'center',
  },
  loginPasswordFogotText: {
    fontSize: 19,
    fontFamily: 'gotham-regular',
    textAlign: 'center',
    color: Colors.white, 
    marginTop: 15,
    marginBottom: 20,
  },
  loginButton: {
    width: 150,
    height: 40,
    margin: 'auto',
    alignSelf: 'center',
    backgroundColor: Colors.orange,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 30,
  },
  // Login Form Component Styles
  loginFormContainer: {
    alignItems: 'center',
    alignContent: 'center',
  },
  loginFormInputElement: {
    flexDirection:'row',
    height: 50,
    maxWidth: 250,
    borderWidth: 1,
    borderColor: Colors.white,
    margin: 0,
    marginTop: 25,
    borderRadius: 15,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: Colors.white,
  },
  loginFormInputContainer: {
    height: 50,
  },
  loginFormInputsContainer: {
    flex: 1,
    borderRadius: 15,
    borderColor: 'transparent',
    },
  loginFormInputs: {
    fontSize:20,
    lineHeight:20,
    fontFamily: 'gotham-medium',
    color: Colors.orangeText,
    textAlign: 'center', 
    backgroundColor: 'transparent',
    overflow: 'hidden'
  },
  // Survey screen
  surveyContainer: {
    marginTop: 50,
    backgroundColor: Colors.userCardStart,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent:'center',
    alignItems:'center',
  },
  surveyBox: {
    width: '100%',
    maxWidth: 300,
  },
  surveyTitle: {
    fontSize: (screenWidth <= 600 ? 20 : 30),
    maxWidth: 270,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    fontFamily: 'gotham-bold',
  },
  surveyObservations: {
    fontSize: (screenWidth <= 600 ? 17 : 25),
    color: Colors.white,
    textAlign: 'left',
    marginTop: 15,
    fontWeight: 'bold',
    fontFamily: 'gotham-bold',
  },
  surveyCheck: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    width:250,
  },
  surveyCheckText: {
    color: Colors.white,
  },
  surveyObservationsText: {
    backgroundColor: Colors.white,
    marginTop: 20,
    marginBottom: 20,
  },
  surveyIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  surveyIconStyles: {
    padding:15,
    color: Colors.white,
    fontSize: (screenWidth <= 600 ? 55 : 65),
  },
  // Full card transparent styles
  
  transparentCardContainer: {
    flex: 1,
    width: '100%',
    maxWidth: 1000,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    marginTop: 20,
  },
  transparentCardContainerStyle: {
    borderRadius: 0,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.blackTransparent,
    borderBottomWidth: 2
  },
  transparentCardTitleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 40,
  },
  transparentcardTitleStyles: {
    paddingLeft:50,
    fontFamily: 'gotham-bold',
    color: Colors.black,
    fontSize: (screenWidth <= 600 ? 17 : 25),
  },
  transparentcardSubtitleStyles: {
    paddingLeft:50,
    fontFamily: 'gotham-bold',
    color: Colors.black,
    fontSize: (screenWidth <= 600 ? 15 : 20),
  },
  transparentCardIconStyles: {
    position: 'absolute',
    top: 7,
    left: 15,
    color: Colors.black,
    fontSize: (screenWidth <= 600 ? 30 : 45),
  },
  transparentCardBody: {
    fontSize: 17,
    fontFamily: 'gotham-bold',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: Colors.black,
    margin: 0,
  },
  // Visit screen styles
  visitButton: {
    width: 100,
    height: 40,
    marginLeft: 10,
    borderWidth: 0,
    borderRadius: 5,
  },
  buttonGreen:{
    backgroundColor: Colors.green,
  },
  buttonRed:{
    backgroundColor: Colors.red,
  },
  visitTextIn:{
    color: Colors.green,
    fontSize: (screenWidth <= 600 ? 15 : 18),
  },
  visitTextOut:{
    color: Colors.red,
    fontSize: (screenWidth <= 600 ? 15 : 18),
  },
  visitTextComplete:{
    backgroundColor: Colors.orange,
    color: Colors.white,
    width: 40,
    height: 40,
    marginLeft: 10,
    textAlign: 'center',
    borderRadius: 20,
  },
  visitCompleteIcon: {
    fontSize: 22,
    lineHeight: 40,
    padding: 0,
    margin: 0,
  },
  // Capture image screen
  imageCaptureHeader: {
    backgroundColor: Colors.black,
    paddingTop: 10,
    paddingBottom: 10,
  },
  imageCaptureHeaderText: {
    color: Colors.white,
    fontSize: 20,
    marginLeft: 15,
  },
  imageCaptureBreadcrumb:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  imageCaptureIconContainer:{
    backgroundColor: Colors.orange,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
  },
  imageCaptureIcon:{
    fontSize: 25,
    lineHeight: 40,
    color: Colors.white,
  },
  imageCaptureIconText: {
    color: Colors.black,
    fontSize: 30,
    marginLeft: 10,
  },
  imageCaptureBodyContainer:{
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: Colors.orange,
  },
  imageCaptureTitle:{
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
    fontFamily: 'gotham-bold',
    color: Colors.white,
  },
  imageCaptureInputPrice: {
    backgroundColor: Colors.white,
    width: '50%',
    color: Colors.black,
    borderRadius: 10,
    margin: 10,
    paddingLeft: 10,
  },
  imageCaptureText: {
    backgroundColor: Colors.white,
    margin: 10,
    borderRadius: 15,
    color: Colors.black,
    paddingLeft: 10,
    marginBottom: 50,
  },
  imageCaptureSection:{
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 30,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.userCardStart,
  },
  imageCapturePhotoContainer:{
    width: 150,
    height: 150,
    borderRadius: 50,
    overflow: 'hidden',
  },
  imageCapturePhoto:{
    width:150,
    height:150,
  },
  imageCaptureDataContainer:{
    width: '45%',
    justifyContent:'center',
    alignItems: 'center',
  },
};

export default ApplicationStyles;
