import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import image_1_1 from "../assets/images/home/1-1.png";
import image_1_2 from "../assets/images/home/1-2.png";
import image_2_1 from "../assets/images/home/2-1.png";
import image_2_2 from "../assets/images/home/2-2.png";
import image_3_1 from "../assets/images/home/3-1.png";
import image_3_2 from "../assets/images/home/3-2.png";
import section1 from "../assets/images/home/section1.jpg";
import section2 from "../assets/images/home/section2.jpg";
import section3 from "../assets/images/home/section3.jpg";

const Home = () => {
  const navigate = useNavigate();
  const image_1_1_ref = useRef(null);
  const image_1_2_ref = useRef(null);
  const image_2_1_ref = useRef(null);
  const image_2_2_ref = useRef(null);
  const image_3_1_ref = useRef(null);
  const image_3_2_ref = useRef(null);

  const section1Clicked = () => {
    image_1_1_ref.current?.classList.add("animate-left");
    image_1_2_ref.current?.classList.add("animate-right");
    setTimeout(() => {
      navigate("/section1");
    }, 4000);
  };

  const section2Clicked = () => {
    image_2_1_ref.current?.classList.add("animate-left");
    image_2_2_ref.current?.classList.add("animate-left");
    setTimeout(() => {
      navigate("/section2");
    }, 4000);
  };

  const section3Clicked = () => {
    image_3_1_ref.current?.classList.add("animate-left");
    image_3_2_ref.current?.classList.add("animate-right");
    setTimeout(() => {
      navigate("/section3");
    }, 4000);
  };
  return (
    <div>
      <div className="h-screen overflow-hidden flex flex-col mx-auto">
        <div
          onClick={section1Clicked}
          className="cloud-section-1 w-full relative basis-1/3"
        >
          <img
            ref={image_1_1_ref}
            src={image_1_1}
            className="absolute left-0 bottom-0 w-1/2"
            alt=""
          />
          <img
            ref={image_1_2_ref}
            src={image_1_2}
            className="absolute right-0 bottom-0 w-1/2"
            alt=""
          />
          <img src={section1} className="w-full h-full object-fill" alt="" />
        </div>
        <div className="relative basis-1/3" onClick={section2Clicked}>
          <img
            ref={image_2_1_ref}
            src={image_2_1}
            className="absolute left-0 top-0 w-[100px]"
            alt=""
          />
          <img
            ref={image_2_2_ref}
            src={image_2_2}
            className="absolute left-10 bottom-0 w-[200px]"
            alt=""
          />
          <img src={section2} className="w-full h-full object-fill" alt="" />
        </div>
        <div className="relative basis-1/3" onClick={section3Clicked}>
          <img
            ref={image_3_1_ref}
            src={image_3_1}
            className="absolute left-0 top-0 w-1/2"
            alt=""
          />
          <img
            ref={image_3_2_ref}
            src={image_3_2}
            className="absolute right-0 bottom-0 w-1/2"
            alt=""
          />
          <img src={section3} className="w-full h-full object-fill" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
