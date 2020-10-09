const getNewId = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
  }
  
  const createDate = () => new Date().toLocaleDateString('pt-BR').toString()
  
  module.exports = {
    getNewId,
    createDate
  }