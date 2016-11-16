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
		height:50,
	},
	commentButton:{
		height:40
	},
	backgroundImage: {
	    flex: 1,
	    width: null,
    	height: null,
  	},
  	header: {
	    color:"#484040",
  		textAlign:"center",
  		fontSize:20,
  		paddingBottom:10,
  		paddingTop:10,
  		margin:20
  	},
  	list: {
  		flexDirection: 'column',
	    flexWrap: 'wrap',
	    justifyContent: 'center',
	    // backgroundColor:'#ebeef0',
        alignItems:'center',
	 },
	item: {
	    backgroundColor:'#2b2926',
        width:300,
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20, 
        marginBottom:10,
        borderRadius:10
	},
	messageBoxTitleText:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        fontSize:20,
        marginBottom:8,
        flex:1,
        fontFamily: 'fantasy',
  		fontStyle: 'italic'
    },
    ownerName:{
    	color:"#fff",
    	fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    	fontStyle: 'italic'
    },
    commentBox:{
    	marginTop:20
    },
    commentBoxTitleText:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'left',
        fontSize:15,
        marginBottom:10,
        flex:1
    },
    messageBoxBodyText:{
        color:'#fff',
        fontSize:16
    },
	cornerButton:{
		width: 10,
		marginLeft:4,
		backgroundColor:'#2b2926',
	},
	commentsButton:{
		width: 250,
		flexDirection: 'column',
		flexWrap: 'wrap',
		backgroundColor:'#2b2926',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
	    color: '#fff',
	    fontSize: 16,
	    fontWeight: '500',
	    textAlign:'center',
	},
	titleTop:{
        flexDirection:'row'
	}
});