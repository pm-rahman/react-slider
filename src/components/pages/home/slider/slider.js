"use client";
// import sliderData from "@/data/sliderData";
import Image from "next/image";
import { useEffect, useState } from "react";

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  const [currentItem, setCurrentItem] = useState(1);
  const [prevItem, setPrevItem] = useState(0);
  const [nextItem, setNextItem] = useState(2);
  // data load from server
  useEffect(() => {
    fetch("/api/slider")
      .then((res) => res.json())
      .then((data) => {
        setSliderData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  // prev button handler
  const prevBtnHandler = () => {
    if (currentItem > 1) {
      setCurrentItem((prev) => prev - 1);
      setPrevItem((prev) => prev - 1);
      setNextItem((prev) => prev - 1);
    }
  };
  // next button handler
  const nextBtnHandler = () => {
    if (nextItem !== sliderData.length - 1) {
      setCurrentItem((prev) => prev + 1);
      setPrevItem((prev) => prev + 1);
      setNextItem((prev) => prev + 1);
    }
  };
  return (
    <>
      <div className="mt-6 grid grid-cols-4 gap-2">
        {/* prev item */}
        <div>
          <Image
            src={sliderData[prevItem]?.image}
            alt="item image"
            className="h-[60vh] w-auto rounded"
            width={600}
            height={400}
          />
        </div>
        {/* current item */}
        <div className="col-span-2">
          <Image
            src={sliderData[currentItem]?.image}
            alt="item image"
            className="h-[60vh] w-auto rounded"
            width={600}
            height={400}
          />
          {/* rest design */}
        </div>
        {/* next item */}
        <div>
          <Image
            src={sliderData[nextItem]?.image}
            alt="item image"
            className="h-[60vh] w-auto rounded"
            width={600}
            height={400}
          />
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-3">
        <span
          onClick={prevBtnHandler}
          className="border cursor-pointer px-4 py-2 rounded"
        >
          Prev
        </span>
        <span
          onClick={nextBtnHandler}
          className="border cursor-pointer px-4 py-2 rounded"
        >
          Next
        </span>
      </div>
    </>
  );
};

export default Slider;
