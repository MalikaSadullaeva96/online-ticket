/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import action from "../../assets/img/action.svg"
import place from "../../assets/img/place.svg"
import time from "../../assets/img/time.svg"
import UpdateTicket from "./UpdateTicket";
import "./TicketList.css";
import axios from "axios";

export default function TicketList() {

  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [data, setData] = useState([]);

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

  useEffect(() => {
    getData()
  }, []);


  const editStudent = (id) => {
    setEditId(id)
  };

  const deleteTicket = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/events/${id}/delete/`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => console.log(res))
      .then((date) => console.log(date));
  };

  return (
    <section id="sectionJobList" className="my-5 section section-job-list gradient-light--lean-left ms-4">
      <div className="row row-grid justify-content-center">
        <div className="col-md-12">
          <div className="job-list__wrapper mb-6">
            <div id="header" className="card p-0 mb-3 border-0 shadow-sm shadow--on-hover">
              <div className="card-body">
                <span className="row justify-content-between align-items-center">
                  <span className="col-8 col-md-4 color--heading">
                    <span className="badge background--tertiary text-white me-2">T</span>Name
                  </span>
                  <span className="d-none d-md-block col-md-4 my-sm-0">
                    <img className="mb-1 me-1" src={place} alt="place" />Place
                  </span>
                  <span className="d-none d-md-block col-md-2 my-sm-0">
                    <img className="mb-1 me-1" src={time} alt="place" />Date
                  </span>
                  <span className="col-4 col-md-2 text-center">
                    <img className="mb-1 me-1" src={action} alt="place" />Actions
                  </span>
                </span>
              </div>
            </div>

            {
              loading ? "loading" :
              <div id="scroll">
              { data?.map((el, i) => (
                <div key={el.id} className="card p-0 mb-3 border-0 shadow-sm shadow--on-hover">
                  <div className="card-body">
                    <span className="row justify-content-between align-items-center">
                      <span className="col-md-4 col-9 color--heading">
                        <span id="strong" className="badge badge-circle background--danger text-white me-2">
                          {el.name.slice(0, 1)}
                        </span>{" "}{el.name}
                      </span>

                      <span className="d-none d-md-block col-md-4 my-sm-0 color--text">{el.place}</span>
                      <span className="d-none d-md-block col-md-2 my-sm-0 color--text">{el.date.slice(0, 19)}</span>

                      <span className="col-3 col-md-2 text-center color--text">
                        <ul className="list-unstyled mb-0 d-flex justify-content-center">
                          <li>
                            <span
                              className="text-info"
                              data-toggle="tooltip"
                              title="edit"
                              data-original-title="Edit"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => editStudent(el)}
                            >
                              <i style={{fontSize: "22px", cursor: "pointer"}} className='bx bxs-edit'></i>
                            </span>
                          </li>
                          <li>
                            <span
                              className="text-danger ms-3"
                              data-toggle="tooltip"
                              title="delete"
                              data-original-title="Delete"
                              onClick={() => deleteTicket(el.id)}
                            >
                              <i style={{fontSize: "22px", cursor: "pointer"}} class='bx bxs-trash' ></i>
                            </span>
                          </li>
                        </ul>
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            }
          </div>
        </div>
      </div>
      <UpdateTicket item={editId}/>
    </section>
  );
}
