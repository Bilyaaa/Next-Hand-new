import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
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


let defaultState: IItem[]
// export const Context = React.createContext(defaultList)

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
  const [defaultList, setDefaultList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => { setIsLoading(true);
    fetch('http://localhost:3000/items')
      .then((response) => response.json())
      .then((data) => {
        console.log('Данные с сервера клиент:', data);
        setDefaultList(data);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Ошибка получения данных клиент:', error);
        setIsLoading(false); 
      });}, [])
   
  

  return (
    <Provider store={store}>
      {/* <Context.Provider value={defaultList}> */}
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
      {/* </Context.Provider> */}
    </Provider>
  );
}

export default App;
