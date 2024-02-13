const Data = require("../models/authors.json")

exports.getAuthors = (req, res) => {
   console.log("get all Authors!!")
   res.json(Data)
}

exports.addAuthor = (req, res) => {
   let data = [...Data]
   let newId = data.length + 1
   const {
      name,
      birth_year,
      death_year,
      nationality,
      genre,
      notable_works,
      award,
      biography,
      image,
   } = req.body
   data.push({
      id: newId,
      name,
      birth_year,
      death_year,
      nationality,
      genre,
      notable_works,
      award,
      biography,
      image,
   })
   console.log("add author !!")
   res.json(data)
}

exports.getAuthorById = (req, res) => {
   const { id } = req.params
   let author = Data.filter(elem => elem.id == parseInt(id))
   console.log("get author by id!!")
   res.json(author)
}

exports.modifyAuthor = (req, res) => {
   const data = [...Data]
   const { id } = req.params
   data.forEach(author => {
      if (author.id == id) {
         for (let [key, value] of Object.entries(req.body)) {
            author[key] = value
         }
      }
   })
   console.log("modify author by id!!")
   res.json(data)
}

exports.deleteAuthorById = (req, res) => {
   const data = [...Data]
   const { id } = req.params
   const index = data.findIndex(author => author.id == id)
   data.splice(index, 1)
   console.log("delete author by id!!")
   res.json(data)
}
