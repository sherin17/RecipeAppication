import { Button, TextField, Typography } from '@mui/material'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios'
const EditRecipes = (props) => {
  console.log(props)
 
  const [newrecipes, setnewrecipes] = useState({
    RecipeName: props.value.RecipeName,
    Duration_for_cooking: props.value.Duration_for_cooking,
    Number_of_Servings: props.value.Number_of_Servings,
    Category: props.value.Category,
    Descriptions: props.value.Descriptions,
  })
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setnewrecipes((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };
  const readValues = () => {
    var postData = { ...newrecipes, _id: props.value._id };
    axios.post("http://localhost:5000/updaterecipe", postData)
      .then((response) => {
        console.log(response.data);
        alert("Successfully Updated");
        window.location.reload();
      });
  };


  return (
    <div>
        <div className='forms'>
        <Typography className='heading' color='white'>EDIT RECIPES</Typography>
        <TextField name='RecipeName' value={newrecipes.RecipeName} onChange={inputHandler}
          variant='outlined' color='secondary' label='Recipes Name' className='field'></TextField>
        <TextField name='Duration_for_cooking' value={newrecipes.Duration_for_cooking}
          onChange={inputHandler} variant='outlined' color='secondary' label='Duration for cooking'
          className='field'></TextField>
        <TextField name='Number_of_Servings' value={newrecipes.Number_of_Servings}
          onChange={inputHandler} variant='outlined' color='secondary' label='Number of Servings'
          className='field'></TextField>
        <TextField name='Category' value={newrecipes.Category} onChange={inputHandler}
          variant='outlined' color='secondary' label='Category' className='field'></TextField>
        <TextField name='Descriptions' value={newrecipes.Descriptions} onChange={inputHandler}
          variant='outlined' color='secondary' label='Description' className='field'
          multiline rows={4}></TextField>
        <Button variant='contained' color='warning' onClick={readValues}>Update</Button>
      </div>
    </div>
  )


}

export default EditRecipes
