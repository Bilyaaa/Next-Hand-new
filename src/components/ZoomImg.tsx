
import React from 'react'
import { Carousel } from 'react-bootstrap'
import  $  from 'jquery'

function ZoomImg ({i}) {
    return(
       <div className='drop-item' style={{position: 'absolute', display:'none'}}>
           <div 
           style={{cursor:'pointer', position:'absolute', zIndex:'100', display: 'flex', justifyContent:'center', width:'100%', fontSize:'4rem', fontWeight:'800', color:'white'}} 
           onClick={(e) => {
               $('.drop-item').css('display', 'none')
               $('.hide-item').css('display', 'block')
               $('.lupa-item').css('display', 'flex')

           }}>
               &#x2613;</div>
       <Carousel style={{
         width: '80%',
         overflow: 'hidden',
         
       }}
       interval={10000}  >
          <Carousel.Item>
            <img className="d-block w-100" src={i.imgSrc} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={i.imgSrc2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={i.imgSrc3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        </div>
    )
}
 






export default ZoomImg