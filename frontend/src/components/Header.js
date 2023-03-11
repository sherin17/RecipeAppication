import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'
import './style.css'
const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' color='warning'>
          <Toolbar>
            <a class="navbar-brand" href="#">
              <img src='cheflogo.png' />
            </a>
            <div className='navigation'>
              <Link to="/" className='links'><Button >Home</Button></Link>
              <Link to="/Recipes" className='links'><Button>Recipes</Button></Link>
              <Link to="/AddReceipes" className='links'><Button>Add Receipes</Button></Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header
