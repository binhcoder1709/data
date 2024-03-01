import React from "react";
import SwipeToSlide from "../../components/SwipeToSlide";
import CarouselMultiItems from "../../components/CarouselMultiItems";
import Carousel from "../../components/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Home() {
  return (
    <>
      <div className="flex w-full">
        {/* main home */}
        <div className="w-[70%] bg-slate-200">
          {/* recently played */}
          <div>
            <div>
              <h1 className="text-3xl font-semibold">Recently Played</h1>
            </div>
            <div className="w-full bg-slate-700 flex">
              <div className="w-full h-full">
                <div className="w-full h-full bg-green-400">
                  <button className="absolute ml-6 bg-orange-200"><FontAwesomeIcon icon={}/> </button>
                </div>
                <div className="">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                    alt=""
                    className="w-full h-[120px]"
                  />
                </div>
                <div className="">
                  <span className="">Vinahouse Thái hoàng</span>
                </div>
              </div>
              <div className="w-full h-full ">
                <div className="">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                    alt=""
                    className="w-full h-[120px]"
                  />
                </div>
                <div>
                  <span className="block">Vinahouse Thái hoàng</span>
                </div>
              </div>
              <div className="w-full h-full ">
                <div className="">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                    alt=""
                    className="w-full h-[120px]"
                  />
                </div>
                <div>
                  <span className="block">Vinahouse Thái hoàng</span>
                </div>
              </div>
              <div className="w-full h-full ">
                <div className="">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                    alt=""
                    className="w-full h-[120px]"
                  />
                </div>
                <div>
                  <span className="block">Vinahouse Thái hoàng</span>
                </div>
              </div>
              <div className="w-full h-full ">
                <div className="">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                    alt=""
                    className="w-full h-[120px]"
                  />
                </div>
                <div>
                  <span className="block">Vinahouse Thái hoàng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* home slide bar */}
        <div className="w-[30%] bg-black">slide bar</div>
      </div>
    </>
  );
}
