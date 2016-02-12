const config = {
  port: process.env.PORT || 5000,

  opentrialsApi: require('./opentrials-api'),

  hapi: {
    plugins: [{
      register: require('good'),
      options: {
        reporters: [{
          reporter: require('good-console'),
          events: { log: '*', reponse: '*' },
        }],
      },
    }, {
      register: require('inert'),
    }, {
      register: require('vision'),
    }],

    views: require('./nunjuck'),
  },
};

module.exports = config;