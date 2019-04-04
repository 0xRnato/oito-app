const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProposeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  description: String,
  from: { type: Schema.Types.ObjectId, ref: 'user' },
  to: { type: Schema.Types.ObjectId, ref: 'user' },
  value: Number,
  startDate: Date,
  endDate: Date,
});

mongoose.model('propose', ProposeSchema);
