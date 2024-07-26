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
          <img src="./meat.png" alt="Meat" />
        </div>
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic repellat ad numquam ab ducimus eum.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
