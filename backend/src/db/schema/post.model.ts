import mongoose from 'mongoose';


var postSchema = new mongoose.Schema({
	caption: String,
	numLikes: Number,
	img: String
}, { timestamps: true });

export default mongoose.model('Posts', postSchema);