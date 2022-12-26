import { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import Header from "../components/Header.tsx";


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

  function Summ() {
    const sum = basket.reduce((acc, item) => {
      return acc + item.price;
    }, 0);

    return <div style={{ fontSize: "5rem", color: "black" }}>{sum} грн</div>;
  }




  if (basket.length) {
    return (
      <>
      <Header/>
      <Container style={{ display: "flex", marginTop: "10%" }}>
        <Table
          style={{
            width: "70%",
            border: "none",
            borderCollapse: "collapse",
          }}
        >
          {basket.map((item) => (
            <tbody key={item.id}>
              <tr
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
                key={item.id}
              >
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
                <td>
                  <Button
                    item={item}
                    onClick={(e) => {
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
                    }}
                    variant="danger"
                  >
                    Убрать
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <div style={{ fontSize: "2rem", margin: "2rem", color: "grey" }}>
          Общая стоимость
          <Summ></Summ>
          <Button
            style={{ margin: "2rem", fontSize: "3rem" }}
            variant="success"
          >
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
      <Container style={{ marginTop: "6rem", textAlign: "center" }}>
        <div style={{ fontSize: "5rem" }}>Ваша корзина пуста</div>
      </Container>
      </>
    );
  }
}

export default Basket;
