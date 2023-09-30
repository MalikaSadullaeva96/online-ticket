import "./App.css";
import Navbar from "./components/Header/Navbar";
import { ToastContainer } from "react-toastify";
import Home from "./components/Main/Home";

function App() {
  return <div>
    <ToastContainer/>
    <Navbar/>
    <Home/>
  </div>;
}

export default App;
