
import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import '../styles/Item.scss'



function Item(props: {
  item: {
    id: number,
    type: string,
    brand: string,
    price: number,
    imgSrc: string
  }
}) 

{
  let item = props.item

  return (
    <Link to={"/device/" + item.id} key={item.id} style={{ textDecoration: 'none', color: 'grey' }}>
      <Card key={item.id}>
        <div className='div-type'>{item.type}</div>
        <div>
          <Card.Img variant="top" src={item.imgSrc}/>
          </div>
        <div className='text-container'>
          <div className='div-brand'>{item.brand}</div>
        <div className='div-price'>{item.price} ₴</div>
      </div>
      </Card>
    </Link>
  )
}

export default Item 
