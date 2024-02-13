const express = require("express")
const router = express.Router()

const {
   getAuthors,
   addAuthor,
   getAuthorById,
   modifyAuthor,
   deleteAuthorById,
} = require("../controllers/authors")

router.route("/").get(getAuthors).post(addAuthor)

router
   .route("/:id")
   .get(getAuthorById)
   .put(modifyAuthor)
   .delete(deleteAuthorById)

module.exports = router
