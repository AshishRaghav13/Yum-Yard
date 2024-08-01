import './App.css';
import Header from "./components/Header";
import {Outlet} from "react-router-dom";
import UserContext from './utils/UserContext';
import { useState } from 'react';
import Provider from 'react-redux';
import appStore from './utils/appStore';



const App = () => {
  const [userName,setUserName] = useState("Ashish")
  return (
    <Provider store={appStore}>
    // used to change the value inside using .Provider
    <UserContext.Provider value={{loggedInUser:userName , setUserName}}>  
      <div className="app">
        <Header />
        <Outlet/>
        {/* footer */}
      </div>
      </UserContext.Provider>
      </Provider>
  );
};


export default App;
