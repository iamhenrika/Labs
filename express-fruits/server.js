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

app.use((req, res, next) => {
    console.log('Im running for all routes')
    console.log('1, middleware')
    next()
})
//middleware

app.use(express.urlencoded({ extended: false }))

app.get("/fruits", (req, res) => {
    console.log('2, controller')
    res.render("Index", { fruits: fruits })
})

app.get("/fruits/new", (req, res) => {
    res.render('New')
})
// Always put your show route last

app.post('/fruits', (req, res) => {
    //console.log(req.body)
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    console.log(fruits)
    res.redirect("/fruits")
    //redirects to fruits homepage after creating a new fruit
})

app.get("/fruits/:indexOfFruit", (req, res) => {
    // res.send(fruits[req.params.indexOfFruit])
    res.render("Show", fruits[req.params.indexOfFruit])
    //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruits]

})

app.get("/vegetables", (req, res) => {
    res.render("VeggieIndex", { vegetables: vegetables })
})

app.get("/vegetables/new", (req, res) => {
    res.render('VeggieNew')
})
// Always put your show route last

app.post('/vegetables', (req, res) => {
    //console.log(req.body)
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    vegetables.push(req.body)
    console.log(vegetables)
    res.redirect("/vegetables")
    //redirects to fruits homepage after creating a new fruit
})

app.get("/vegetables/:indexOfVegetables", (req, res) => {
    res.render("VeggieShow", vegetables[req.params.indexOfVegetables])
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});