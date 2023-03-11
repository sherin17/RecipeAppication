//Basic server structure

// 1. import express
const express = require ("express")

//2. intialization of express
const app = new express();

//passing body parameter
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type ");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
})

// Connecting to Database

const RecipeInfo = require('./models/mongodb')

//3. API creation

// READ
app.get('/viewrecipes',async(req,res)=>{
    try{
      let result = await RecipeInfo.find();
      res.json(result);
    }
    catch(error){
      res.status(500).send(error);
    }
  })

  //post for course

app.post('/createrecipe',(req,res)=>{
    try {
        console.log(req.body)//server data
    let recipe = new RecipeInfo(req.body); //passing the data to DB
    recipe.save();//saving to db
    res.send("Data Added")
    } catch (error) {
        res.status(500).send(error);
    }
  })

  //get single Data
  
  //UPDATE

  app.post('/updaterecipe',  async (req,res) => {
    try{
        let result =  await RecipeInfo.findByIdAndUpdate(req.body._id, req.body);
        res.send("Data Updated");
    }
    catch(error){
        res.status(500).send(error);
    }
})
  //DELETE

app.post('/deleterecipe',async(req,res)=>{
    try {
      await RecipeInfo.findByIdAndDelete(req.body._id);
    res.send("Data deleted")
    } catch (error) {
      res.status(500).send(error);
    }
    
  })

  //SEARCH

app.post('/api/search',async(req,res)=>{
  try {
    let result = await RecipeInfo.find(req.body);
    //let result = await RecipeInfo.find({ "recipename": { $regex: '.' + req.body.recipename + '.' } });
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
})

//4. Setting PORT number
app.listen(5000,()=>{
    console.log("Server is running in port 5000")
})