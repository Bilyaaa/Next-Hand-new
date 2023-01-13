import { current } from "@reduxjs/toolkit";
import { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import Header from "../components/Header.tsx";
import '../styles/Basket.scss'


function Basket() {
  
  

  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")));
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

  function deleteFromBasket(item) {
    let myId = item.id;
    let filtered = basket.filter((item) => {
      return item.id !== myId;
    });
    localStorage.clear();
    localStorage.setItem("basket", JSON.stringify(filtered));
    console.log(JSON.parse(localStorage.getItem("basket")));
    setBasket(filtered);
    Toast.fire({
      icon: "success",
      title: "Товар удален из корзины",
    });
  }

  function Summ() {
    const sum = basket.reduce((acc, item) => {
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
            {basket.map((item) => (
              <tbody key={item.id}>
                <tr key={item.id}>
                  <td>
                    <img src={item.imgSrc} alt={123}></img>
                  </td>
                  <td>{item.name}</td>
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
