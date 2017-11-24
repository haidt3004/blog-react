require('dotenv').config()
const express = require('express')
const app = express()
const { notFoundExc } = require('./modules/common/helpers')

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const morgan = require('morgan')
app.use(morgan('tiny'))

const posts = require('./modules/blog/routes/posts')
app.use(posts)

// Only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    const path = require('path')
    let frontendBuildPath = 'dist'
    app.use(express.static(frontendBuildPath));
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, frontendBuildPath, 'index.html'));
    });
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return next(notFoundExc('No route found'))
})

// error handler
app.use(function (err, req, res, next) {
    // errors thrown by app
    if (err.status) {
        let { status, ...data } = err
        res.status(status).json(data)
    } else {
        // uncaught exception
        res.status(500).json({
            code: 'server_error',
            message: err.message,
        })
    }
});

module.exports = app