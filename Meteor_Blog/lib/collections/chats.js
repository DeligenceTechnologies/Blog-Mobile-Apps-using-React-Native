import {Mongo} from 'meteor/mongo';

//new collection for chats created
const Chats = new Mongo.Collection('chats');


export default Chats;