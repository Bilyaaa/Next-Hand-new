
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Form } from 'react-bootstrap';
import { IItem } from '../models/models';
import '../styles/AddForm.scss';

function AddForm () {
    const dispatch = useDispatch();

    function hideAddForm () {
        document.querySelector('.add-form-container')?.classList.add('hidden');
        getData()
    };

    function collectInfo (event: any) {
        event.preventDefault();
        const item: IItem = {
            name: event.target[0].value, 
            type: event.target[1].value,
            id: event.target[2].value,
            imgSrc: event.target[3].value,
            imgSrc2: null,
            imgSrc3: null,
            price: event.target[4].value    
        };
        return addItem(item);
    };

    function addItem (item: IItem) {
        fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
        .then(res => {
            if (res.status === 204) {
              console.log('Item added successfully');
            } else {              
                console.log(res)
            };
          })
        .then(res => {           
            console.log('Товар добавлен!');
            document.querySelector('.add-form-container')?.classList.add('hidden');
            getData();
        })
        .catch(error => {
            console.log('Error:', error);
        });
        
    };

    function getData () { 
        console.log('ok 56')
        fetch('http://localhost:3000/items')
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: 'RENDER', payload: data });
                document.querySelector('.add-btn')?.classList.remove('hidden');
            })
            .catch((error) => {
                console.error('Ошибка получения данных FETCH:', error);    
            });
            document.querySelector('.add-btn')?.classList.add('yo');
      };

  return (
    <Container className='add-form-container hidden'>
        <Form className='add-form' onSubmit={collectInfo}>
            <Form.Group className="mb-3" controlId="formItemName">
                <Form.Label>Item name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formItemType">
                <Form.Label>Item type</Form.Label>
                <Form.Control type="text" placeholder="Enter type" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formItemId">
                <Form.Label>Item ID</Form.Label>
                <Form.Control type="number" placeholder="Enter ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formItemSrc1">
                <Form.Label>Item src</Form.Label>
                <Form.Control type="text" placeholder="Enter src" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formItemPrice">
                <Form.Label>Item price</Form.Label>
                <Form.Control type="number" placeholder="Enter price" />
            </Form.Group>
            <Button variant="success" type="submit" >
                Add Item
            </Button>
            <Button onClick={hideAddForm} variant="danger">
                Cancel
            </Button>
        </Form>
    </Container>
  );
};

export default AddForm;