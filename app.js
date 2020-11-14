const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const experienceRouter = require('./routes/experiences')

const port = process.env.PORT || 3000;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', experienceRouter);

app.listen(port, ()=> {
    console.log(`listening to port ${port}....`)
});