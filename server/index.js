const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const passport = require('passport');

require('./config/loadEnv')();
require('./models')();
require('./config/passport');
const Cache = require('./helpers/cache');
const Logger = require('./helpers/logger');

const app = express();
const logger = new Logger();
Cache.createConnection();
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

if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.set('trust proxy', 1);
app.use(helmet());
app.use(express.static(`${__dirname}/../dist`));
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Key, Authorization',
  );
  next();
});

require('./routes')(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  else {
    logger.info(
      `Server online - http://localhost:${process.env.PORT} - Env: ${process.env.NODE_ENV}`,
    );
  }
});
