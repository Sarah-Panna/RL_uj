import React, { useEffect, useState } from "react";
import kep1 from "../images/kep1.png";
import kep2 from "../images/kep2.png";
import kep3 from "../images/kep7.png";

import "./Home.css";

const Home = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const adatLeker = async () => {
      const data = await fetch("http://localhost:3501/records");
      const records = await data.json();
      setRecords(records);
    };

    adatLeker();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="false"
          >
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
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={kep1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block elso">
                  <h5>Lustmord and Aethek</h5>
                  <p>Scorn Soundtrack 2xLP (Black Vinyl)</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={kep2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Hotline Miami 1 & 2</h5>
                  <p>The Complete Collection Boxset 8xLP (Black Vinyl)</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={kep3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Mick Gordon</h5>
                  <p>Doom Original Game Soundtrack 2xLP (Red Vinyl)</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-sm-6">
          <h1>Record Label lemezbolt</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          {records.map((elem) => (
            <div key={elem._id}>
              <p>Cím: {elem.name}</p>
              <img src={elem.image} alt="" />
            </div>
          ))}
        </div>
        <div className="col-sm-6">Második</div>
      </div>
    </div>
  );
};

export default Home;
