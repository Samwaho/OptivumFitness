import { Carousel } from "primereact/carousel";
import { bodyPartsData } from "../utils/exportData";
import { useState, useEffect } from "react";

const HorizontalScrollBar = ({ setBodyPart }) => {
  const [bodyPartsList, setBodyPartsList] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  useEffect(() => {
    bodyPartsData
      .getBodyPartsDataSmall()
      .then((data) => setBodyPartsList(data));
  }, []);

  const Template = (bodyPartList) => {
    return (
      <div
        typeof="button"
        onClick={() => {
          setBodyPart(bodyPartList.name.toLowerCase());
          window.scrollTo({ top: 850, left: 100, behavior: "smooth" });
        }}
        className="flex flex-col items-center gap-6 m-2 text-center p-3 bg-gray rounded-lg cursor-pointer hover:bg-slate-800"
      >
        <img className="w-10 h-10" src={bodyPartList.image} alt="" />
        <p className="text-lg font-bold">{bodyPartList.name}</p>
      </div>
    );
  };
  return (
    <div className="">
      <Carousel
        value={bodyPartsList}
        numVisible={4}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={Template}
      />
    </div>
  );
};

export default HorizontalScrollBar;
