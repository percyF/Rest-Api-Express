const express = require('express')
// import { store } from ('store')

module.exports = {
  getPosts (req, res) {
    let store = res.app.locals.store
    res.status(200).send(store.posts)
  },
  addPost (req, res) {
    let store = res.app.locals.store
    let post = req.body
    post.comments = []
    store.posts.push(post)
    res.status(201).send({id: store.posts.length})
  },
  updatePost (req, res) {
    let store = res.app.locals.store
    let post = store.posts[req.params.postId]
    let newPost = req.body
    newPost.comments = post.comments
    store.posts[req.params.postId] = newPost
    res.status(200).send(newPost)
  },
  removePost (req, res) {
    let store = res.app.locals.store
    store.posts.splice(req.params.postId, 1)
    res.sendStatus(204)
  }
}