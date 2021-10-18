const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const color = require('./src/util/color');
const user = require('./src/routes/user');

dotenv.config({ path: './config/config.evn' });

const app = express();

app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use('/api/v1/signup', user)

// app.use('/', (req, res) => {
//   res.send('Hey Instaclone!');
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server is running at port ${PORT}`.success));
