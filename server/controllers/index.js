var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    // curl -X GET http://localhost:3000/classes/messages
    get: function (req, res) {
      console.log("testing ", req.method);

    }, // a function which handles a get request for all messages
    // curl -X POST http://localhost:3000/classes/messages --data "{ username: 'Valjean' }"
    post: function (req, res) { // a function which handles posting a message to the database
      // console.log('POST controllers messages', req.body);
      models.messages.post(req, res, req.body);

    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      // console.log('POST controllers users', req.body);
      models.users.post(req, res, req.body);
    }
  }
};

