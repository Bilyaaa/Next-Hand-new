import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import Header from "./components/Header.tsx";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";
import Admin from "./pages/Admin";
import Delivery from "./pages/Delivery";
import DevicePage from "./pages/DevicePage"

interface IContext {
  items: any,
  filteredItems: [],
  setFilteredItems?: any

}

interface IItem {
  id: number,
  type: string,
  brand: string,
  price: number,
  imgSrc: any,
  imgSrc2: any,
  imgSrc3: any
}

export const Context = React.createContext<IContext>({items: [], filteredItems: []});



function App() {

  const [items, setItems] = useState<Array<IItem>>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filteredItems, setFilteredItems] = useState<Array<IItem>>([]);

  useEffect(() => {
    setItems([
      {
        id: 1,
        type: "Skirt",
        brand: "Divided",
        price: 150,
        imgSrc: "/img/shi1.jpg",
        imgSrc2: "/img/shi2.jpg",
        imgSrc3: "/img/shi3.jpg"
      },
      {
        id: 2,
        type: "Dress",
        brand: "Atmosphere",
        price: 250,
        imgSrc: "/img/blue1.jpg",
        imgSrc2: "/img/blue2.jpg",
        imgSrc3: "/img/blue3.jpg"
      },
      {
        id: 3,
        type: "Overalls",
        brand: "Vero Moda",
        price: 300,
        imgSrc: "/img/bod1.jpg",
        imgSrc2: "/img/bod2.jpg",
        imgSrc3: "/img/bod3.jpg"
      },
      {
        id: 4,
        type: "Bodysuit",
        brand: "Zara",
        price: 450,
        imgSrc: "/img/body1.jpg",
        imgSrc2: "/img/body2.jpg",
        imgSrc3: "/img/body3.jpg"
      },
      {
        id: 5,
        type: "Dress",
        brand: "Atmosphere",
        price: 50,
        imgSrc: "/img/white1.jpg",
        imgSrc2: "/img/white2.jpg",
        imgSrc3: "/img/white3.jpg"
      },
      {
        id: 6,
        type: "Golf",
        brand: "Zara",
        price: 600,
        imgSrc: "/img/red1.jpg",
        imgSrc2: "/img/red2.jpg",
        imgSrc3: "/img/red3.jpg"
      },
      {
        id: 7,
        type: "Overalls",
        brand: "BooHoo",
        price: 600,
        imgSrc: "/img/col1.jpg",
        imgSrc2: "/img/col2.jpg",
        imgSrc3: "/img/col3.jpg"
      },
    ]);
  }, []);
  
  return (
    <Context.Provider value={{filteredItems: [], setFilteredItems, items: items}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="basket" element={<Basket />} />
          <Route path="admin" element={<Admin />} />
          <Route path="device/:itemId" element={<DevicePage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
