import React from "react";
import img1 from "../../assets/img/1.jpg";

const Card = ({ item }) => {
  return (
    <div className="card w-100" style={{ maxWidth: "19rem" }}>
      <img src={item?.thumbnail ? item?.thumbnail : img1} width={100} height={250} className="card-img-top" alt={item.name} />
      <div className="card-body d-flex justify-content-between">
        <h5 className="card-title">{item?.name}</h5>
        <span onClick={()=> window.location.href=`/ticket-card/${item.id}`} className="btn btn-info">
          info
        </span>
      </div>
    </div>
  );
};

export default Card;
