import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../config/styles';



export default StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	main:{
		fontSize:20,
		textAlign:'center',
		color:'#484040',
		fontWeight:'400',
		fontStyle:'italic',
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
  	list: {
  		flexDirection: 'column',
	    flexWrap: 'wrap',
	    justifyContent: 'center',
        alignItems:'center',
	 },
	item: {
	    backgroundColor:'#2b2926',
	    alignSelf:'stretch',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        borderBottomWidth: 0.5,
	    borderColor: '#ccc'
        
	},
	chatButton: {
	    color: '#fff',
	    fontSize: 16,
	    fontWeight: '500',
	    textAlign:'left',
	},
	chatTouch:{
		flexDirection:'row',
	},
	dp:{
		alignSelf:'center',
	},
	chatDp:{
		width:40,
		height:40,
		borderRadius:20,
		paddingRight:5,
		marginLeft:5,
	},
	chatUser:{
		marginLeft:10,
		alignSelf:'center',
		flex:1
	},
	availability:{
		// flexDirection:'column',
		// alignItems:'flex-end',
		justifyContent:'center',
		margin:10
	},
	chatAvailability:{
		width:10,
		height:10,
		borderRadius:30,
		alignSelf:'flex-end'
	}
});