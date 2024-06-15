const adminSiteRouter = require('./admin');

function route(app) {
    app.use('/admin', adminSiteRouter);
}

module.exports = route;
