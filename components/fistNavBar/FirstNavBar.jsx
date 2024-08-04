// import EmailIcon from '@mui/icons-material/Email';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import { slide as Menu } from 'react-burger-menu';
// import "./FirstNavBar.css";
// import { useEffect, useState } from 'react';

// const FirstNavBar = () => {
//   const [isTransparent, setIsTransparent] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 728);

//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       setIsTransparent(true);
//     } else {
//       setIsTransparent(false);
//     }
//   };

//   const handleResize = () => {
//     setIsSmallScreen(window.innerWidth <= 728);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <nav data-aos="fade-up" className={`nav-bar-first ${isTransparent ? 'transparent' : ''}`}>
//       {isSmallScreen ? (
//         <Menu right>
//           <div className="menu-content">
//             <div className="menu-item">
//               <LocalPhoneIcon className="icon"/>
//               <a href="tel:+523781426360" className='contact-link'>+52 378 142 6360</a>
//             </div>
//             <div className="menu-item">
//               <EmailIcon className="icon" /> 
//               <a href="mailto:christianmq888@gmail.com" className="contact-link">
//                 christianmq888@gmail.com
//               </a>
//             </div>
//             <div className="social-networks">
//               <a className='facebook' target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/christian.martinezquezada'>
//                 <FacebookIcon style={{ color: 'white' }} />
//               </a>
//               <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/dantedeat2024/">
//                 <InstagramIcon style={{ color: 'white' }} />
//               </a>
//               <a target='_blank' rel='noopener noreferrer' href="https://w.app/butcher">
//                 <WhatsAppIcon style={{ color: 'white' }} />
//               </a>
            
           
//             </div>
//               <section>
//              <a href="./CV-CA.docx" className="nav-link">CV</a>
//             <a href="#cover-letter" className="nav-link">Cover Letter</a>
//             <a href="#cronology" className="nav-link">Cronology</a>
//               </section>
//           </div>
//         </Menu>
//       ) : (
//         <>
//           <div className="left-section">
//             <p className="contact-item">
//               <LocalPhoneIcon className="icon" /><a className='contact-link' style={{ color: 'white'}} href="tel:+523781426360">+52 378 142 6360</a>
//             </p>
//             <a className='contact-item email' href="mailto:christianmq888@gmail.com">
//               <EmailIcon className="icon" /> christianmq888@gmail.com
//             </a>
//           </div>
//           <div className="center-section">
//             <a href="./CV-CA.docx" className="nav-link">CV</a>
//             <a href="#cover-letter" className="nav-link">Cover Letter</a>
//             <a href="#cronology" className="nav-link">Cronology</a>
//           </div>
//           <div className="right-section">
//             <div className="social-networks">
//               <a className='facebook' target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/christian.martinezquezada'>
//                 <FacebookIcon style={{ color: 'white' }} />
//               </a>
//               <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/dantedeat2024/">
//                 <InstagramIcon style={{ color: 'white' }} />
//               </a>
//               <a target='_blank' rel='noopener noreferrer' href="https://w.app/butcher">
//                 <WhatsAppIcon style={{ color: 'white' }} />
//               </a>
//             </div>
//           </div>
//         </>
//       )}
//     </nav>
//   );
// }

// export default FirstNavBar;


import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { slide as Menu } from 'react-burger-menu';
import "./FirstNavBar.css";
import { useEffect, useState } from 'react';

const FirstNavBar = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 728);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 728);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`nav-bar-first ${isTransparent ? 'transparent' : ''}`}>
      {isSmallScreen ? (
        <>
          <Menu right>
            <div className="menu-content">
              <div className="menu-item">
                <LocalPhoneIcon className="icon"/>
                <a href="tel:+523781426360" className='contact-link' >+52 378 142 6360</a>
              </div>
              <div className="menu-item">
                <EmailIcon className="icon" /> 
                <a href="mailto:christianmq888@gmail.com" className="contact-link">
                  christianmq888@gmail.com
                </a>
              </div>
              <div className="social-networks">
                <a href="./CV-CA.docx">CV</a>
                <a className='facebook' target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/christian.martinezquezada'>
                  <FacebookIcon style={{ color: 'white' }} />
                </a>
                <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/dantedeat2024/">
                  <InstagramIcon style={{ color: 'white' }} />
                </a>
                <a target='_blank' rel='noopener noreferrer' href="https://w.app/butcher">
                  <WhatsAppIcon style={{ color: 'white' }} />
                </a>
              </div>
            </div>
          </Menu>
        </>
      ) : (
        <>
          <div className="left-section">
            <p className="contact-item">
              <LocalPhoneIcon className="icon" /><a className='contact-link' style={{ color: 'white'}}  href="tel:+523781426360" >+52 378 142 6360</a>
            </p>
            <a className='contact-item email' href="mailto:christianmq888@gmail.com">
              <EmailIcon className="icon" /> christianmq888@gmail.com
            </a>
          </div>
           <a style={{color: 'white'}} href="./CV-CA.docx">CV</a>
          <a style={{color: 'white'}} href="./covver-letter-christian.docx">Cover Letter</a>
          <a style={{color: 'white'}} href="#">Cronologia</a>
          <div className="right-section">
         
            <div className="social-networks">
              <a className='facebook' target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/christian.martinezquezada'>
                <FacebookIcon style={{ color: 'white' }} />
              </a>
              <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/dantedeat2024/">
                <InstagramIcon style={{ color: 'white' }} />
              </a>
              <a target='_blank' rel='noopener noreferrer' href="https://w.app/butcher">
                <WhatsAppIcon style={{ color: 'white' }} />
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default FirstNavBar;
