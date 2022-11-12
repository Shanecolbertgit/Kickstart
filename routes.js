const routes = require('next-routes')();

routes
    .add('/campagins/new', '/campaigns/new')

    .add('/campaigns/:address', '/camapigns/show');

module.exports = routes;

