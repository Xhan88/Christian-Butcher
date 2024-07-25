import { useEffect } from 'react';
import './AboutMe.css'
import AOS from 'aos';


const AboutMe = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='description'>
      
      <p data-aos="fade-up">
        <span style={{fontSize: '4rem', color: 'rgba(139, 17, 17, 2.5)'}}> I am always </span>   
        looking for new techniques and methods to improve my skills and stay up to date with market trends. My goal is to offer my clients excellent service, but also an unparalleled experience with each visit.</p>  
               <img data-aos="fade-up" src="./beef-butcher-chan.png" alt="chris butcher" />
    </div>
  )
}

export default AboutMe
