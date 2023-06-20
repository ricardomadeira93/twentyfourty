import { React, useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
const data = [
  "https://wfuogb.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-13-at-15.29.14.png",
  "https://i.redd.it/6o51hmvyqs5b1.jpg",
  "https://wfuogb.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-13-at-15.29.14.png",
  "https://wfuogb.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-13-at-15.29.14.png",
];
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  //Previous image
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  //Next image
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-500"
        >
          <div>
            <img
              className="w-screen h-full object-cover priority"
              src={data[0]}
              alt="imagem 1"
            />
          </div>
          <div className="">
            <img
              className="w-screen h-full object-cover priority"
              src={data[1]}
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-screen h-full object-cover priority"
              src={data[2]}
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-screen h-full object-cover priority"
              src={data[3]}
              alt=""
            />
          </div>
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-yellow-500 flex items-center justify-center hover:cursor-pointer hover:bg-white hover:text-black active:bg:gray-900 duration-300"
          >
            <AiOutlineDoubleLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-yellow-500 flex items-center justify-center hover:cursor-pointer hover:bg-white hover:text-black active:bg:gray-900 duration-300"
          >
            <AiOutlineDoubleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
