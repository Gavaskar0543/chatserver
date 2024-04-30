const express = require('express');
const { createServer } = require('node:http');
port = 4000;
const app = express();
const server = createServer(app);
const chatSockets = require('./Config/Socket').chatSockets(server);
const cors = require('cors');



app.set('view engine','ejs');
app.set('views','./View');


app.use('/',require('./Router'));
app.use(cors());
server.listen(port, (err) => {
 err?  console.log(err.message)  : console.log(`chatServer up on port:${port}`)
});