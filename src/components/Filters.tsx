
import React from 'react';
import { Accordion, ListGroup } from 'react-bootstrap'
import { useState } from 'react'
import { IItem, IBrand, Itype, IArr } from '../models/models'
import { useDispatch, useSelector } from "react-redux"
import { type } from 'os';



function Filters () {


  const dispatch = useDispatch()
  let items: IArr = useSelector(state => state) as IArr
  

  let myItems: IItem[] = items.items

  let [filteredItems, setFilteredItems] = useState(items)
  



  const [selectType, setSelectType] = useState<Array<Itype>>([]);
  const [brands, setBrands] = useState<Array<string>>([]);
  
  function brandsMap() {
    let brands: string[] = myItems.reduce((acc: string[], item: IBrand) => {
      if (!acc.includes(item.brand)) {
        acc.push(item.brand); 
      }
      return acc;
    }, []);
    setBrands(brands);  
  }

  function filteredBrand(value: string) {
    let items = myItems.filter((item: IItem) => {
       if (item.brand === value || item.type === value) {
         return item 
        } 
        else return null
     })
     console.log(items)
     dispatch({type: 'RENDER', payload: items})
   }
 
   function filteredAllBrand() {
     myItems = myItems.map((item) => {
       return item;
     });
   }

  function typeSelect() {
    let selectType = myItems.reduce((acc: any, item: IItem) => {
      if (!acc.includes(item.type)) {
        acc.push(item.type);
      }
      return acc;
    }, []);
    setSelectType(selectType);
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
                    onClick={filteredAllBrand}
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
                        let value: any = e.currentTarget.textContent;
                        filteredBrand(value);
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
              <Accordion.Header onClick={typeSelect}>
                WOMEN CLOTHING
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
                    onClick={filteredAllBrand}
                  >
                    ALL
                  </ListGroup.Item>
                  {selectType.map((item) => (
                    <ListGroup.Item
                      style={{
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                      key={item.type}
                      action
                      variant="light"
                      onClick={(e) => {
                        let value: any = e.currentTarget.textContent;
                        filteredBrand(value);
                      }}
                    >
                      {item.type}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="3">
              <Accordion.Header>KIDS CLOTHING</Accordion.Header>
              <Accordion.Body style={{ padding: "0" }}></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
   
    )
}


export default Filters