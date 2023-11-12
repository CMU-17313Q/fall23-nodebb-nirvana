'use strict';

const router = require('express').Router();
const { setupApiRoute } = require('../helpers');
const controllers = require('../../controllers');
const middleware = require('../../middleware');

// For students registering in the career module
module.exports = function () {
    // adding a login guard middleware
    const middlewares = [middleware.ensureLoggedIn];

    setupApiRoute(router, 'post', '/register', [...middlewares], controllers.write.career.register);

    return router;
};
