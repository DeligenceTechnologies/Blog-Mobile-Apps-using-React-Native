import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../config/styles';

const window = Dimensions.get('window');
const MARGIN_HORIZONTAL = 10;
const cardSize = (window.width - (MARGIN_HORIZONTAL * 4)) / 2;


export default StyleSheet.create({
	container:{
		margin:20,
	},
	main:{
		fontSize:20,
		textAlign:'center',
		color:'#484040',
		fontWeight:'400',
		fontStyle:'italic',
		marginTop:30,
		marginLeft:10,
		marginRight:10,
	},
	title:{
		fontSize:20,
		fontWeight:'400',
		fontStyle:'italic',
		backgroundColor:"#FFFFFF",
		textAlign:'center',
		height:70,
		marginTop:50,
		borderTopLeftRadius:6,
		borderTopRightRadius:6,
		backgroundColor:'rgba(51, 39, 39, 0.20)',
	},
	content:{
		fontSize:20,
		fontWeight:'300',
		fontStyle:'italic',
		backgroundColor:"#FFFFFF",
		textAlign:'center',
		height:70,
		marginBottom:50,
		borderBottomLeftRadius:6,
		borderBottomRightRadius:6,
		backgroundColor:'rgba(51, 39, 39, 0.20)',
	},
	backgroundImage: {
	    flex: 1,
	    width: null,
    	height: null,
  	},
  	header: {
	    marginBottom: 25,
	    alignItems: 'center',
  	},
	item: {
	    backgroundColor: colors.buttonBackground,
	    // color: colors.buttonText,
	    width: cardSize,
	    height: cardSize,
	    marginHorizontal: MARGIN_HORIZONTAL,
	    marginVertical: 5,
	    paddingTop: cardSize / 2.3,
	    // fontSize: 16,
	    // fontWeight: '500',
	    textAlign: 'center',
	    alignItems: 'center',
	},
});