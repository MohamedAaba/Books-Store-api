const express = require("express")
require("dotenv").config()

const authRoutes = require("./routes/authors")
const bookRoutes = require("./routes/books")

const app = express()
const port = process.env.PORT || 3030

app.use(express.json())

app.use("/api/authors", authRoutes)
app.use("/api/books", bookRoutes)

app.listen(port, () => console.log("SERVER ON " + port))
