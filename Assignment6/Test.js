const express = require("express");
const app = express();
const port = 4000;
const Students = [
    {"id":"1","name":"John","age":20,"course":"Math"},
    {"id":"2","name":"Jane","age":22,"course":"Science"},
    {"id":"3","name":"Bob","age":21,"course":"History"}
];
const products = [
    {"ProductID":"101"},
    {"ProductID":"102"},
    {"ProductID":"103"}
];

//Workshop 1
//http://localhost:4000/
app.get('/',(req,res)=>{
    res.send("Hello Express");
});
//------------------------------------------------
//Workshop 2
app.get('/about',(req,res)=>{
    res.send("about");
});
app.get('/contact',(req,res)=>{
    res.send("contact");
});


//------------------------------------------------
//Workshop 3
//http://localhost:4000/students
app.get('/students',(req,res)=>{
    res.json(Students);
});
//------------------------------------------------ 
//Workshop 4
//http://localhost:4000/products/101
app.get('/products/:ProductID',(req,res)=>{
    const productId = req.params.ProductID;
    const product = products.find(p => p.ProductID === productId);
    res.json(product);
});
//------------------------------------------------
//Workshop 5
//http://localhost:4000/square?number=5
app.get('/square', (req, res) => {
    const number = parseFloat(req.query.number);
    const ans = number * number;
    res.send('Square = ' + ans);
});
//------------------------------------------------
//Workshop 6
app.get('/score', (req, res) => {
    const score = parseFloat(req.query.score);

    if (score >= 80 && score <= 100) {res.json({ "score": score, "grade": "A" });} 
    else if (score >= 70 && score < 79) {res.json({ "score": score, "grade": "B" });}
    else if (score >= 60 && score < 69) {res.json({ "score": score, "grade": "C" });}
    else if (score >= 50 && score < 59) {res.json({ "score": score, "grade": "D" });}
    else {res.json({ "score": score, "grade": "F" });}
});

//------------------------------------------------
app.listen(port, ()=> {
    console.log("server is Running on port " + port);
})