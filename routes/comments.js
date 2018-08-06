const expreas = require('express')


module.exports = {
  getComments (req, res) {
    let store = res.app.locals.store
    res.status(200).send(store.posts[req.params.postId].comments)
  },
  addComment (req, res) {
    let store = res.app.locals.store
    let post = store.posts[req.params.postId]
    post.comments.push(req.body)
    res.status(201).send({id: post.comments.length})
  },
  updateComment (req, res) {
    let store = res.app.locals.store
    let post = store.posts[req.params.postId]
    post.comments[req.params.commentId] = req.body
    res.status(200).send(post)
  },
  removeComment (req, res) {
    let store = res.app.locals.store
    let post = store.posts[req.params.postId]
    post.comments.splice(req.params.commentId, 1)
    res.sendStatus(204)
  }
}