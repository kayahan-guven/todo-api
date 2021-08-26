const express = require('express');
const app = express();
const { TextEncoder, TextDecoder } = require('util')
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
const db = require('./helper/db')();
const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');

app.use(express.json());
app.use('/', indexRouter);
app.use('/todos', todosRouter);

app.listen(3000, function() {
    console.log('listening on 3000')
})