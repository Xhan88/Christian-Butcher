import React from 'react';
import ImgMediaCard from './ImgMediaCard';
import { Grid, Container } from '@mui/material';
import './sectionThree.css';

const SectionThree = () => {
  const cardsData = [
    {
    image: "./carniceria.png",
    title: "carniceria",
    description: "No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum"
    },
    {
    image: "./carnicero.png",
    title: "carniceria",
    description: "No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    },
    {
    image: "./carniceria(1).png",
    title: "carniceria",
    description: "No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    },
  ]

  return (
    <Container className='section-container'>
      <Grid container spacing={2}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <ImgMediaCard 
              image={card.image} 
              title={card.title} 
              description={card.description} 
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default SectionThree;
