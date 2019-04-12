const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProposeSchema = new Schema({
  title: String,
  description: String,
  read: Boolean,
});

mongoose.model('notification', ProposeSchema);
