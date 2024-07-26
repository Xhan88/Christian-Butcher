import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({image, title, description}) {
  return (
    <Card data-aos="fade-up" sx={{ maxWidth: 345, boxShadow: '0px 5px 20px' }}>
      <CardMedia
      style={{background:'grey'}}
        component="img"
        alt={title}
        height="400"
        image={image}
      />
      <CardContent style={{background:'grey'}} >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    
    </Card>
  );
}