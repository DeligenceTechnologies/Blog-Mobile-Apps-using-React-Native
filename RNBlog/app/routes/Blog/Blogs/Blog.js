import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../../components/Button';
import Meteor, {MeteorComplexListView, MeteorListView} from 'react-native-meteor';

import images from '../../../config/images';
import Loading from '../../../components/Loading';
import styles from './styles';

const Blog = (props) => {
	const { blogData, currentUser, oneBlog, updateState } = props;
	return (
		<Image 
			style={styles.backgroundImage}
       		source={images.backGround} >

    		{currentUser?
					<Button
						style={{textAlign:'center'}}
						text = "Add new Blog here!!!!"
						onPress={props.onAddBlogPress}
					/>
				:
					<Text style={styles.header}>Log In to add a Blog! {currentUser}</Text>
			}
			
			{blogData?
				<View>
					<MeteorComplexListView
			        contentContainerStyle={styles.list}
			        keyboardShouldPersistTaps={true}
			        elements={()=>{return Meteor.collection('blogs').find({},{sort:{createdAt:-1}})}}
			        enableEmptySections={true}
				        renderRow={(blog) => 
				        	<View>	
					        	{blog?
					        		<View style={styles.item}>
										<View style={styles.titleTop}>
							        		<Text style={styles.messageBoxTitleText} onPress={() => props.onOneBlogPress(blog._id)}>
							        			{blog.title}
							        		</Text>
							        		{blog.owner == Meteor.userId()?
								        		<TouchableOpacity style={styles.cornerButton} onPress={() => props.onDeleteBlogPress(blog._id)}>
											      <Text style={styles.buttonText} >
											        &times;
											      </Text>
											    </TouchableOpacity>
											:
												<View/>
											}	    
										</View>
										<View>
											<TouchableOpacity onPress={() => props.onUserProPress(blog.owner)}>
												<Text style={styles.ownerName}>
													By: {blog.ownerName}
												</Text>
											</TouchableOpacity>
										</View>	
						        		<Text numberOfLines={1} style={styles.messageBoxBodyText}>
						        			{blog.content}
						        		</Text>
					        		</View>		
					        	:
					        		<View>
										<Text>No Blog Avaliable</Text>
									</View>	
					        	}
					        </View>	
				        }	
				     />	
			     </View>
			:
				 <Loading message="Logging Blogs....."/>   
			}
		</Image>
	)
} 

export default Blog;