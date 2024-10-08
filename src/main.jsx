import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FirstNavBar from '../components/fistNavBar/FirstNavBar.jsx'
import Header from '../components/Header/Header.jsx'
import SectionThree from '../components/section3/SectionThree.jsx'
import ButcherDescription from '../components/Description/ButcherDescription.jsx'
import AboutMe from '../components/Description/AboutMe.jsx'
import BeefVideo from '../components/videoSection/BeefVideo.jsx'
import Footer from '../components/footer/Footer.jsx'
import SeconDescription from '../components/SeconDescription/SeconDescription.jsx'
import Chronology from '../components/Chronology/Chronology.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

   <>

    <App />
    

    <FirstNavBar />
    <Header />
    <SectionThree />
    <ButcherDescription />
    <AboutMe />
    <BeefVideo />
    <SeconDescription />
    <Chronology />
    <Footer />

</> 




  
)



