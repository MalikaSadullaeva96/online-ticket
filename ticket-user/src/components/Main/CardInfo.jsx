import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const CardInfo = () => {
  const params = window.location.href.split("/").reverse()[0];
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [data, setData] = useState(null);

  const getData = async () => {
    setLoading(true);
    axios(`http://127.0.0.1:8000/events/all/`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        res.data.forEach((el) => {
          if (el.id == params) {
            setData(el);
            return;
          }
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const buyTicket = () => {
    setBtnLoading(true);
    const body = {
        event: data.id,
        number_of_tickets: data.number_of_seats
    }
    axios.post(`http://127.0.0.1:8000/reservations/create/`, body, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        toast.success("Successfully!")
        setBtnLoading(false);
        setTimeout(() => {
          window.location.replace("/")
        }, 500);
      })
      .catch((err) => {
        setBtnLoading(false);
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="card_info container py-5">
      <h2 className="text-center">Ticket info</h2>
      <div className="row">
        {loading ? (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <section className="h-100">
              <div className="container py-2 p-md-5 m-auto p-0 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 m-0 p-0 col-lg-9 mb-md-4 mb-lg-0">
                    <div
                      className="card mb-3"
                      style={{ borderRadius: ".5rem" }}
                    >
                      <div className="row g-0">
                        <div
                          className={`gradientCustom col-md-4 text-center text-white py-5`}
                          style={{
                            borderTopLeftRadius: ".5rem",
                            borderBottomLeftRadius: ".5rem",
                          }}
                        >
                          <div data-bs-toggle="modal" data-bs-target="#exampleModal" className="profilePic">
                            <img src={data?.thumbnail} alt="Avatar" className="profileImg"/>
                          </div>
                          <h5 className="m-auto mt-4 pt-2 mb-2">{data.name}</h5>
                          <p>{data.position}</p>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body p-4">
                            <h6 className="fw-bold">Information</h6>
                            <hr className="mt-0 mb-4" />
                            <div className="row pt-1">
                              <div className="col-6 mb-2">
                                <h6>Name</h6>
                                <p className="text-muted">
                                  {data.name}
                                </p>
                              </div>
                              <div className="col-6 mb-2">
                                <h6>Topic</h6>
                                <p className="text-muted">{data.topic}</p>
                              </div>
                              <div className="col-6 mb-2">
                                <h6>Place</h6>
                                <p className="text-muted">
                                  {data.place}
                                </p>
                              </div>
                              <div className="col-6 mb-2">
                                <h6>Date</h6>
                                <p className="text-muted">{data.date?.slice(0, 10)}</p>
                              </div>
                              <div className="col-6 mb-2">
                                <h6>Namber seats</h6>
                                <p className="text-muted">{data.number_of_seats}</p>
                              </div>
                              <div className="col-6 mb-2">
                                <h6>Price</h6>
                                <p className="text-muted">
                                  {data.ticket_price+ " "+data.currency}
                                </p>
                              </div>
                              <div className="col-12 mb-2">
                                <h6>Description</h6>
                                <p className="text-muted">
                                  {data.description}
                                </p>
                              </div>
                            </div>
                            <h6 className="fw-bold">Action</h6>
                            <hr className="mt-0 mb-4" />
                            <div className="">
                              <button disabled={btnLoading} onClick={()=>buyTicket()} className="btn btn-info">Buy ticket</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default CardInfo;
