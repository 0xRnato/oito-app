const mongoose = require('mongoose');

const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    displayName: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    skills: [
      {
        name: { type: String, required: true, unique: true },
        displayName: { type: String, required: true },
      },
    ],
  },
  { timestamps: { createdAt: true, updatedAt: true } },
);

mongoose.model('category', CategorySchema);
