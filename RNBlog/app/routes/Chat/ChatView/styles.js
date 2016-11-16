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
		color:'#eff0f1',
		fontWeight:'400',
		fontStyle:'italic',
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
	    textAlign:'center',
	    color:"#FFFFFF"
  	},
  	list: {
  		marginTop:10,
  		flexDirection: 'column',
	    flexWrap: 'wrap',
	    justifyContent: 'center',
        alignItems:'center',
	 },
	item: {
	    backgroundColor:'#2b2926',
        width:550,
        paddingTop:10,
        paddingBottom:20,
        marginBottom:10,
        borderRadius:3
	},
	chatButton: {
	    color: '#fff',
	    fontSize: 16,
	    fontWeight: '500',
	    textAlign:'center',
	    backgroundColor:'#2b2926'
	},
	chatMessage:{
		width:null,
		flexDirection:'column',
		alignItems:'flex-end',
		justifyContent: 'flex-end',
	},
	chatMessage1:{
		flex:0,
		backgroundColor:'#2b2926',
		flexDirection:'column',
		alignItems:'flex-end',
		minWidth:180,
		maxWidth:200,
		left:90,
        minHeight:35,
        borderLeftWidth :0,
        justifyContent: 'space-around',
        position: 'relative',
        paddingLeft:20,
        paddingRight:25, 
        marginBottom:10,
        borderRadius:3,
	},
	chatMessage2:{
		backgroundColor:'#2b2926',
        minWidth:180,
		maxWidth:180,
        flexDirection:'column',
		alignItems:'flex-start',
        right:90,
        minHeight:35,
        borderLeftWidth :0,
        justifyContent: 'space-around',
        position: 'relative',
        paddingLeft:25,
        paddingRight:20, 
        marginBottom:10,
        borderRadius:3,
	},
	message:{
		color:'#FFFFFF'
	},
	
});