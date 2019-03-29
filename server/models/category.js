const mongoose = require('mongoose');

const { Schema } = mongoose;

const CategorySchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  description: String,
  skills: [{ type: Schema.Types.ObjectId, ref: 'skill' }],
});

mongoose.model('category', CategorySchema);
