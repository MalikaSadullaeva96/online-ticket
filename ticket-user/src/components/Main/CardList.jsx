import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const CardList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    setLoading(true);
    axios(`http://127.0.0.1:8000/events/all/`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => { setData(res.data); setLoading(false) })
      .catch((err) => { setLoading(false); console.log(err) });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div className="p-3 pb-5">
      <h2 className="text-center mb-5">Events</h2>
      <div className="centerr">
        {loading ? (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="w-100 row g-3 c_size">
            {data.map((el) => (
              <div key={el.id} className="col-lg-3 col-md-4 col-sm-6 centerr">
                <Card item={el} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default CardList;
