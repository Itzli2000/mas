import Fonts from "./Fonts";
import Metrics from "./Metrics";
import Colors from "./Colors";
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const innerScroll = screenHeight - 80;

const ApplicationStyles = {
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
    backgroundColor: '#FFF',
    borderColor: '#afb5ba',
    borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  cardTitleStyles: {
    backgroundColor: '#e77c22',
    fontFamily: 'open-sans-bold',
    color: '#FFFFFF',
    paddingLeft: 15,
    fontSize: (screenWidth <= 600 ? 15 : 18),
    height: 30,
    lineHeight: 30,
  },
  cardBodyStyle: {
    backgroundColor:'#dbe6f0',
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
  // Home screen component styles
  homeComponentTopBar: {
    flexDirection: 'row',
    backgroundColor: '#292b33',
    minHeight: 80,
    paddingTop: 10,
    justifyContent:'flex-end',
    alignItems: 'center',
  },
  homeComponentImageLogo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    position: 'absolute',
    top: 15,
    left: 30,
  },
  homeComponentNavIcon: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
    marginRight: 10,
  },
  homeComponentDate: {
    fontSize: (screenWidth <= 600 ? 15 : 17),
    textAlign: 'right',
    paddingRight: 20,
    paddingTop: 15
  },
  homeComponentUserName: {
    marginTop: (screenWidth <= 600 ? 25 : 40),
    marginBottom: (screenWidth <= 600 ? 25 : 40),
    fontSize: (screenWidth <= 600 ? 17 : 20),
    textAlign: 'center',
    fontFamily: 'open-sans-extrabold',
  },
  homeComponentColumn: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  homeComponentColumnLeft: {
    width: '60%',
  },
  homeComponentColumnRight: {
    width: '40%',
  },
  homeComponentFlatItem: {
    padding: 5,
    fontSize: (screenWidth <= 600 ? 13 : 15),
    height: 30,
    color: '#000',
  },
  // Login check options container styles
  checkOptionContainer: {
    width: '100%',
    margin: 'auto',
    fontFamily: 'open-sans-regular',
    flexDirection: 'row',
    flexWrap: 'nowrap', 
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: 13,
  },
  checkOptionInlineText: {
    width: '70%',
    fontSize: 13,
    textAlign: 'justify',
    alignSelf: 'center',
  },
  checkOptionInlineSwitch: {
    width: '20%',
    marginRight: 10,
    alignSelf: 'center',
  },
  // Login component styles
  loginScrollViewContainer: {
    flexGrow: 0,
    height: '100%',
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
    marginTop: 30,
    marginBottom: 15,
    alignSelf: 'center', 
  },
  loginWelcomeText: {
    width: 300,
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'center',
    fontFamily: 'open-sans-regular',
    textAlign: 'center',
  },
  loginPasswordFogotText: {
    fontSize: 21,
    fontFamily: 'open-sans-semibold',
    textAlign: 'center', 
    marginTop: 20,
    marginBottom: 15,
  },
  loginButton: {
    width: 150,
    height: 40,
    margin: 'auto',
    alignSelf: 'center',
    backgroundColor: '#e77c22',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 15,
  },
  // Login Form Component Styles
    loginFormContainer: {
    alignItems: 'center',
    alignContent: 'center',
  },
  loginFormInputElement: {
    flexDirection:'row',
    height: 50,
    maxWidth: 300,
    borderWidth: 1,
    borderColor: '#74757e',
    margin: 0,
    marginTop: 10,
    borderRadius: 15,
    padding: 0,
    overflow: 'hidden'
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
    textAlign: 'center', 
    backgroundColor: 'transparent',
    overflow: 'hidden'
  },
  loginFormBackImage: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
};

export default ApplicationStyles;
