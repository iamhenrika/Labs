// const fruits = [
//     {
//         name: 'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name: 'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name: 'banana',
//         color: 'yellow',
//         readyToEat: true
//     }
// ];

// module.exports = fruits

const mongoose = require('mongoose')

const fruitsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean,
},
{timestamps: true})

const Fruits = mongoose.model("Fruit", fruitsSchema)

module.exports = Fruits