const mongoose = require('mongoose');

const Response = require('../helpers/models/response');

const ProposeModel = mongoose.model('propose');

class ProposeService {
  static async create(userId, data) {
    try {
      const newData = { ...data, from: userId };
      await ProposeModel.create(newData);
      return new Response('success', { data: { created: true } });
    } catch (err) {
      throw new Response('fail', err);
    }
  }

  static async getAllByUserId(userId) {
    try {
      const result = await ProposeModel.find({ $or: [{ from: userId }, { to: userId }] })
        .populate('offerId')
        .populate('from')
        .populate('to');
      return new Response('success', { data: result });
    } catch (err) {
      throw new Response('fail', err);
    }
  }

  static async newMessage(proposeId, data) {
    try {
      const result = await ProposeModel.findById(proposeId);
      const { messages } = result;
      messages.push(data);
      await ProposeModel.findByIdAndUpdate(proposeId, { messages });
      return new Response('success', { data: { created: true } });
    } catch (err) {
      throw new Response('fail', err);
    }
  }
}

module.exports = ProposeService;
