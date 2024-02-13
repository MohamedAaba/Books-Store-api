const Data = require("../models/data.json")

exports.getBooks = (req, res) => {
   console.log("geBooks!!")
   res.json(Data)
}

exports.addBook = (req, res) => {
   let data = [...Data]
   let newId = data.length + 1
   const { title, author, publication_year, genre, description, cover_image } =
      req.body
   data.push({
      id: newId,
      title,
      author,
      publication_year,
      genre,
      description,
      cover_image,
   })
   console.log("add book !!")
   res.json(data)
}

exports.getBookById = (req, res) => {
   const { id } = req.params
   let book = Data.filter(elem => elem.id == parseInt(id))
   console.log("get book by id!!")
   res.json(book)
}

exports.modifyBook = (req, res) => {
   const data = [...Data]
   const { id } = req.params
   data.forEach(book => {
      if (book.id == id) {
         for (let [key, value] of Object.entries(req.body)) {
            book[key] = value
         }
      } //[{},{}] // [[],[,[key,value]]]
   })
   console.log("modify book by id!!")
   res.json(data)
}

exports.deleteBookById = (req, res) => {
   const data = [...Data]
   const { id } = req.params
   const index = data.findIndex(book => book.id == id)
   data.splice(index, 1)
   console.log("delete book by id!!")
   res.json(data)
}
