import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Register from "./pages/Register";
import Admin from "./pages/Admins";
import Login from "./pages/Login";
import "./App.css";

function App() {

  const token = sessionStorage.getItem("token");

  return (
    <BrowserRouter>
      <ToastContainer/>
      {token ? (
        <Routes>
          <Route path="*" element={<Admin />} />
          <Route path="/" element={<Admin />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
