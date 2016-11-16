import {StyleSheet} from 'react-native';
import {colors} from '../../../config/styles';


export default StyleSheet.create({
	container:{
		marginTop:10,
		marginBottom:10,
		height:60,
	},
	name:{
		marginBottom: 25,
	    fontSize:30,
	    marginTop:-40,
	    marginRight:30,
	    marginBottom:30,
	    textAlign:'right',
	    color:"#484040",
	    fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    	fontStyle: 'italic',
	},
	main:{
		marginBottom: 25,
	    fontSize:20,
	    textAlign:'center',
	    color:"#484040",
	    fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    	fontStyle: 'italic',
	},
	label:{
		marginBottom: 25,
	    fontSize:20,
	    textAlign:'center',
	    color:"#484040",
	    fontFamily: 'Lucida Calligraphy, Courier, monospace'
	},
	backgroundImage: {
	    flex: 1,
	    width: null,
    	height: null,
  	},
	profilePicView:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        marginTop:20,
		marginLeft:20,
  	},
  	profileContent:{
        margin:10,
        marginTop:20
  	},
  	profilePic:{
  		width:100,
    	height: 100,
  	},
  	label:{
  		marginBottom: 25,
	    alignItems: 'flex-start',
	    fontSize:20,
	    textAlign:'center',
	    color:"#484040",
        alignItems:'flex-end',
  	},
  	content1:{
  		
  		flexDirection:'column',
        alignItems:'center',
  	},
  	content2:{
  		marginTop:-30,
  		flexDirection:'column',
  		alignItems:'flex-end'
  	},
  	noPro:{
  		flexDirection:'column',
  		alignSelf:'center',
  		justifyContent:'center',
  		marginTop: 50,
	    fontSize:20,
	    textAlign:'center',
	    color:"#484040",
	    fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    	fontStyle: 'italic',
  	}
});