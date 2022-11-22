require('dotenv').config()
const express = require("express")
const app = express()
const PORT = 3000
const Fruits = require("./models/fruits")
const reactViews = require('express-react-views')
const Vegetables = require("./models/vegetables")
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once("open", () => {
    console.log("connected to mongo")
})

app.set("view engine", "jsx")
// set view engine to jsx
app.engine("jsx", reactViews.createEngine())
// engine should use express
// alt - app.engine("jsx", require('express-react-views').createEngine())

app.use((req, res, next) => {
    console.log('Im running for all routes')
    //console.log('1, middleware')
    next()
})
//middleware

app.use(express.urlencoded({ extended: false }))

//Index
app.get("/fruits", (req, res) => {
    Fruits.find({}, (error, allFruits) => {
        if (!error) {
            res.status(200).render('Index', {
                fruits: allFruits
            })
        } else {
            res.status(400).send(error)
        }
    })
})

app.get("/fruits/new", (req, res) => {
    res.render('New')
})
// Always put your show route last

app.post("/fruits", (req, res) => {
    //console.log("2. controller")
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    Fruits.create(req.body, (error, createdFruit) => {
        if (!error) {
            // redirects after creating fruit, to the Index page
            res.status(200).redirect("/fruits")
        } else {
            res.status(400).send(error)
        }
    })
})

//   app.get("/fruits/new", (req, res) => {
//     console.log("2. controller")
//     res.render("fruits/New")
//   })

app.get("/fruits/:id", (req, res) => {
    // res.send(fruits[req.params.indexOfFruit])
    // res.render("Show", fruits[req.params.indexOfFruit])
    //there will be a variable available inside the js file called fruit, its value is fruits[req.params.indexOfFruits]
    Fruits.findById(req.params.id, (error, foundFruit) => {
        if (!error) {
            res
                .status(200)
                .render("Show", {
                    fruit: foundFruit
                })
        } else {
            res
                .status(400)
                .send(error)
        }
    })
})

// app.get("/vegetables", (req, res) => {
//     res.render("VeggieIndex", { vegetables: vegetables })
// })

// app.get("/vegetables/new", (req, res) => {
//     res.render('VeggieNew')
// })
// // Always put your show route last

// app.post('/vegetables', (req, res) => {
//     //console.log(req.body)
//     if (req.body.readyToEat === "on") {
//         req.body.readyToEat = true
//     } else {
//         req.body.readyToEat = false
//     }
//     vegetables.push(req.body)
//     console.log(vegetables)
//     res.redirect("/vegetables")
//     //redirects to fruits homepage after creating a new fruit
// })

// app.get("/vegetables/:indexOfVegetables", (req, res) => {
//     res.render("VeggieShow", vegetables[req.params.indexOfVegetables])
// })

//Index
app.get("/vegetables", (req, res) => {
    Vegetables.find({}, (error, allVegetables) => {
        if (!error) {
            res.status(200).render('VeggieIndex', {
                vegetables: allVegetables
            })
        } else {
            res.status(400).send(error)
        }
    })
})

app.get("/vegetables/new", (req, res) => {
    res.render('VeggieNew')
})
// Always put your show route last

app.post("/vegetables", (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    Vegetables.create(req.body, (error, createdVegetable) => {
        if (!error) {
            res.status(200).redirect("/vegetables")
        } else {
            res.status(400).send(error)
        }
    })
})


app.get("/vegetables/:id", (req, res) => {
    Vegetables.findById(req.params.id, (error, foundVegetable) => {
        if (!error) {
            res
                .status(200)
                .render("VeggieShow", {
                    vegetable: foundVegetable
                })
        } else {
            res
                .status(400)
                .send(error)
        }
    })
})



app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});