var db = require('../db');
// console.log('db', db.query);



module.exports = {
  messages: {
    get: function (req, res) {
      console.log('GET messages on server');
      var query = "SELECT * FROM messages ";

      db.query(query, function(err, result){
        if (err) {
          console.log(err);
        }
        res.writeHeader(200);
        console.log('result', result);
        res.end(JSON.stringify(result));
      });

    }, // a function which produces all the messages
    post: function (req, res, data) {

      var input = JSON.parse(JSON.stringify(req.body));
      var query = "INSERT INTO messages SET ? ";
      var objData  = {

        username: input.username,
        message: input.message,
        roomname: input.roomname

      };
      // console.log('username:',objData.username);
      // console.log('message:',objData.message);
      // console.log('roomname:',objData.roomname);

      db.query(query, objData, function(err, result){
        if (err) {
          console.log(err);
        }
        res.writeHeader(201);
        res.end();
        // console.log('result', result);
      });


      // INSERT INTO collection (username, message, roomname) VALUES (data.username, data.message, data.roomname);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      console.log('GET users on server');

    },
    post: function (req, res, data) {
      // console.log('data:',typeof data);
      var input = JSON.parse(JSON.stringify(req.body));
      var query = "INSERT INTO users SET ? ";
      var objData  = {

        username: input.username

      };
      // console.log('username:',objData.username);
      // console.log('message:',objData.message);
      // console.log('roomname:',objData.roomname);

      db.query(query, objData, function(err, result){
        if (err) {
          console.log(err);
        }
        res.writeHeader(201);
        res.end();
        // console.log('result', result);
      });

      // INSERT INTO messages ("username", "message", "roomname") VALUES (data.username, data.message, data.roomname);
    }
  }
};

