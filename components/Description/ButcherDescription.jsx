import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './ButcherDescription.css';

const ButcherDescription = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='description'>
      <img data-aos="fade-up" src="./chrisButcher.png" alt="Chris Butcher" />
      <p data-aos="fade-up">
      
      My name is <span style={{fontSize: '4rem', color: 'rgba(139, 17, 17, 2.5)'}}>Christian Martinez,</span> I am 32 years old, and I have over 10 years of experience in the fine art of butchery. I specialize in custom fine cuts and popular cuts, with extensive and solid knowledge in beef, pork, and poultry cuts. Throughout my career, I have honed my skills to offer the highest quality products, ensuring that every cut meets the most demanding standards. My passion for butchery is reflected in my attention to detail and my commitment to providing exceptional service to my customers.</p>
    </div>
  )
}

export default ButcherDescription;
