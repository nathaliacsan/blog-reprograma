const express = require("express")
const router = express.Router()

const postsControllers = require("../controllers/posts-controllers")

//@route GET Posts
//@desc Retornar todos os Posts
//@acces Public
//@endpoint http://localhost:porta/posts
router.get("/posts", postsControllers.getPosts)

module.exports = router