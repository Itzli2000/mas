import { Colors } from './../../../Themes';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const loginStyles = {
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