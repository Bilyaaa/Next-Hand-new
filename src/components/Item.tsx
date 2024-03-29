
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../styles/Item.scss';
import { IItem } from '../models/models';


function Item(props: {item: IItem}) {
  
  let item = props.item;

  return (
    <Link to={"/device/" + item.id} key={item.id}>
      <Card key={item.id}>
        <div className='div-type'>{item.type}</div>
        <div>
          <Card.Img variant="top" src={item.imgSrc}/>
          </div>
        <div className='text-container'>
          <div className='div-brand'>{item.name}</div>
        <div className='div-price'>{item.price} ₴</div>
      </div>
      </Card>
    </Link>
  );
};

export default Item;
