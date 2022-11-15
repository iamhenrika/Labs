const express = require("express")
const app = express()
const PORT = 3000
const fruits = require("./models/fruits")
const reactViews = require('express-react-views')
const vegetables = require("./models/vegetables")


app.set("view engine", "jsx")
// set view engine to jsx
app.engine("jsx", reactViews.createEngine())
// engine should use express
// alt - app.engine("jsx", require('express-react-views').createEngine())


app.get("/fruits", (req, res) => {
    res.render("Index", { fruits: fruits })
})

app.get("/fruits/:indexOfFruit", (req, res) => {
    // res.send(fruits[req.params.indexOfFruit])
    res.render("Show", fruits[req.params.indexOfFruit])
    //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruits]

})

app.get("/vegetables", (req, res) => {
    res.render("VeggieIndex", { vegetables: vegetables })
})

app.get("/vegetables/:indexOfVegetables", (req, res) => {
    res.render("VeggieShow", vegetables[req.params.indexOfVegetables])
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});