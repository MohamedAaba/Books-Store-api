const express = require("express")
const router = express.Router()

const {
   getBooks,
   addBook,
   getBookById,
   modifyBook,
   deleteBookById,
} = require("../controllers/books")

router.route("/").get(getBooks).post(addBook)

router.route("/:id").get(getBookById).put(modifyBook).delete(deleteBookById)

module.exports = router
