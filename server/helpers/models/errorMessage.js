const errors = {
  unknow: {
    message: 'An unexpected error has occurred, sorry for the inconvenience.',
    errorCode: 10000,
    statusCode: 500,
  },
  invalidParameter: {
    message: 'Error in parameter validation.',
    errorCode: 10001,
    statusCode: 400,
  },
  withoutCredentials: {
    message: 'Trying to access the API without credentials.',
    errorCode: 10002,
    statusCode: 401,
  },
  emailUniqueKey: {
    message: 'This user name is already being used by another user.',
    errorCode: 10003,
    statusCode: 400,
  },
  dataTooLong: {
    message: "This data it's too long for this field.",
    errorCode: 10004,
    statusCode: 400,
  },
  passwordWrong: {
    message: 'Wrong password, please try again.',
    errorCode: 10005,
    statusCode: 401,
  },
  emailNotFound: {
    message: 'This email was not found in our database.',
    errorCode: 10006,
    statusCode: 400,
  },
  sessionNotFound: {
    message: 'Session expired.',
    errorCode: 10007,
    statusCode: 401,
  },
};

class ErrorMessage {
  constructor(type) {
    return {
      type,
      message: errors[type].message,
      errorCode: errors[type].errorCode,
      statusCode: errors[type].statusCode,
    };
  }
}

module.exports = ErrorMessage;
