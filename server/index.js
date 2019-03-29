const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);

require('./config/loadEnv')();
require('./models')();
require('./config/passport');
const Logger = require('./helpers/logger');
const typeDefs = require('./typeDefs')();
const resolvers = require('./resolvers')();

const app = express();
const logger = new Logger();
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

mongoose.connection
  .once('open', () => logger.info('Database connected.'))
  .on('error', error => logger.error('Error connecting to database:', error));
process
  .on('uncaughtException', err => logger.error(`Uncaught Exception: ${err}`))
  .on('unhandledRejection', (reason, p) => logger.error(`Unhandled Rejection at: ${p} - reason: ${reason}`));

if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));
app.set('trust proxy', 1);
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/../dist`));

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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  else {
    logger.info(
      `Server online - http://localhost:${process.env.PORT}${server.graphqlPath} - Env: ${
        process.env.NODE_ENV
      }`,
    );
  }
});
