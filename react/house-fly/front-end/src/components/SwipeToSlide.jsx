import React, { Component } from "react";
import Slider from "react-slick";
import image from "../assets/imgs/banner.png";

function SwipeToSlide() {
  const itemsArray = [image, image, image, image, image, image];
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="slider-container">

      <Slider {...settings}>
        <div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              alt=""
              className="w-[20%]"
            />
          </div>
          <div>
            <span>Vinahouse Thái hoàng</span>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              alt=""
              className="w-[20%]"
            />
          </div>
          <div>
            <span>Vinahouse Thái hoàng 2</span>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              alt=""
              className="w-[20%]"
            />
          </div>
          <div>
            <span>Vinahouse Thái hoàng 3</span>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              alt=""
              className="w-[20%]"
            />
          </div>
          <div>
            <span>Vinahouse Thái hoàng 4</span>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              alt=""
              className="w-[20%]"
            />
          </div>
          <div>
            <span>Vinahouse Thái hoàng 5</span>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              alt=""
              className="w-[20%]"
            />
          </div>
          <div>
            <span>Vinahouse Thái hoàng 6</span>
          </div>
        </div>
      </Slider>
      </div>
  );
}

export default SwipeToSlide;
