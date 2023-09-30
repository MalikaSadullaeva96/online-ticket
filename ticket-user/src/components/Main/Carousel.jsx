import React from "react";
import img1 from "../../assets/img/1.jpg"
import img3 from "../../assets/img/3.png"
import img4 from "../../assets/img/4.png"

const Carousel = () => {
  return (
    <div className="w-100 py-5 d-flex justify-content-center align-items-center">
      <div id="carouselExampleCaptions" className="carousel slide w_full" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner rounded-4">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="img" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Buy Ticket</h2>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="img" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Buy Ticket</h2>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="img" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Buy Ticket</h2>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
