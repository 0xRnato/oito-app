const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProposeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  description: String,
  read: Boolean,
});

mongoose.model('notification', ProposeSchema);
