import React, { useEffect, useState } from 'react'
import './style.css'
import { Button, Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Person3Icon from '@mui/icons-material/Person3';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {

  return (
    <div className='images'>
      <Card variant="outlined" className='about'>
      <h2> Indian cuisine</h2>
        <p>
          Indian cuisine consists of a variety of regional and traditional cuisines native to India.
          Given the diversity in soil, climate, culture, ethnic groups, and occupations,
          these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits.

          Indian food is also heavily influenced by religion, in particular Hinduism and Islam,
          cultural choices and traditions.
          Historical events such as invasions, trade relations, and colonialism have played
          a role in introducing certain foods to this country. The Columbian discovery of the
          New World brought a number of new vegetables and fruit to India. A number of these
          such as potatoes, tomatoes, chillies, peanuts, and guava have become staples in many regions of India.

          Indian cuisine has shaped the history of international relations; the spice trade between
          India and Europe was the primary catalyst for Europe's Age of Discovery.
          Spices were bought from India and traded around Europe and Asia. Indian
          cuisine has influenced other cuisines across the world, especially
          those from Europe (especially Britain), the Middle East, Southern African,
          East Africa, Southeast Asia, North America, Mauritius, Fiji, Oceania, and the Caribbean.
        </p>
      </Card>
      <Card variant="outlined" className='about'>
      <h2> Chinese cuisine</h2>
        <p>
        Asian food incorporates a few significant provincial cooking styles: 
        Central Asian, East Asian, North Asian, South Asian, Southeast Asian, 
        and West Asian. A food is a trademark way of cooking practices and 
        customs,[usually associated with a specific culture. Asia, being 
        the largest and most populous continent, is home to many cultures, 
        many of which have their own characteristic cuisine. Asian cuisine
         are also famous about their spices, Asian people traditionally use
          different kind of spices in their regular meals.

Ingredients common to many cultures in the East and Southeast regions of the
continent include rice, ginger, garlic, sesame seeds, chilies, dried onions,
 soy, and tofu. Stir frying, steaming, and deep frying are common cooking methods.

While rice is common to most Asian cuisines, different varieties are popular
 in the various regions. Glutinous rice is ingrained in the culture, religious
  tradition and national identity of Laos. Basmati rice is popular in 
  the Indian subcontinent, jasmine rice is often found across Southeast Asia,
   while long-grain rice is popular in China and short-grain in Japan and Korea.
Curry is a common dish in South Asia, Southeast Asia, and East Asia. Curry 
dishes have their origins in the Indian subcontinent, with present-day
 Armenia mainly using a meat base, while those in India and Southeast Asia 
 generally use vegetarian foundation.
        </p>
  </Card>
    </div>

  )
}

export default Home
