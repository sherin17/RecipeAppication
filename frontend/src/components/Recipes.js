import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Person3Icon from '@mui/icons-material/Person3';
import EditReceipes from "./EditRecipes";
import "./style.css"
import UseForm from './UseForm'
import { TextField } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const IndiaRecipes = () => {

  var [recipes, setrecipes] = useState([]);
  var [updatedrecipes, setupdatedrecipes] = useState(false)
  var [editrecipes, seteditrecipes] = useState('')
  var editedrecipes

  var [recipe, setRecipe] = UseForm({ "Category": "" });
  var [result, setResult] = useState([]);

  const searchReceipe = () => {
    axios.post("http://localhost:5000/api/search", recipes)
      .then((response) => {
        console.log(response.data)
        setResult(result = response.data);
      })
  }
  // VIEW COURSE
  useEffect(() => {
    fetchrecipes()
  }, []);

  const fetchrecipes = () => {
    axios.get("http://localhost:5000/viewrecipes")
      .then((response) => {
        console.log(response.data);
        setrecipes(recipes = response.data);

      })
  }
  //DELETE COURSE
  const deleterecipes = (id) => {
    console.log(id)
    const data = { _id: id }
    axios.post("http://localhost:5000/deleterecipe", data)
      .then((response) => {
        console.log(response.data);
        alert("Successfully Deleted!!");
        fetchrecipes();
      })
  }

  const updaterecipes = (value) => {
    setupdatedrecipes(true)
    seteditrecipes(value)
    console.log(updaterecipes)
  }
  if (updatedrecipes) {
    editedrecipes = <EditReceipes value={editrecipes} />
  }
  else {
    editedrecipes =


      <div className='gridsystem'>
        
        
        <Box sx={{ flexGrow: 2 }} >
          <Grid container spacing={{ xs: 3, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            {
              recipes.map((value, index) => (
                <Grid item xs={2} sm={3} md={3} key={index}>
                  <Item className='grids'><Card sx={{ maxWidth: 348, minHeight: 350 }} rowHeight={164}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {value.RecipeName}
                      </Typography><br></br>
                      <Typography variant="body2" color="text.secondary">
                        <AccessTimeIcon />
                        {value.Duration_for_cooking}
                        <Person3Icon />
                        {value.Number_of_Servings}
                      </Typography><br></br>
                       <Typography variant="body2" color="text.secondary" multiline rows={4} className='description'>
  { value.Descriptions }
                      </Typography >
                    </CardContent >
  <CardActions>
    <Button size="small" variant='contained' onClick={() => updaterecipes(value)}>Edit</Button>
    <Button size="small" variant='contained' color='error' onClick={() => { deleterecipes(value._id) }}>Delete</Button>
  </CardActions>
                  </Card ></Item >
                </Grid >
              ))}
          </Grid>
        </Box>
      </div>
  }
  return (

    editedrecipes
  )

}

export default IndiaRecipes
