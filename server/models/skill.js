const mongoose = require('mongoose');

const { Schema } = mongoose;

const SkillSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
});

mongoose.model('skill', SkillSchema);
