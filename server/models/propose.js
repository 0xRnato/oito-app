const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProposeSchema = new Schema(
  {
    offerId: { type: Schema.Types.ObjectId, ref: 'offer' },
    from: { type: Schema.Types.ObjectId, ref: 'user' },
    to: { type: Schema.Types.ObjectId, ref: 'user' },
    messages: [
      {
        from: { type: Schema.Types.ObjectId, ref: 'user' },
        to: { type: Schema.Types.ObjectId, ref: 'user' },
        text: String,
      },
    ],
  },
  { timestamps: { createdAt: true, updatedAt: true } },
);

mongoose.model('propose', ProposeSchema);
