const express = require("express")
const cors = require("cors")
require("dotenv").config()

const { PORT, ACCESS_TOKEN } = process.env

const app = express()

app.use(express.json())
app.use(cors())

// include and initialize the rollbar library with your access token
let Rollbar = require('rollbar')
let rollbar = new Rollbar({
  accessToken: ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.info(`server up on port ${PORT}`)


const {home, styles, script, img1 } = require("./controllers/pageCtrl")

try {
    app.get("/", home)
} catch {
    rollbar.critical("home page would not get")
}

try {
    app.get("/styles", styles)
} catch {
    rollbar.critical("stylesheet wouldn't load")
}

try {
    app.get("/script", script)
} catch {
    rollbar.critical("script file won't load.")
}

try {
    app.get("/img1", img1)
} catch {
    rollbar.warning("image 1 wouldn't load.")
}



app.listen(PORT, () => console.log(`server listening on port ${PORT}`))