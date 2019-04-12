const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProposeSchema = new Schema(
  {
    title: String,
    description: String,
    read: Boolean,
  },
  { timestamps: { createdAt: true, updatedAt: true } },
);

mongoose.model('notification', ProposeSchema);
