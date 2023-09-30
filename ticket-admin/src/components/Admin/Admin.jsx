import { Route, Routes } from "react-router-dom";
import CreateTicket from "./CreateTicket";
import React, { useEffect, useState } from "react";
import AdminMain from "./Dashboard";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import axios from "axios";

const Admin = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [reserv, setReserv] = useState([]);

  const getData = () => {
    setLoading(true);
    axios(`${process.env.REACT_APP_API_URL}/events/all/`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => { 
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const getReserv = () => {
    axios(`${process.env.REACT_APP_API_URL}/events/all/`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => setReserv(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getReserv()
    getData()
  }, [])

  return (
    <div>
      <Sidebar/>
      <section id="content">
        <Navbar/>
        <Routes>
          <Route path="/" element={<AdminMain  event={data?.length} user={4} rez={reserv?.leng ? reserv?.leng : 0}/>}/>
          <Route path="/create-ticket" element={<CreateTicket/>} />
        </Routes>
      </section>

    </div>
  );
};

export default Admin;
