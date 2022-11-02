const express = require("express")
const cors = require("cors")
require("dotenv").config()


const app = express()

app.use(express.json())
app.use(cors())



const {home, styles, script } = require("./controllers/pageCtrl")
app.get("/", home)
app.get("/styles", styles)
app.get("/script", script)

const { PORT } = process.env

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))