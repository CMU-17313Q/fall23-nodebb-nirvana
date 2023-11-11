'use strict';

const controllers = require('../../controllers');
const router = require('express').Router();
const { setupApiRoute } = require('../helpers');

module.exports = function () {

  setupApiRoute(router, 'post', '/register', [], controllers.write.career.register);

  return router;
};
