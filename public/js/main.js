$(function() {


    const socket = io();

    socket.on('tweets', function(tweets){
        console.log(tweets);
      });

    // $('form').submit(function(e){
    //   e.preventDefault(); // prevents page reloading
    //   socket.emit('chat message', $('#m').val());
    //   $('#m').val('');
    //   return false;
    // });

    $("#search").click(function() {
        console.log("Hello!");
        const track = {
            track: $(".search-bar").val(),
            timestamps: new Date()
        };

        $.ajax({
            url: '/stream/tweets',
            data: track,
            method: 'POST',
            success: function(data) {
                console.log(data)
            },
            error: function(err) {
                console.log(err);
            }
        });

    });


});