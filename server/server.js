const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const toDoRouter = require('./routes/todo.router');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// ROUTES
app.use('/to_do_list',toDoRouter )

// Start listening for requests on a specific port
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});