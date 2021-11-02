const express = require('express');
const router = express.Router();
//import routes
const usersRoute = require('./users.route');
const authRoute = require('./auth.route');

//use routes

let routePaths = [{
        path: '/authen',
        route: authRoute
    },
    {
        path: '/users',
        route: usersRoute
    }
];

routePaths.forEach(myroute => {
    router.use(myroute.path, myroute.route)
});


//export the router
module.exports = router