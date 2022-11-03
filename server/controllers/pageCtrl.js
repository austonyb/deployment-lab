const path = require("path")

module.exports = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../../index.html"))
    },
    styles: (req, res) => {
        res.sendFile(path.join(__dirname, "../../styles.css"))
    },
    script: (req, res) => {
        res.sendFile(path.join(__dirname, "../../script.js"))
    },
    img1: (req, res) => {
        res.sendFile(path.join(__dirname, "../../assets/salesman.png"))
    },
}