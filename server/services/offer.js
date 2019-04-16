const _ = require('lodash');
const mongoose = require('mongoose');

const Response = require('../helpers/models/response');

const OfferModel = mongoose.model('offer');

class OfferService {
  static async create(userId, data) {
    try {
      const newData = { ...data, userId };
      await OfferModel.create(newData);
      return new Response('success', { data: { created: true } });
    } catch (err) {
      throw new Response('fail', err);
    }
  }

  static async getAllEmployer() {
    try {
      const offers = await OfferModel.find({ type: 'EMPLOYER' }).populate('userId');
      const result = _.map(offers, offer => ({
        id: offer._id, // eslint-disable-line no-underscore-dangle
        title: offer.title,
        description: offer.description,
        value: offer.value,
        deadline: offer.deadline,
        user: {
          id: offer.userId._id, // eslint-disable-line no-underscore-dangle
          name: offer.userId.name,
          bio: offer.userId.bio,
          address: {
            city: offer.userId.address.city,
            state: offer.userId.address.state,
            country: offer.userId.address.country,
          },
          profileImage: offer.userId.profileImage.data,
          category: offer.userId.category,
          skills: offer.userId.skills,
        },
      }));
      return new Response('success', { data: result });
    } catch (err) {
      throw new Response('fail', err);
    }
  }

  static async getAllEmployee() {
    try {
      const offers = await OfferModel.find({ type: 'EMPLOYEE' })
        .populate('userId');
      const result = _.map(offers, offer => ({
        id: offer._id, // eslint-disable-line no-underscore-dangle
        title: offer.title,
        description: offer.description,
        value: offer.value,
        deadline: offer.deadline,
        user: {
          id: offer.userId._id, // eslint-disable-line no-underscore-dangle
          name: offer.userId.name,
          bio: offer.userId.bio,
          address: {
            city: offer.userId.address.city,
            state: offer.userId.address.state,
            country: offer.userId.address.country,
          },
          profileImage: offer.userId.profileImage.data,
          category: offer.userId.category,
          skills: offer.userId.skills,
        },
      }));
      return new Response('success', { data: result });
    } catch (err) {
      throw new Response('fail', err);
    }
  }

  static async getAllEmployerByUser(userId) {
    try {
      const offers = await OfferModel.find({ type: 'EMPLOYER', userId });
      const result = _.map(offers, offer => ({
        title: offer.title,
        description: offer.description,
        value: offer.value,
        deadline: offer.deadline,
      }));
      return new Response('success', { data: result });
    } catch (err) {
      throw new Response('fail', err);
    }
  }

  static async getAllEmployeeByUser(userId) {
    try {
      const offers = await OfferModel.find({ type: 'EMPLOYEE', userId });
      const result = _.map(offers, offer => ({
        title: offer.title,
        description: offer.description,
        value: offer.value,
        deadline: offer.deadline,
      }));
      return new Response('success', { data: result });
    } catch (err) {
      throw new Response('fail', err);
    }
  }
}

module.exports = OfferService;
