const Twit = require('twit');
const config = require('../../configs/app_config');
let _io;

const Twitter = new Twit(config);

const services = {    
    retweetKeyword: async (params) => {
        let tweets, retweeted;
        try {
            tweets = await Twitter.get('search/tweets', params);               
            const retweet_id = tweets.data.statuses[0].id_str;
            retweeted = await Twitter.post('statuses/retweet/:id', {id: retweet_id});
        } catch (error) {
            console.log(error);
            return;
        }
        
        console.log("Retweeted! ");
    },

    tweet: (status) => {
        Twitter.post('statuses/update', {status}, (err, data, res) => {
            if(!err)
                console.log(data);
            else 
                console.log(err)
        });
    },

    streamTweets: (track) => {
        console.log(track);
        
        const Stream = Twitter.stream('statuses/filter', {track});

        // _io.on('connection', function(socket){
            // console.log("New connection");
            Stream.on('tweet', (tweet) => {
                console.log(tweet);
                _io.emit('tweets', tweet);

            });

        // });
        return;
    } 
};

function init(io) {    
    _io = io;
    return services;
}

module.exports = init;