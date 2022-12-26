
import { Card, Container, Carousel, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import ZoomImg from "../components/ZoomImg";
import $ from 'jquery'
import '../styles/DevicePage.scss'
import Header from "../components/Header";
import {Context} from "../App";
import { useContext } from "react"

function DevicePage() {

  let itemId = useParams()
  itemId = parseInt(itemId.itemId)
  let storedData = localStorage.getItem("basket");
  let basketItems = storedData ? JSON.parse(storedData) : [];
  let {items} = useContext(Context);


  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  

  const myItem = items.filter((item) => {
    if (item.id === itemId) {
      return item;
    }
    else {
      return null
    }
  });



  return myItem.map((i) => (
    <>
   <Header/>
    <Container className="mainItemContainer" key={i.id}>
      <ZoomImg i={i}></ZoomImg>
      <div className="arrow">
      <Link to="/shop">&#5130;</Link>
      </div>
      <div className="imgContainer">
      <div className="lupa-item"       
        onClick={(e) => {
        $('.drop-item').css('display', 'block')
        $('.hide-item').css('display', 'none')
        $('.lupa-item').css('display', 'none')
      }}
        >&#128269;
      </div>
        <Carousel className="hide-item" interval={3000}>
          <Carousel.Item className="car1">
            <img className="d-block w-100 " src={i.imgSrc} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item className="car2">
            <img className="d-block w-100 car" src={i.imgSrc2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item className="car3">
            <img className="d-block w-100 car" src={i.imgSrc3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      
      </div>
      <div className="itemInfo">
        <Card.Body style={{ padding: "1rem 0" }}>
          <Card.Title className="cardType">
            {i.type}{" "}
            <span>{i.brand}</span>
          </Card.Title>
          <Card.Text className="cardText">
            PRICE:{" "}
            <span >
              {i.price} ₴
            </span>{" "}
          </Card.Text>
        </Card.Body>
        <Button
          item={i}
          onClick={(e) => {
            if (!basketItems.includes(i)) {
              basketItems.push(i);
            }
            localStorage.setItem("basket", JSON.stringify(basketItems));
            console.log(basketItems);
            Toast.fire({
              icon: 'success',
              title: 'Товар добавлен в корзину'
            })
          }}
          variant="outline-success"
          type="submit"
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            marginRight: "2rem",
          }}
        >
           add to basket
        </Button>
        <Container className="smalPicsContainer" key={i.type}>
      <img src={i.imgSrc}  alt='1' 
        style={{cursor:'pointer'}}
        onClick={(e) => {
        $('.car1').addClass('active')
        $('.car2').removeClass('active')
        $('.car3').removeClass('active')
      }}>
      </img>
      <img src={i.imgSrc2}  alt='2' 
        style={{cursor:'pointer'}}
        onClick={(e) => {
        $('.car2').addClass('active')
        $('.car1').removeClass('active')
        $('.car3').removeClass('active')
        }}></img>
      <img src={i.imgSrc3}  alt='3' 
        style={{cursor:'pointer'}}
        onClick={(e) => {
        $('.car3').addClass('active')
        $('.car2').removeClass('active')
        $('.car1').removeClass('active')
    }}></img>
    </Container>
       
      </div>
    </Container>
    </>
   
    
  ));
}

export default DevicePage;
