

import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import Header from "../components/Header";
import { IItem } from "../models/models";
import '../styles/Basket.scss'


function Basket() {
  
  

  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket") as string))
  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  function deleteFromBasket(item: IItem) {
    let myId = item.id;
    let filtered = basket.filter((item: IItem) => {
      return item.id !== myId;
    });
    localStorage.clear();
    localStorage.setItem("basket", JSON.stringify(filtered));
    setBasket(filtered);
    Toast.fire({
      icon: "success",
      title: "Товар удален из корзины",
    });
  }

  function Summ() {
    const sum = basket.reduce((acc: number, item: IItem) => {
      return acc + item.price;
    }, 0);

    return <div className="summ">{sum} грн</div>;
  }
  if (basket.length) {
    return (
      <>
      <Header/>
        <Container className="main-container">
          <Table className="items-table">
            {basket.map((item: IItem) => (
              <tbody key={item.id}>
                <tr key={item.id}>
                  <td>
                    <img src={item.imgSrc} alt="123"></img>
                  </td>
                  <td>{item.type}</td>
                  <td>{item.brand}</td>
                  <td>{item.price} грн</td>
                  <td>
                    <Button
                      onClick={() => deleteFromBasket(item)} variant="danger">
                      Убрать
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
          <div className="summ-container">
            Общая стоимость
            <Summ></Summ>
            <Button className="buy-btn" variant="success">
              Купить
            </Button>
          </div>
        </Container>
      </>
    );
  } else {
    return (
      <>
      <Header/>
      <Container className="empty-basket">
        <div>Ваша корзина пуста</div>
      </Container>
      </>
    );
  }
}

export default Basket;
