
import React, { useEffect, useState, useContext, useRef } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { IItem, IArr } from '../models/models';
import AddForm from '../components/AddForm';
import '../styles/Admin.scss';




function Admin() {

  const button = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();

  const admin = {
    login: '123',
    password: '111'
  };

  let userLogin: string;
  let userPassword: string;
 
  let itemsArr: any = useSelector(state => state);
  let [items, setItems] = useState(itemsArr.items);      


  function getLoginAndPassword (event: React.ChangeEvent<HTMLInputElement>) {
    if(event.currentTarget === document.querySelector('.login-input')) {
      userLogin = event.currentTarget.value;
    }
    else {
      userPassword = event.currentTarget.value;
    };
  };

  function submit () {
    if (userLogin === admin.login && userPassword === admin.password) {    
      document.querySelector('.auth-inputs__container')?.classList.add('hidden');
      document.querySelector('.list__container')?.classList.remove('hidden');
      getData();
    } else {
      alert();
    }; 
  };

  function removeAlert () {
    document.querySelector('.wrong-alert')?.classList.add('hidden');  
  };

  function alert () {
    document.querySelector('.wrong-alert')?.classList.remove('hidden');
  };

  function showAddForm () {
    document.querySelector('.add-form-container')?.classList.remove('hidden');
    document.querySelector('.add-btn')?.classList.add('hidden');
  };

  function removeItem (id: number) {
    fetch(`http://localhost:3000/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        } else {
          getData()
        }
      })
      .then(data => {
        console.log("Товар удален!");
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  function getData () { 
    fetch('http://localhost:3000/items')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'RENDER', payload: data });
        setItems(data);
      })
      .catch((error) => {
        console.error('Ошибка получения данных FETCH:', error);    
      });
  }
  

  return (
    <>
      <AddForm></AddForm>    
      <div>
        <div className="auth-inputs__container">
            <input className="login-input" type='text' placeholder="login" onClick={removeAlert} onChange={getLoginAndPassword}></input>
            <input className="password-input" type='password' placeholder="password" onClick={removeAlert} onChange={getLoginAndPassword}></input>
            <Button variant="success" onClick={submit}>Submit</Button>
            <div className='wrong-alert hidden'>Wrong Login or password</div>
        </div>
        <Container className='list__container hidden'>
          <Button variant='success' className='add-btn' ref={button} onClick={showAddForm}>+ Add</Button>      
          <Table className='list-table'>
            {items.map((item: any) => (
              <tbody key={item.id}>
                <tr
                  key={item.id}>
                  <td>
                    <img style={{ width: "100px" }} src={item.imgSrc} alt="img"></img>
                  </td>
                  <td>{item.type}</td>
                  <td>{item.name}</td>
                  <td>{item.price} грн</td>
                  <td><Button onClick={() => removeItem(item.id)} variant='outline-danger'>remove</Button></td>
                  <td></td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Container>
      </div>
    </>
  );
};

export default Admin;