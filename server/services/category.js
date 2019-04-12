const mongoose = require('mongoose');

const Response = require('../helpers/models/response');

const CategoryModel = mongoose.model('category');

class CategoryService {
  static async getAll() {
    try {
      const categories = await CategoryModel.find();
      return new Response('success', { data: categories });
    } catch (err) {
      throw new Response('fail', err);
    }
  }
}

module.exports = CategoryService;
