import { Meteor } from 'meteor/meteor';

//publishing users
export default () => {
	Meteor.publish('users', () => {
		return Meteor.users.find();
	});
}

//methods for profile updation, user logout and user session update
Meteor.methods({
	'users.profileUpdate'(profileData){

		if(! this.userId){
			throw new Meteor.Error('not-authorized');
		}

		Meteor.users.update({_id:this.userId}, { 
			$set: { 
				profile: profileData 
			} 
		},{
			validate: false
		});
			
	},
	'users.sessionUpdate'(){
		Meteor.users.update({_id:this.userId},{
			$set: {
				session:'available'
			}
		})
	},
	'users.logout'(){
		Meteor.users.update({_id:this.userId},{
			$set: {
				session:'unavailable'
			}
		})
	}
})