import React from "react";
import { Link } from "react-router-dom";
import TickedList from "./ticketList";

const Dashboard = ({event, user, rez }) => {

  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li><Link to="/">Dashboard</Link></li>
            <li><i className="bx bx-chevron-right"></i></li>
            <li><a className="active" href="#/">Home</a></li>
          </ul>
        </div>
      </div>

      <ul className="box-info">
        <li>
          <i className="bx bxs-calendar-check"></i>
          <span className="text">
            <h3>{event}</h3>
            <p>Events</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-group"></i>
          <span className="text">
            <h3>{user}</h3>
            <p>Users</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-dollar-circle"></i>
          <span className="text">
            <h3>{rez}</h3>
            <p>reservations</p>
          </span>
        </li>
      </ul>

      <TickedList/>

    </main>
  );
};

export default Dashboard;
