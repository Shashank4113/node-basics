var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
require('dotenv').config();

// import Routes 
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

var app = express();

var urlencodedParser = express.urlencoded({ extended: false })

// DB Connection 
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('DB Connected !!'))

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

// Routes 
app.use(authRoutes)
app.use(userRoutes)
app.use(categoryRoutes)
app.use(productRoutes)

app.listen(process.env.PORT, () => console.log('server started running in 5000 port !!'))