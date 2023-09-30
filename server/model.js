var mongoose = require('mongoose');
var imageSchema = new mongoose.Schema({
	caption: String,
	numLikes: Number,
	img:
	{
		data: String,
		contentType: String
	}
});

module.exports = mongoose.model('Image', imageSchema);
