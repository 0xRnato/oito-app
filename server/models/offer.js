const mongoose = require('mongoose');

const { Schema } = mongoose;

const OfferSchema = new Schema(
  {
    title: String,
    description: String,
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    value: Number,
    deadline: Number,
    type: { type: String, enum: ['EMPLOYER', 'EMPLOYEE'] },
  },
  { timestamps: { createdAt: true, updatedAt: true } },
);

mongoose.model('offer', OfferSchema);
