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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chronology from '../components/Chronology/Chronology.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
   <>

    <App />
    <Routes>
    <Route path='Chronology' element={<Chronology />}/> 
    </Routes>

    <FirstNavBar />
    <Header />
    <SectionThree />
    <ButcherDescription />
    <AboutMe />
    <BeefVideo />
    <Footer />

</> 
</BrowserRouter>



  
)



