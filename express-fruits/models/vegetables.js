// const vegetables = [

//     {
//         name: 'potato',
//         color: 'brown',
//         readyToEat: true
//     }, 
//     {
//         name: 'zucchini',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name: 'pepper',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name: 'corn',
//         color: 'yellow',
//         readyToEat: false
//     },
//     {
//         name: 'eggplant',
//         color: 'purple',
//         readyToEat: true
//     },
// ];

// module.exports = vegetables

const mongoose = require('mongoose')

const vegetablesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean,
},
{timestamps: true})

const Vegetables = mongoose.model("Vegetable", vegetablesSchema)

module.exports = Vegetables