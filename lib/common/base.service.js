// const Model = require('../categories').CategoriesModel;
const commonErrors = require('../error/common-errors');

class BaseService {
  constructor(Model) {
    this.Model = Model;
  }

  getAll(query = {}, projection = {}, options = {}) {
    return this.Model.find().select('-__v').exec();
  }

  async getById(id = requiredParam(), projection = {}, options = {}) {
    const result = await this.Model.findById(id, projection, options).select('-__v').exec();
    if (!result) throw new commonErrors.NotFoundError();
    return result;
  }

  async getByIdAndUpdate(id = requiredParam(), update = requiredParam(), options = {}) {
    const result = await this.Model.findByIdAndUpdate(id, update, options).select('-__v').exec();
    if (!result) throw new commonErrors.NotFoundError();
    return result;
  }

  async updateById(id = requiredParam(), update = requiredParam(), options = {}) {
    const result = await this.Model.updateOne({ _id: id }, update, options).select('-__v').exec();
    if (result.n === 0) throw new commonErrors.NotFoundError();
    return result;
  }

  async save(docs = requiredParam()) {
    const modelObj = new this.Model(docs);
    const result = await modelObj.save();
    return result;
  }

  async deleteById(id = requiredParam()) {
    const result = await this.Model.deleteOne({ _id: id });
    if (result.n === 0) throw new commonErrors.NotFoundError();
    return result;
  }
}

function requiredParam(errorMsg = 'Required method parameter not found!') {
  throw new Error(errorMsg);
}

module.exports = BaseService;