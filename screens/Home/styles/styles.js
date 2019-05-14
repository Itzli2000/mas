import { Colors } from './../../../Themes';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const HomeStyles = {
	homeCardInnerColumn: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10,
	},
	homeCardInnerColumnLeft: {
		width: '60%',
	},
	homeCardInnerColumnRight: {
		width: '40%',
	},
	homeCardInnerFlatItem: {
		padding: 5,
		fontSize: (screenWidth <= 600 ? 13 : 15),
		height: 30,
		color: '#000',
	},
	homeCardBody: {
		fontSize: 17,
		fontFamily: 'gotham-bold',
		alignItems: 'center',
		justifyContent: 'center',
		color: Colors.white
	},
};