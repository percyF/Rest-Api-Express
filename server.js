const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const posts = require('./routes/posts')
const comments = require('./routes/comments')

let app = express()
app.use(logger('common'))
app.use(bodyParser.json())

// save the JSON into a "local" variable
app.locals.store = require('./store/store.json')


// routes
app.get('/posts', posts.getPosts)
app.post('/posts', posts.addPost)
app.put('/posts/:postId/', posts.updatePost)
app.delete('/posts/:postId/', posts.removePost)

app.get('/posts/:postId/comments', comments.getComments)
app.post('/posts/:postId/comments', comments.addComment)
app.put('/posts/:postId/comments/:commentId/', comments.updateComment)
app.delete('/posts/:postId/comments/:commentId/', comments.removeComment)

// set up default get route
app.get('/', posts.getPosts)

// save the json data to the app object
module.exports = app.locals.store

app.listen(3000)