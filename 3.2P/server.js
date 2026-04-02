const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});