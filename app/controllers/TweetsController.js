let twitter = require('../services/twitter');


const controller = {
    retweet: (req, res) => {
        twitter.retweetKeyword(params);
        return res.send("200");
    },

    streamTweets: (req, res) => {        
        twitter.streamTweets(req.body.track);
        return res.end("200");
    }
};

function init(io) {
    twitter = twitter(io);
    return controller;
}

module.exports = init;