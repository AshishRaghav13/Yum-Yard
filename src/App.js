import './App.css';
import Header from "./components/Header";
import {Outlet} from "react-router-dom";



const App = () => {
  return (
      <div className="app">
        <Header />
        <Outlet/>
        {/* footer */}
      </div>
  );
};


export default App;
