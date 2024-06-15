module.exports = {
    setTokensFromSession: function(req, res, next) {
        if (req.session.tokens) {
            oauth2Client.setCredentials(req.session.tokens);
        }
        next();
    },
};