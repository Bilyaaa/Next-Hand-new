
import { Button, Container, Table } from 'react-bootstrap';
import '../styles/Admin.scss'
import { useContext } from 'react';
import { Context } from '../App';
import React from 'react';




function Admin() {

  const admin = {
    login: '123',
    password: '111'
  }

  let userLogin: string 
  let userPassword: string

  const inputsContainer: HTMLDivElement = document.querySelector('.auth-inputs__container') as HTMLDivElement
  const listContainer : HTMLDivElement = document.querySelector('.list__container') as HTMLDivElement

  
 
  const defaultList = useContext(Context)

  function getLoginAndPassword (event: React.ChangeEvent<HTMLInputElement>) {
    let loginInput: HTMLInputElement = document.querySelector('.login-input') as HTMLInputElement
    if(event.currentTarget === loginInput) {
      userLogin = event.currentTarget.value
    }
    else {
      userPassword = event.currentTarget.value
    }
  }



  function submit () {
    if (userLogin === admin.login && userPassword === admin.password) {   
      
      inputsContainer.classList.add('hidden')
      listContainer.classList.remove('hidden')      
    }
    else {
      alert()
    }
    
  }

  function removeAlert () {
    let wrongAlert: HTMLDivElement = document.querySelector('.wrong-alert') as HTMLDivElement
    wrongAlert.classList.add('hidden')       
  }

  function alert () {
    let wrongAlert: HTMLDivElement = document.querySelector('.wrong-alert') as HTMLDivElement
    wrongAlert.classList.remove('hidden')
  }

  return (
    <>
      <div>
        <div className="auth-inputs__container">
            <input className="login-input" type='text' placeholder="login" onClick={removeAlert} onChange={getLoginAndPassword}></input>
            <input className="password-input" type='password' placeholder="password" onClick={removeAlert} onChange={getLoginAndPassword}></input>
            <Button variant="success" onClick={submit}>Submit</Button>
            <div className='wrong-alert hidden'>Wrong Login or password</div>
        </div>
        <Container className='list__container hidden'>
          <Table className='list-table'>
            {defaultList.map((item) => (
              <tbody key={item.id}>
                <tr
                  key={item.id}>
                  <td>
                    <img style={{ width: "100px" }} src={item.imgSrc} alt="img"></img>
                  </td>
                  <td>{item.type}</td>
                  <td>{item.brand}</td>
                  <td>{item.price} грн</td>
                  <td><Button variant='outline-danger'>remove</Button></td>
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