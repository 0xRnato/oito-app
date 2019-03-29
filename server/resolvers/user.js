const userData = {
  _id: '1',
  name: 'Renato Neto',
  email: 'rnato.netoo@gmail.com',
  password: '$2a$10$EYg8Oxg5EXASXjBAbah0TuHozpaOSp/DNTfnJSK9UKZ2o91K55fuq',
  phone: '11 94376-5066',
  birthdate: 'Fri Mar 29 2019 17:48:48 GMT-0300 (Brasilia Standard Time)',
  documentNumber: '125.572.436-63',
  description: "Hi, it's me Renato!!!!!",
  address: {
    zipcode: '32673-550',
    street: 'Av coronel jose pires de andrade',
    number: '850',
    complement: 'apto 22',
    neighborhood: 'Vila Vera',
    city: 'Sao Paulo',
    state: 'Sao Paulo',
    country: 'Brasil',
  },
  avatar: {
    fileName: 'String',
    uri: 'String',
  },
  type: 'EMPLOYEE',
  category: 'Artesanato',
  skills: ['Costura', 'Bordado', 'Ourives'],
};

module.exports = {
  getUser: () => userData,
};
