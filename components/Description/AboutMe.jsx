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
        <span style={{fontSize: '4rem', color: 'rgba(139, 17, 17, 2.5)'}}> Lorem impsun</span>   
        ipsum dolor sit amet consectetur, adipisicing elit. Veniam ex nihil voluptatem, recusandae est ab soluta labore assumenda deserunt quidem beatae ratione? Error sint labore tenetur suscipit sunt. Vitae, consequatur repudiandae. Molestias quam voluptatum possimus amet quaerat animi ab et id veniam sequi nihil, corporis, alias, modi exercitationem. Ab, voluptatum!</p>
        <img data-aos="fade-up" src="./beef-butcher-chan.png" alt="chris butcher" />
    </div>
  )
}

export default AboutMe
