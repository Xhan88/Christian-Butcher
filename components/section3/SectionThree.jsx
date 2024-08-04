
import ImgMediaCard from './ImgMediaCard';
import { Grid, Container } from '@mui/material';
import './sectionThree.css';

const SectionThree = () => {
  const cardsData = [
    {
    image: "./carniceria.png",
    title: "IN MY PROFESSION",
    description: " As a professional butcher, I specialize in selecting, cutting, and preparing a variety of meats with precision and expertise. I ensure top quality and customer satisfaction through meticulous attention to detail, knowledge of various cuts, and exceptional service. My skills contribute to offering the best products to customers, enhancing their culinary experiences. "
   
    },
    {
    image: "./carnicero.png",
    title: "IN MY PERSON",
    description: "As a professional butcher, I am known for my meticulous attention to detail, strong work ethic, and passion for high-quality meats. I excel in precise cuts and customer service, always ensuring freshness and satisfaction. My dedication to the craft and friendly demeanor create a welcoming and professional environment."
    },
    {
    image: "./carniceria(1).png",
    title: "IN THE BUTCHER",
    description: "As a professional butcher, I am proficient in using various machines and knives with precision and safety. My expertise ensures optimal cuts, efficiency, and adherence to hygiene standards, enhancing product quality and customer satisfaction. I continually maintain and operate equipment effectively to uphold the highest standards in meat preparation."
    },
  ]

  return (
    <Container data-aos="fade-up" className='section-container'>
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
