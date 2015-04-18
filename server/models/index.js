var db = require('../db');
// console.log('db', db.query);



module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (res, data) {
      console.log('username:',data.username);
      console.log('message:',data.message);
      console.log('roomname:',data.roomname);

      var query = "INSERT INTO messages SET ? ";
      var data  = {

        username: data.username,
        message: data.message,
        roomname: data.roomname

      };

      db.query(query, post, function(err, result){
        if (err) {
          console.log(err);
        }
        res.writeHeader(201);
        res.end();
        console.log('result', result);
      });


      // INSERT INTO collection (username, message, roomname) VALUES (data.username, data.message, data.roomname);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (res, data) {
      // console.log('data:',typeof data);
      // console.log('username:',data.username);
      // console.log('message:',data.message);
      // console.log('roomname:',data.roomname);

      var query = "INSERT INTO messages SET ? ";
      var data  = {

        username: data.username,
        message: data.message,
        roomname: data.roomname

      };

      db.query(query, post, function(err, result){
        if (err) {
          console.log(err);
        }
        res.writeHeader(201);
        res.end();
        console.log('result', result);
      });

      // INSERT INTO messages ("username", "message", "roomname") VALUES (data.username, data.message, data.roomname);
    }
  }
};

