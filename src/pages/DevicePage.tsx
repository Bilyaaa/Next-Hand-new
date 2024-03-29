
import { Card, Container, Carousel, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import ZoomImg from "../components/ZoomImg";
import $ from 'jquery'
import '../styles/DevicePage.scss'
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { IArr, IItem } from "../models/models";

function DevicePage() {
  let item = useParams()
  let itemId = item.itemId
  let storedData = localStorage.getItem("basket");
  let basketItems = storedData ? JSON.parse(storedData) : [];
  const defaultl = useSelector(state => state) as IArr
  const defaultList = defaultl.items

  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })

  let myItem = defaultList.filter((item) => {
    if (item.id.toString() === itemId) {
      return item;
    }
    else {
      return null
    }
  });
  return (
    <Container className="mainItemContainer" key={item.id}>
      {myItem.map((item) => (
      <>
      <ZoomImg item={item}></ZoomImg><div className="arrow">
          <Link to="/shop">&#5130;</Link>
        </div>
        <div className="imgContainer">
            <div className="lupa-item"
              onClick={() => {
                $('.drop-item').css('display', 'block');
                $('.hide-item').css('display', 'none');
                $('.lupa-item').css('display', 'none');
              } }
            >&#128269;
            </div>
            <Carousel className="hide-item" interval={3000} key={item.id}>
              <Carousel.Item className="car1">
                <img className="d-block w-100 " src={item.imgSrc} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item className="car2">
                <img className="d-block w-100 car" src={item.imgSrc2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item className="car3">
                <img className="d-block w-100 car" src={item.imgSrc3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="itemInfo">
            <Card.Body style={{ padding: "1rem 0" }}>
              <Card.Title className="cardType">
                {item.type}{" "}
                <span>{item.name}</span>
              </Card.Title>
              <Card.Text className="cardText">
                PRICE:{" "}
                <span>
                  {item.price} ₴
                </span>{" "}
              </Card.Text>
            </Card.Body>
            <Button
              onClick={() => {
                if (!basketItems.includes(item)) {
                  basketItems.push(item);
                }
                localStorage.setItem("basket", JSON.stringify(basketItems));
                console.log(basketItems);
                Toast.fire({
                  icon: 'success',
                  title: 'Товар добавлен в корзину'
                });
              } }
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
            <Container className="smalPicsContainer" key={item.type}>
              <img src={item.imgSrc} alt='1'
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  $('.car1').addClass('active');
                  $('.car2').removeClass('active');
                  $('.car3').removeClass('active');
                } }>
              </img>
              <img src={item.imgSrc2} alt='2'
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  $('.car2').addClass('active');
                  $('.car1').removeClass('active');
                  $('.car3').removeClass('active');
                } }></img>
              <img src={item.imgSrc3} alt='3'
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  $('.car3').addClass('active');
                  $('.car2').removeClass('active');
                  $('.car1').removeClass('active');
                } }></img>
            </Container>
          </div>
          </>
      ))}
    </Container>
  
  )
}

export default DevicePage;
