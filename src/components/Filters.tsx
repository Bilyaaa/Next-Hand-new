
import React from 'react';
import { Accordion, ListGroup } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { Context } from '../App';


interface Itype  {
  type: string
}

interface IBrand {
  brand: string
}

interface IItem  {
  id: number,
  type: string,
  brand: string,
  price: number,
  imgSrc: string,
  imgSrc2: string,
  imgSrc3: string
}



function Filters (items: []) {
  const [selectType, setSelectType] = useState<Array<Itype>>([]);
  const [selectBrand, setSelectBrand] = useState<Array<IBrand>>([]);
  let {filteredItems, setFilteredItems} = useContext(Context)

  function brandSelect() {
    let selectBrand = items.reduce((acc: any, item: IItem) => {
      if (!acc.includes(item.brand)) {
        acc.push(item.brand);
      }
      return acc;
    }, []);
    setSelectBrand(selectBrand);
    console.log(selectBrand)
  }

  function typeSelect() {
    let selectType = items.reduce((acc: any, item: IItem) => {
      if (!acc.includes(item.type)) {
        acc.push(item.type);
      }
      return acc;
    }, []);
    setSelectType(selectType);
  }

  
  function filteredBrand(value: string) {
   filteredItems = items.filter((item: IItem) => {
      if (item.brand === value || item.type === value) { return item } else return null
    });
    setFilteredItems(filteredItems);
   
  }

  function filteredAllBrand() {
    filteredItems = items.map((item) => {
      return item;
    });
    setFilteredItems(filteredItems);
  }

    return (
        
        <div>
          <Accordion >
            <Accordion.Item eventKey="1">
              <Accordion.Header onClick={brandSelect}>BRANDS</Accordion.Header>
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

                  {selectBrand.map((item) => (
                    <ListGroup.Item
                      style={{
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                      key={item.brand}
                      action
                      variant="light"
                      onClick={(e) => {
                        let value: any = e.currentTarget.textContent;
                        filteredBrand(value);
                      }}
                    >
                      {item.brand}
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