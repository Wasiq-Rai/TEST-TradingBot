import React from "react";
import Section from "../Section/Section";
const Banner = () => {
  return (
    <section className="banner-area banner-bg">
      <div className="banner-shape-wrap">
        <img
          src={"/img/banner/banner_shape01.png"}
          alt=""
          className="img-one"
        />
        <img
          src={"/img/banner/banner_shape02.png"}
          alt=""
          className="img-two"
        />
        <img
          src={"/img/banner/banner_shape03.png"}
          alt=""
          className="img-three"
        />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <img src={"/img/icon/fire.png"} alt="" />
              <h2 className="title">
                Join Future of Algorithmic <span>Stocks</span> with Trading
                Bots
              </h2>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
