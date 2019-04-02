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
  row:{
    flexDirection: 'row',
    width:'100%',
    justifyContent: 'center'
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
    marginBottom: 20
  },
  cardContainerStyle: {
    maxWidth: 450,
    width: '90%',
    // backgroundColor: '#FFF',
    // borderColor: '#afb5ba',
    // borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitleStyles: {
    // backgroundColor: '#e77c22',
    fontFamily: 'gotham-bold',
    color: Colors.white,
    paddingLeft: 15,
    fontSize: (screenWidth <= 600 ? 20 : 25),
    height: 30,
    lineHeight: 30,
  },
  cardBodyStyle: {
    // backgroundColor:'#dbe6f0',
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  // ScreenContainer Component Styles
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
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
  menuIconContainer:{
    width: 40, 
    height: 40,
    marginRight: 10,
    marginRight: 'auto',
    marginLeft: 10,
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
  },
  userCardPhotoContainer:{
    width: '25%',
    maxWidth: 110,
    justifyContent:'center',
    alignItems: 'center',
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
    marginTop: (screenWidth <= 600 ? 25 : 40),
    marginBottom: (screenWidth <= 600 ? 25 : 40),
    fontSize: (screenWidth <= 600 ? 17 : 20),
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
};

export default ApplicationStyles;
