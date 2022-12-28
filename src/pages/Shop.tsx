
import { Container } from "react-bootstrap";
import React from "react";
import { useContext } from "react";
import  Item from "../components/Item";
import  Filters from '../components/Filters';
import { Context } from '../App'
import '../styles/Shop.scss'
import $ from 'jquery'





function Shop() {
  
  const context = useContext(Context)
  const items = context.items
  const{filteredItems, setFilteredItems} = useContext(Context);

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
    <Context.Provider value={{filteredItems, setFilteredItems}}>
    <Container className="main-container">
      <div className="filterContainer">
        <div className="remove-hidden" onClick={showFilters}>Filters</div>
        <div className='close-button hidden' onClick={showFilters}>Close</div>
        <div className="filter">
          <Filters items = {items}></Filters>
        </div>
      </div>
      <div className="content-grid">
            {filteredItems.length 
              ? filteredItems.map((item: any) => {
                return(
                      <Item key={item.id} item={item} />
                      )
              })
              : items.map((item: any) => {
                return(
                      <Item key={item.id} item={item} />
                      )
              })}
      </div>
    </Container>
    </Context.Provider>
  );
}

export default Shop;
