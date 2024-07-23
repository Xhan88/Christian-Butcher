

import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./FirstNavBar.css";
import { useEffect, useState } from 'react';

const FirstNavBar = () => {
 const [ isTransparent, setIsTransparent ] = useState(false);
 const handleScrool = () => {
  if(window.scrollY > 0 ) {
    setIsTransparent(true)
  }else {
    setIsTransparent(false)
  }
};

useEffect(() => {
  window.addEventListener('scroll', handleScrool);
  return () => {
    window.removeEventListener('scroll', handleScrool)
  }
},[]);

  return (
     <nav className={`nav-bar-first ${isTransparent ? 'transparent' : ''}`}>
        <div className="left-section">
          <p className="contact-item"> <LocalPhoneIcon className="icon" /> +52 378 142 6360</p>
          <a className='contact-item email'> <EmailIcon className="icon" /> christianmq888@gmail.com</a>
        </div>
        <div className="right-section">
          <div className="social-networks">
                <a className='facebook' target='_blank' href='https://www.facebook.com/christian.martinezquezada'> 
                  <FacebookIcon style={{color: 'white'}} />
                </a>
                <a target='_blank' href="https://www.facebook.com/christian.martinezquezada">
                  <InstagramIcon style={{color: 'white'}}/>
                </a>
                <a target='_blank' href="https://api.whatsapp.com/send?phone=3781151949&text=%22Hola%20Susy%20estoy%20interesad@%20en%20tus%20servicios%20de%20pedicurista%22">
                  <WhatsAppIcon style={{color: 'white'}}/>
                </a>         
          </div>
        </div>    
     </nav>
  );
}

export default FirstNavBar;
