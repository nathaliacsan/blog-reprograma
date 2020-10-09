const posts = require("../models/post-models")

const getPosts = (request, response) => {
    response.status(200).json(posts)
}

module.exports = {
    getPosts
}