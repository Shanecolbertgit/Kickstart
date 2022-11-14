const routes = require('next-routes')();

routes
    .add('/campagins/new', '/campaigns/new')

    .add('/campaigns/:address', '/camapigns/show')
    .add('/campaigns/:address/requests', '/campaigns.requests/index');

module.exports = routes;

