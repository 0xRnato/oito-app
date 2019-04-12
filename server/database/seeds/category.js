/* eslint-disable global-require */

const mongoose = require('mongoose');
const Logger = require('../../helpers/logger');

const logger = new Logger();

(async () => {
  try {
    require('../../config/loadEnv')();
    require('../../models')();

    mongoose.Promise = global.Promise;
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useNewUrlParser', true);
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    const db = mongoose.connection;
    db.once('open', () => logger.info('Database connection online'));
    db.on('error', err => logger.error(`Database error: ${err}`));
    process.on('uncaughtException', err => logger.error(`Uncaught Exception: ${err}`));
    process.on('unhandledRejection', (reason, p) => logger.error(`Unhandled Rejection at: ${p} - reason: ${reason}`));

    const CategoryModel = mongoose.model('category');

    const eventosData = {
      name: 'eventos',
      displayName: 'Eventos',
      description: 'Habilidades relacionadas à eventos',
      skills: [
        { name: 'barman', displayName: 'Barman' },
        { name: 'dj', displayName: 'DJ' },
        { name: 'seguranca-eventos', displayName: 'Segurança' },
        { name: 'porteiro-eventos', displayName: 'Porteiro' },
        { name: 'garcom', displayName: 'Garçom' },
        { name: 'animador', displayName: 'Animador' },
        { name: 'cozinheiro', displayName: 'Cozinheiro' },
        { name: 'musico', displayName: 'Musico' },
        { name: 'decorador', displayName: 'Decorador' },
        { name: 'manobrista', displayName: 'Manobrista' },
        { name: 'produtor', displayName: 'Produtor' },
      ],
    };

    const servicosGeraisData = {
      name: 'servicos-gerais',
      displayName: 'Serviços Gerais',
      description: 'Habilidades relacionadas à serviços gerais',
      skills: [
        { name: 'jardineiro', displayName: 'Jardineiro' },
        { name: 'eletricista', displayName: 'Eletricista' },
        { name: 'pintor', displayName: 'Pintor' },
        { name: 'gesseiro', displayName: 'Gesseiro' },
        { name: 'encanador', displayName: 'Encanador' },
        { name: 'vidraceiro', displayName: 'Vidraceiro' },
        { name: 'limpeza', displayName: 'Limpeza' },
        { name: 'seguranca-gerais', displayName: 'Segurança' },
        { name: 'porteiro-gerais', displayName: 'Porteiro' },
        { name: 'diarista', displayName: 'Diarista' },
        { name: 'motorista', displayName: 'Motorista' },
      ],
    };

    const modaBelezaData = {
      name: 'moda-beleza',
      displayName: 'Moda & Beleza',
      description: 'Habilidades relacionadas à moda e beleza',
      skills: [
        { name: 'manicure', displayName: 'Manicure' },
        { name: 'cabelereira', displayName: 'Cabelereira' },
        { name: 'depilacao', displayName: 'Depilação' },
        { name: 'massagista', displayName: 'Massagista' },
        { name: 'maquiadora', displayName: 'Maquiadora' },
        { name: 'consultora-estilista', displayName: 'Consultora/Estilista' },
        { name: 'design-sobrancelha', displayName: 'Design de sobrancelha' },
      ],
    };

    const artesanatoData = {
      name: 'artesanato',
      displayName: 'Artesanato',
      description: 'Habilidades relacionadas à artesanato',
      skills: [
        { name: 'costura', displayName: 'Costura' },
        { name: 'biju', displayName: 'Biju' },
        { name: 'bordado', displayName: 'Bordado' },
        { name: 'alfaiate', displayName: 'Alfaiate' },
        { name: 'ourives', displayName: 'Ourives' },
      ],
    };

    logger.info('START');
    await CategoryModel.create({ ...eventosData });
    await CategoryModel.create({ ...servicosGeraisData });
    await CategoryModel.create({ ...modaBelezaData });
    await CategoryModel.create({ ...artesanatoData });
    logger.info('DONE');
    process.exit();
  } catch (err) {
    logger.error(`Error: ${err}`);
    throw err;
  }
})();
