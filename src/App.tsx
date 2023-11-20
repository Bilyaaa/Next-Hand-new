import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";
import Admin from "./pages/Admin";
import Delivery from "./pages/Delivery";
import DevicePage from "./pages/DevicePage"
import { IItem, IArr } from './models/models';
import { Provider, useDispatch } from 'react-redux';
import { createStore } from "redux";


let defaultState: IArr = { items: [] };
const reducer = (state = defaultState, action: { type: string, payload: IItem[]}) => {
  switch (action.type) {
    case 'RENDER': 
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
const store = createStore(reducer, defaultState);



function App() { 
  
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/device/:itemId" element={<DevicePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
