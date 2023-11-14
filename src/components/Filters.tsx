
import { Accordion, ListGroup, ListGroupItem } from 'react-bootstrap'
import React, { useState, useContext } from 'react'
import { IItem, IBrand, Itype, IArr } from '../models/models'
import { useDispatch, useSelector } from "react-redux"
// import { Context } from '../App';
import $ from 'jquery'

function Filters () {
  const dispatch = useDispatch()
  const items: IArr = useSelector(state => state) as IArr
  const myItems: IItem[] = items.items
  // const defaultL: IArr = useSelector(state => state) as IArr
  const defaultList: IItem[] = items.items
  const [brands, setBrands] = useState<Array<string>>([]);
  const [types, setTypes] = useState<Array<string>>([]);
  
  function brandsMap() {
    let brands: string[] = myItems.reduce((acc: string[], item: IBrand) => {
      if (!acc.includes(item.name)) {
        acc.push(item.name); 
      }
      return acc;
    }, []);
    setBrands(brands);  
  }

  function filterByBrandOrType(value: string) {
    let items = defaultList.filter((item: IItem) => {
       if (item.name === value || item.type === value) {
         return item 
        } 
        else return null
     })
     dispatch({type: 'RENDER', payload: items})

   }
 
   function filteredAllBrand() {
    let items = defaultList
    dispatch({type: 'RENDER', payload: items})
   }

  function typesMap() {
    let types: string[] = myItems.reduce((acc: any, item: Itype) => {
      if (!acc.includes(item.type)) {
        acc.push(item.type);
      }
      return acc;
    }, []);
    setTypes(types)
  }

  function sortLowPrice() {
    let items = myItems.sort((a, b) => {
      return a.price - b.price
    })
    console.log(myItems)
    dispatch({type: 'RENDER', payload: items})
  }

  function sortHighPrice() {
    let items = myItems.sort((a, b) => {
      return b.price - a.price
    })
    console.log(myItems)
    dispatch({type: 'RENDER', payload: items})
  }
  
  

  function hideCloseButton() {
    if (window.outerWidth < 500) {
    $('.filter').addClass('hidden')
    $('.remove-hidden').css('display', 'block')
    $('.close-button').addClass('hidden')
  }
  }
    return (      
        <div>
          <Accordion >
            <Accordion.Item eventKey="1">
              <Accordion.Header onClick={brandsMap}>BRANDS</Accordion.Header>
              <Accordion.Body style={{ padding: "0", zIndex:'95' }}>
                <ListGroup style={{ borderRadius: 0 }}>
                  <ListGroup.Item
                    style={{
                      borderLeft: "none",
                      borderRight: "none",
                    }}
                    action
                    variant="light"
                    onClick={() => {
                      filteredAllBrand()
                      hideCloseButton()
                      }
                    }

                  >
                    ALL
                  </ListGroup.Item>
                  {brands.map((brand) => (
                    <ListGroup.Item
                      style={{
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                      key={brand}
                      action
                      variant="light"
                      onClick={(e) => {
                        let value: string = e.currentTarget.textContent as string;
                        filterByBrandOrType(value);
                        hideCloseButton()
                      }}
                    >
                      {brand}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="2">
              <Accordion.Header onClick={typesMap}>
                TYPES
              </Accordion.Header>
              <Accordion.Body style={{ padding: "0" }}>
                <ListGroup style={{ borderRadius: 0 }}>
                  <ListGroup.Item
                    style={{
                      borderLeft: "none",
                      borderRight: "none",
                    }}
                    action
                    variant="light"
                    onClick={() => {
                      filteredAllBrand()
                      hideCloseButton()
                    }}

                  >
                    ALL
                  </ListGroup.Item>
                  {types.map((type) => (
                    <ListGroup.Item
                      style={{
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                      key={type}
                      action
                      variant="light"
                      onClick={(e) => {
                        let value: any = e.currentTarget.textContent;
                        filterByBrandOrType(value);
                        hideCloseButton()
                      }}
                    >
                      {type}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="3">
              <Accordion.Header>SORT</Accordion.Header>
              <Accordion.Body style={{ padding: "0" }}>
              <ListGroup style={{ borderRadius: 0 }}>
                <ListGroup.Item action onClick={() => {
                  sortLowPrice()
                  hideCloseButton()
                  }}>
                  Low price
                </ListGroup.Item>
                <ListGroup.Item action onClick={() => {
                  sortHighPrice()
                  hideCloseButton()
                  }}>
                  Hi price
                </ListGroup.Item>
              </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
   
    )
}


export default Filters