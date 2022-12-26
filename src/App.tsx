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
import DevicePage from "./pages/DevicePage";

interface IContext {
  items: [],
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

  const [items, setItems] = useState<IItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<IItem[]>([]);

  useEffect(() => {
    setItems([
      {
        id: 1,
        type: "Skirt",
        brand: "Divided",
        price: 150,
        imgSrc: "./images/shi1.jpg",
        imgSrc2: "./images/shi2.jpg",
        imgSrc3: "./images/shi3.jpg"
      },
      {
        id: 2,
        type: "Dress",
        brand: "Atmosphere",
        price: 250,
        imgSrc: "./images/blue1.jpg",
        imgSrc2: "./images/blue2.jpg",
        imgSrc3: "./images/blue3.jpg"
      },
      {
        id: 3,
        type: "Overalls",
        brand: "Vero Moda",
        price: 300,
        imgSrc: "./images/bod1.jpg",
        imgSrc2: "./images/bod2.jpg",
        imgSrc3: "./images/bod3.jpg"
      },
      {
        id: 4,
        type: "Bodysuit",
        brand: "Zara",
        price: 450,
        imgSrc: "./images/body1.jpg",
        imgSrc2: "./images/body2.jpg",
        imgSrc3: "./images/body3.jpg"
      },
      {
        id: 5,
        type: "Dress",
        brand: "Atmosphere",
        price: 50,
        imgSrc: "./images/white1.jpg",
        imgSrc2: "./images/white2.jpg",
        imgSrc3: "./images/white3.jpg"
      },
      {
        id: 6,
        type: "Golf",
        brand: "Zara",
        price: 600,
        imgSrc: "./images/red1.jpg",
        imgSrc2: "./images/red2.jpg",
        imgSrc3: "./images/red3.jpg"
      },
      {
        id: 7,
        type: "Overalls",
        brand: "BooHoo",
        price: 600,
        imgSrc: "./images/col1.jpg",
        imgSrc2: "./images/col2.jpg",
        imgSrc3: "./images/col3.jpg"
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
          {/* <Route path="device/:itemId" element={<DevicePage />} /> */}
        </Route>
      </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
