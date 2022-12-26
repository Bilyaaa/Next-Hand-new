
import { Button, Container, Table } from 'react-bootstrap';
import '../styles/Admin.scss'
import { Context } from '../App.tsx'
import { useContext } from 'react';




function Admin() {

    let {items} = useContext(Context)

    const admin = {
        login: '123',
        password: '111'
    }

    let userLogin 
    let userPassword

    function getLogin () {
        userLogin = document.querySelector('.login-input').value   
    }

    function getPassword () {
        userPassword = document.querySelector('.password-input').value   
    }

    function submit () {
        if (userLogin === admin.login && userPassword === admin.password) {
            document.querySelector('.auth-inputs__container').classList.add('hidden')
            document.querySelector('.list__container').classList.remove('hidden')
        }
        else {
            alert()
        }

    }

    function removeAlert () {
        document.querySelector('.wrong-alert').classList.add('hidden')    
    }

    function alert () {
        document.querySelector('.wrong-alert').classList.remove('hidden')
    }



   




    return (
      <>
        <div>
            <div className="auth-inputs__container">
                <input className="login-input" type='text' placeholder="login" onClick={removeAlert} onKeyUp={getLogin}></input>
                <input className="password-input" type='password' placeholder="password" onClick={removeAlert} onKeyUp={getPassword}></input>
                <Button variant="success" onClick={submit}>Submit</Button>
                <div className='wrong-alert hidden'>Wrong Login or password</div>
            </div>
            <Container className='list__container hidden'>
        <Table className='list-table'>
          {items.map((item) => (
            <tbody key={item.id}>
              <tr
                key={item.id}>
                <td>
                  <img
                    style={{ width: "100px" }}
                    src={item.imgSrc}
                    alt={123}
                  ></img>
                </td>

                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.price} грн</td>
                <td><Button variant='outline-danger'>remove</Button></td>
                <td>
                </td>
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