const express = require("express")
const router = express.Router()

const postsControllers = require("../controllers/posts-controllers")

//@route GET Posts
//@desc Retornar todos os Posts
//@acces Public
//@endpoint http://localhost:porta/posts
router.get("/posts", postsControllers.getPosts)

//@route GET Posts
//@query :id
//@desc Retornar apenas uma única tarefa pelo seu id
//@acces Public
//http://localhost:porta/posts/:id
router.get("/posts/:id", postsControllers.getPostById)

//@route GET Posts
//@query Posts
//@desc Retornar apenas posts que contém aquele titulo
//@acces Public
//http://localhost:porta/posts/titulo
router.get("/posts/titulo", postsControllers.getPostByTitle)

//@route POST Posts
//@desc Criar um post
//@acces Public
//http://localhost:porta/posts
router.post("/posts", postsControllers.createPost)

//@route DELETE Posts
//@desc Deletar um post
//@acces Public
//http://localhost:porta/:id
router.delete("/posts/:id", postsControllers.deletePost)

module.exports = router