import React, { useState } from "react";
import "./Carousel.css";
import { images } from "./CarouselData";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import {MdArrowForwardIos} from "react-icons/MdArrowForwardIos";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          {/* <ArrowBackIosIcon style={{ fontSize: 30 }} /> */}
        </div>
        <div className="center">
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p>
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          {/* <MdArrowForwardIos style={{ fontSize: 30 }} /> */}
        </div>
      </div>
    </div>
  );
}

export default Carousel;