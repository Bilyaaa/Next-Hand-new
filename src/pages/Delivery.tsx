
import React from 'react'
import { Container } from "react-bootstrap";
import '../styles/Delivery.scss'

function Delivery () {
  return (
  <>
    <Container className="main_container">         
      <div className="main-wrapper">
        <div className="title">   
          Доставка
        </div>
        <div className="description">
          Способы доставки
          <div className="description-main">
            Доставка осуществляется по почте одним из двух перевозчиков на Ваш выбор</div>
          <div className="description-wrapper">                  
            <div className="description-delivery-container">
              <ul>
                  <a href="https://novaposhta.ua/ru">
                    <li>
                      <img src="https://novaposhta.ua/runtime/cache/320x95/nova–poshta-15-long_320px.png" alt="nova_poshta"></img>
                    </li>
                  </a>
                  <a href="https://ukrposhta.ua/ua">
                    <li>
                      <img src="/img/fdehbsd.svg" alt='ukr_poshta'></img>
                    </li>
                  </a>
              </ul>
            </div>
            <div className="description-map-container">
              <iframe 
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1269.91216550511!2d30.62291535784161!3d50.46299583481385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d1323ed96761%3A0x214e1a4da43b3f94!2z0JDQlNCS0J7QmtCQ0KIg0JrQkNCb0JXQndCh0KzQmtCY0Jkg0JLQm9CQ0JTQmNCh0JvQkNCSINCG0JPQntCg0J7QktCY0Kc!5e0!3m2!1sru!2sua!4v1646572663531!5m2!1sru!2sua" 
                width="400" 
                height="200"
                style={{border:"0"}} 
                loading="lazy">                   
              </iframe>
            </div>
          </div>
        </div>
        <div className="description-footer"> 
          &#x2217; При оформлении заказа до 12:00 отправка осуществляется в день заказа
        </div>
      </div>         
    </Container>
  </>
  )
}

export default Delivery;