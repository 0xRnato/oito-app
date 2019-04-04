const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);

require('./config/loadEnv')();
require('./models')();
require('./config/passport');
const Logger = require('./helpers/logger');

const app = express();
const logger = new Logger();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

mongoose.connection
  .once('open', () => logger.info('Database connected.'))
  .on('error', error => logger.error('Error connecting to database:', error));
process
  .on('uncaughtException', err => logger.error(`Uncaught Exception: ${err}`))
  .on('unhandledRejection', (reason, p) => logger.error(`Unhandled Rejection at: ${p} - reason: ${reason}`));

if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('trust proxy', 1);
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/../dist`));
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Key, Authorization',
  );
  next();
});
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
      url: process.env.MONGO_URI,
      autoReconnect: true,
    }),
  }),
);

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
