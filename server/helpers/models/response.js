const errors = require('./errorMessage');

class Success {
  constructor(data) {
    this.status = 'success';
    this.data = data;
  }

  send(res) {
    res.status(200).send({ status: this.status, data: this.data });
  }
}

class Fail extends Error {
  constructor({
    type = 'unknow',
    message = errors.unknow.message,
    errorCode = errors.unknow.errorCode,
    validations = null,
    statusCode = 500,
  }) {
    super();
    this.status = 'fail';
    this.data = {
      errorCode,
      type,
      message,
      validations,
    };
    this.statusCode = statusCode;
  }

  send(res) {
    res.status(this.statusCode).send({ status: this.status, data: this.data });
  }
}

class Response {
  constructor(status, args = { data: {} }) {
    if (status === 'success') return new Success(args.data);
    return new Fail(args);
  }
}

module.exports = Response;
