const express = require('express');
const cors = require('cors');
const app = express();
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

require('./helper/db')();
require('dotenv').config();

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');
const listsRouter = require('./routes/lists');

app.use(cors());
app.use(express.json());
app.use('/', indexRouter);
app.use('/todos', todosRouter);
app.use('/lists', listsRouter);

app.listen(process.env.PORT, function () {
    console.log(`listening on ${process.env.PORT}`);
});
