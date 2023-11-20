
import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import Item from "../components/Item";
import Filters from '../components/Filters';
import '../styles/Shop.scss';
import $ from 'jquery';
import { useSelector, useDispatch } from "react-redux";
import { IItem } from "../models/models";

function Shop () { 

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3000/items')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'RENDER', payload: data });
    })
    .catch((error) => {
      console.error('Ошибка получения данных FETCH:', error);    
    });
  }, []);  


  let itemsArr: any = useSelector(state => state);
  let items: IItem[] = itemsArr.items;  

  function showFilters () {
    if ($('.close-button').hasClass('hidden')) {
    $('.remove-hidden').css('display', 'none');
    $('.filter').removeClass('hidden');
    $('.close-button').removeClass('hidden');
    } else {
      $('.filter').addClass('hidden');
      $('.remove-hidden').css('display', 'block');
      $('.close-button').addClass('hidden');
    };
  };

  $(document).ready(function widthCheck() {
    if (window.outerWidth < 500) {
      $('.filter').addClass('hidden');
    };
  });
  
  return (
    <Container className="main-container">
      <div className="filterContainer">
        <div className="remove-hidden" onClick={showFilters}>Filters</div>
        <div className='close-button hidden' onClick={showFilters}>Close</div>
        <div className="filter">
          <Filters></Filters>
        </div>
      </div>
      <div className="content-grid">
        {items.map((item: IItem) => {
          return(<Item key={item.id} item={item} />)
          })
        }
      </div>
    </Container>
  );
};

export default Shop;
