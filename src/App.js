import './App.css';
import Header from "./components/Header";
import {Outlet} from "react-router-dom";
import UserContext from './utils/UserContext';
import { useState } from 'react';



const App = () => {
  const [userName,setUserName] = useState("Ashish")
  return (
    // used to change the value inside using .Provider
    <UserContext.Provider value={{loggedInUser:userName , setUserName}}>  
      <div className="app">
        <Header />
        <Outlet/>
        {/* footer */}
      </div>
      </UserContext.Provider>
  );
};


export default App;
