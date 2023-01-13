import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import './App.css'
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";
import Admin from "./pages/Admin";
import Delivery from "./pages/Delivery";
import DevicePage from "./pages/DevicePage"
import { IItem, IArr } from './models/models'
import { Provider } from 'react-redux';
import { createStore } from "redux";

const defaultList: IItem[] = [
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
  }
]
export const Context = React.createContext(defaultList)

const defaultState: IArr = {
  items: [
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
    }
  ]

}

const reducer = (state = defaultState, action: { type: string, payload: IItem[]}) => {
  switch (action.type) {
    case 'RENDER' : 
      return {...state, items : action.payload}
    default:
      return state
  }
}
const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Context.Provider value={defaultList}>
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
    </Provider>
  );
}

export default App;
