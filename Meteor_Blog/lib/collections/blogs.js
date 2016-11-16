import {Mongo} from 'meteor/mongo';

//new collection for blog created
const Blogs = new Mongo.Collection('blogs');


export default Blogs;