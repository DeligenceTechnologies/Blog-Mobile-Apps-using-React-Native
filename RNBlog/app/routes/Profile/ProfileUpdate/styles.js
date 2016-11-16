import {StyleSheet} from 'react-native';
import {colors} from '../../../config/styles';


export default StyleSheet.create({
	container:{
		
		margin:20
	},
	main:{
		fontSize:20,
		fontWeight:'300',
		fontStyle:'italic',
		backgroundColor:"#FFFFFF",
		textAlign:'center',
		height:70,
		backgroundColor:'rgba(51, 39, 39, 0.20)',
	},
	main1:{
		fontSize:20,
		fontWeight:'300',
		fontStyle:'italic',
		backgroundColor:"#FFFFFF",
		textAlign:'center',
		height:70,
		borderTopLeftRadius:6,
		borderTopRightRadius:6,
		backgroundColor:'rgba(51, 39, 39, 0.20)',
	},
	main2:{
		fontSize:20,
		fontWeight:'300',
		fontStyle:'italic',
		backgroundColor:"#FFFFFF",
		textAlign:'center',
		height:70,
		borderBottomLeftRadius:6,
		borderBottomRightRadius:6,
		backgroundColor:'rgba(51, 39, 39, 0.20)',
	},
	backgroundImage: {
	    flex: 1,
	    width: null,
    	height: null,
  	},
  	header:{
  		color:"#484040",
  		textAlign:"center",
  		fontSize:20,
  		paddingBottom:10,
  		paddingTop:10
  	},
  	button:{
  		width:318,
  		paddingVertical: 10,
	    paddingHorizontal: 20,
	    margin: 5,
		backgroundColor:'#2b2926',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius:10,
		paddingBottom:10,
		paddingTop:10,

  	},
	buttonText: {
	    color: '#fff',
	    fontSize: 16,
	    fontWeight: '500',
	    textAlign:'center',
	},
	buttons:{
		
		alignItems:'center'
	},
	profilePicView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

  	},
  	profilePic:{
  		width:100,
    	height: 100,
  	},
  	profilePicButtonView:{
  		width:30,
  	},
  	profilePicButton:{
  		width:30,
  		height:20,
  	},
  	profilePicButtonImage:{
		width:20,
		height:20,
  	}
});