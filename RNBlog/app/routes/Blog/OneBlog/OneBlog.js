/*************************************Blog react-native component View********************************/
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../../../components/Button';
import Meteor, {MeteorComplexListView, MeteorListView} from 'react-native-meteor';

import images from '../../../config/images';
import Loading from '../../../components/Loading';
import styles from './styles';

const OneBlog = (props) => {
	const { oneBlog, updateState, currentUser, blogId } = props;
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

			<View>
				<ScrollView 
					ref={(scrollView) =>  this.scroller = scrollView}
			        automaticallyAdjustContentInsets={true}
			        keyboardShouldPersistTaps={true}
		        >
				<MeteorComplexListView
		        contentContainerStyle={styles.list}
		        keyboardShouldPersistTaps={true}
		        elements={()=>{return Meteor.collection('blogs').find({_id:props.oneBlog._id})}}
		        enableEmptySections={true}
		        renderRow={(blog) => 
	        	<View>
		        	{blog?
		        		<View style={styles.item}>
							<View style={styles.titleTop}>
				        		<Text style={styles.messageBoxTitleText}>
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

				        	<Text style={styles.messageBoxBodyText}>{blog.content}</Text>

				        	
				        	{blog.comments?
				        		<View style={styles.commentsBox}>
					        		<MeteorComplexListView
								        contentContainerStyle={styles.list}
								        selector={{done: true}}
								        elements={()=>{return blog.comments}}
								        keyboardShouldPersistTaps={true}
								        enableEmptySections={true}
								        renderRow={(comments) => 
								        	<View style={styles.titleTop}>
								        		<Text style={styles.commentBoxTitleText}>
								        			{comments.ownerName} says: {comments.comment}
								        		</Text>
								        		{(comments.commentOwner == Meteor.userId())||(comments.blogOwner == Meteor.userId())?
								        			<TouchableOpacity style={styles.cornerButton} onPress={() => props.onDeleteCommentPress(blog._id, comments._id)}>
												      <Text style={styles.buttonText} >
												        &times;
												      </Text>
												    </TouchableOpacity>	
								        		:
								        			<View/>
								        		}
											</View>	
								        }
								     /> 
								</View>
				        	:
				        		<View></View>
				        	}

				        	<View></View>

				        	{Meteor.user()?
				        		<View >
						        	<TextInput
										placeholder="Comment......."
										placeholderTextColor="#FFFFFF"
								        onChangeText={(comment) => updateState({ comment })}  
								        style={styles.main}
								        ref={component => this.textInput = component}
								    />
								    <Button
										style={styles.commentButton}
										text = "Comment"
										onPress={() => props.onCommentBlogPress(blog._id)}
									/>
							    </View>
				        	:
				        		<View/>
				        	}
				        	
		        		</View>		
		        	:
			        	<View>
							<Text>No Blog Avaliable</Text>
						</View>	
		        	}
		        </View>	
	        	}	
	     		/>
	     		</ScrollView>
	    	</View>
		</Image>
	)
} 

export default OneBlog;