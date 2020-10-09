const postsModel = require("../models/post-models")
const helper = require("../helpers/helper")

const getPosts = (request, response) => {
    response.status(200).json(postsModel)
}

const getPostById = (request, response) => {
    const {id} = request.params

    const fingindId = postsModel.find(post => post.id == id)

    if(fingindId) {
        return response.status(200).json(fingindId)
    } else {
        return response.status(404).json({mensagem: "Id não encontrado."})
    }
}

const getPostByTitle = (request, response) => {
    const {titulo} = request.query

    const post = postsModel.find(post => post.titulo == titulo)

    response.status(200).json(post)
}

const createPost = (request, response) => {
    const {titulo, conteudo, etiquetas} = request.body

    let newPost = {
        id: helper.getNewId(postsModel),
        dataCriacao: helper.createDate(postsModel),
        titulo: titulo,
        conteudo: conteudo,
        etiquetas: etiquetas
    }

    postsModel.push(newPost)

    response.status(201).json(newPost)
}

const deletePost = (request, response) => { 
    const {id} = request.params
 
   const findingById = postsModel.find(post => post.id == id)

   if(findingById) {
        postsModel.filter(post => post.id != id)
        return response.status(200).json({mensagem: "Esse post foi deletado com sucesso!"})  
   } else {
        return response.status(404).json({mensagem: "Esse post não existe."})
   }
    
  }

module.exports = {
    getPosts,
    getPostById,
    getPostByTitle,
    createPost,
    deletePost
}