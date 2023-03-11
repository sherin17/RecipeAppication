import { Button, TextField, Typography } from '@mui/material'
import { Link } from "react-router-dom";
import React from 'react'
import "./style.css"
import axios from 'axios'
import useForm from './UseForm'
import { useNavigate } from "react-router-dom";

const Addrecipes = () => {
  var [recipes, setrecipes] = useForm({
    "RecipeName": "",
    "Duration_for_cooking": "",
    "Number_of_Servings": "",
    Category: "",
    "Descriptions": ""
  })
  //ADD COURSE
  const navigate = useNavigate();
  const addrecipes = () => {
    axios.post("http://localhost:5000/createrecipe", recipes)
      .then((response) => {
        console.log(response.data);
        alert("Data Added Successfully")
        navigate("/");
      })
  }
  return (
    <div>
      <div className='forms'>
        <Typography className='heading' color='white'>ADD RECIPES</Typography>
        <TextField name='RecipeName' value={recipes.RecipeName} onChange={setrecipes}
          variant='outlined' color='secondary' label='recipes Name' className='field'></TextField>
        <TextField name='Duration_for_cooking' value={recipes.Duration_for_cooking}
          onChange={setrecipes} variant='outlined' color='secondary' label='Duration for cooking'
          className='field'></TextField>
        <TextField name='Number_of_Servings' value={recipes.Number_of_Servings}
          onChange={setrecipes} variant='outlined' color='secondary' label='Number of Servings'
          className='field'></TextField>
        <TextField name='Category' value={recipes.Category} onChange={setrecipes}
          variant='outlined' color='secondary' label='Category' className='field'></TextField>
        <TextField name='Descriptions' value={recipes.Descriptions} onChange={setrecipes}
          variant='outlined' color='secondary' label='Description' className='field'
          multiline rows={4}></TextField>
        <Button variant='contained' color='warning' onClick={addrecipes}>Add</Button>
        <Button><Link to="/" className="btn btn-danger">Back</Link></Button>
      </div>
    </div>
  )
}


export default Addrecipes
