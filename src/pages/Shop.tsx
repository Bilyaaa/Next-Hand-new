
import { Container } from "react-bootstrap";
import React from "react";
import  Item from "../components/Item";
import  Filters from '../components/Filters';
import '../styles/Shop.scss'
import $ from 'jquery'
import {  useSelector } from "react-redux"
import { IItem, IArr } from "../models/models"

function Shop() { 
  let items: IArr = useSelector(state => state) as IArr
  let myItems: IItem[] = items.items

  function showFilters() {
    if ($('.close-button').hasClass('hidden')) {
    $('.remove-hidden').css('display', 'none')
    $('.filter').removeClass('hidden')
    $('.close-button').removeClass('hidden')
    }
    else {
      $('.filter').addClass('hidden')
      $('.remove-hidden').css('display', 'block')
      $('.close-button').addClass('hidden')
    }
  }

  $(document).ready(function widthCheck() {
    if (window.outerWidth < 500) {
      $('.filter').addClass('hidden')
    }
  })
  
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
        {myItems.map((item: IItem) => {
          return(<Item key={item.id} item={item} />)
          })
        }
      </div>
    </Container>
  )
}

export default Shop;
