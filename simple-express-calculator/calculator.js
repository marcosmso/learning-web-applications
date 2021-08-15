const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res) => {
    var num1 = Number(req.body.n1)
    var num2 = Number(req.body.n2)

    var result = num1 + num2;
    res.send("result " + result);
})

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post('/bmicalculator', (req, res) => {
    var weight = Number(req.body.weight)
    var height = Number(req.body.height)
    var bmi = weight/(height * height);
 
    res.send("Your BMI is " + bmi);
})

app.listen(3000, function () {
    console.log("Lintening on port 3000...");
})