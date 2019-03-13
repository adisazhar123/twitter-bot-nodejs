const {PORT} = require('./configs/app_config');
const exphbs  = require('express-handlebars');
const path = require('path'); 
const express = require('express');
const app = express();
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const io = require('socket.io').listen(server);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routes = require('./routes/web')(io);

app.use(express.static(path.join(__dirname, '/public')));
app.engine('.hbs', exphbs({defaultLayout: 'app', extname: '.hbs'}));
app.set('view engine', '.hbs');


app.use('/', routes);



