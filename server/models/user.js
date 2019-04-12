const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  birthdate: Date,
  documentNumber: { type: String, required: true, unique: true },
  bio: String,
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
  profileImage: {
    fileName: String,
    data: String,
  },
  category: { type: Schema.Types.ObjectId, ref: 'category' },
  skills: [String],
});

UserSchema.pre('save', function cb(next) {
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
