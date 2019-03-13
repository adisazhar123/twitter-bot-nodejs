const express = require('express');
const router = express.Router();

function init (io) {
    const HomeController = require('../app/controllers/HomeController')(io);
    const TweetsController = require('../app/controllers/TweetsController')(io);
    
    router.get('/', HomeController.index);
    router.get('/retweet', TweetsController.retweet);
    router.post('/stream/tweets', TweetsController.streamTweets);

    return router;
};

module.exports = init;