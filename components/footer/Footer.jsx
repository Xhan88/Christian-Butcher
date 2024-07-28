import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div>
          <h2 className='text-footer'>If what you need is an employee with commitment, 
          <span style={{color: 'grey'}}>passion, responsibility, organization, energy,</span>  communication and courage in their work... don't hesitate to look for me!</h2>
        </div>
        <div>
          <img className='icon-footer' src="./meat-cow.png" alt="Meat" />
        </div>
        <div>
          <p>all rights reserved Christian Martinez</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
