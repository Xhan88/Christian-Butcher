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
      <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ex nihil voluptatem, recusandae est ab soluta labore assumenda deserunt quidem beatae ratione? Error sint labore tenetur suscipit sunt. Vitae, consequatur repudiandae. Molestias quam voluptatum possimus amet quaerat animi ab et id veniam sequi nihil, corporis, alias, modi exercitationem. Ab, voluptatum!</p>
    </div>
  )
}

export default ButcherDescription;
