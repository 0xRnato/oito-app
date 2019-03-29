const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  description: String,
  address: {
    zipcode: String,
    street: String,
    number: String,
    complement: String,
    neighborhood: String,
    city: String,
    state: String,
    country: String,
  },
  avatar: {
    fileName: String,
    uri: String,
  },
  birthdate: Date,
  category: String, // TODO: change to category id
  documentNumber: String,
  skills: [String], // TODO: change to skill id
  type: { type: String, enum: ['EMPLOYER', 'EMPLOYEE'] },
});

UserSchema.pre('save', (next) => {
  const user = this;
  if (!user.isModified('password')) next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) next(err);
    bcrypt.hash(user.password, salt, null, (_err, hash) => {
      if (_err) next(_err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = (candidatePassword, cb) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

mongoose.model('user', UserSchema);
