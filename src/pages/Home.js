import '../styles/Home.scss'
import '../styles/Media.scss'
import { Container, Button } from "react-bootstrap";
import city from '../images/city.jpg';
import Girl from '../images/Girl.jpeg'
import Wclothing from '../images/Wclothing.jpg'
import { Link } from 'react-router-dom';




function HomeSec1 () {
 
  return (
   
    
    <Container className='home__container'>  
    <div className='home__container__img_container1'>
      <div className='home__container__img_container1-block1'>
        <div className='home__container__img_container1-block1-text1'>WELCOME</div>
          <div className='home__container__img_container1-block1-text2'>
            To the site of used brand clothing
            <Link to="/shop">
            <Button variant='outline-light'>
              
              SHOP
            </Button></Link>
          </div>
      </div>
    </div>
    <div className='home__container__img_container2'>
      <img src={city} alt='city'/>
    </div>
  </Container>
  )
}

function HomeSec2 () {
  return (
    <Container>      
      <div className='home__container2__block1'>
        <Link to="/shop">WE MAKE STYLE</Link>
      </div>     
    </Container>
  )
}

function HomeSec3 (props) {

  return (
    <Container className='home__container3'>
      <div className='home__container3__img'>
        <img src={props.src} alt={props.alt}/>
      </div>      
      <div className='home__container3__div'>
        <div className='home__container3__div-block1'>
          {props.label} <p><span>CLOTHING</span></p>
            <div className='home__container3__div-block2'>
            <Link to="/shop">
            <Button variant='outline-light'>
              SHOP
            </Button></Link>
          </div> 
          
        </div>
     
      </div> 
        
        
    </Container>
  )
}



function Home() {
  return (
  <>  
 <HomeSec1/>
 <HomeSec2/>
 <HomeSec3 label='WEMEN' src={Wclothing} alt='wclothing'/>
 <HomeSec2/>
 <HomeSec3 label='KIDS' src={Girl} alt='kids'/>
 </>   
  
    
  );
}

export default Home;
