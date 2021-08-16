const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Great fruit"
});

// fruit.save();

// Fruit.find(function (err, fruits){
//     if (err) { 
//         console.log(err)
//     } else{
//         mongoose.connection.close;
//         fruits.forEach(function (fruit){
//             console.log(fruit.name);
//         });
//     }
// });

// Fruit.updateOne({_id: "611ad3eb491c831928a35866"}, {name: "Peach"}, function (err){
//     if (err) { 
//         console.log(err);
//     } else{
//         console.log("Updated Succesfully");
//     }
// });

// Fruit.deleteOne({name: "Apple"}, function(err){
//     if (err) { 
//         console.log(err);
//     } else{
//         console.log("Deleted Succesfully");
//     }
// })

// ------------------------------------------------

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

// const Person = mongoose.model("Person", personSchema);

const pineaple = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid fruit"
});

pineapple.save();

const person = new Person({
    name: "John",
    age: 27,
    favouriteFruit: pineapple
});

person.save()

Person.deleteMany({name: "Jhon"}, function(err){
    if (err) { 
        console.log(err);
    } else{
        console.log("Deleted All Succesfully");
    }
});
