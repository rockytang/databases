var controllers = require('./controllers');
var router = require('express').Router();

// Iterate over the controllers (messages and users) and
//delegate the logic of the route to the controller

// this will lead to the path of ../classes/messages or ../classes/users

for (var route in controllers) {
  // when ..localhost:3000/classes
  router.route("/" + route)
    // route to ../messages or ../users
    .get(controllers[route].get)
    .post(controllers[route].post);
}
// export the route to app.js
module.exports = router;

