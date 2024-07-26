
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src="./Header-Carnes-y-Quesos.jpg" alt="header-image" className='header-image' />

      <div className='name-title' style={{boxShadow: '10px 4px 8px rgba(0, 0, 0, 0.5)' }}>
        <h1>Christian Martínez</h1>
        <img className='cartel-butcher' src="./meat.png" alt="" />
      <p className='header-description'>Professional butcher with more than 10 years of experience</p>
      </div>
      
    </div>
  );
}

export default Header;
