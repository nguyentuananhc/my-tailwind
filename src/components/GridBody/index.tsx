import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import IMAGES from "const";

const GridBody = () => {
  const [currentHover, setCurrentHover] = useState<number | null>(null);

  const trigger = (index: number) => {
    setCurrentHover(index);
  };

  const reset = () => {
    setCurrentHover(null);
  };

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 auto-rows-min">
      {IMAGES.map((item, index) => {
        return (
          <div
            onMouseEnter={() => trigger(index)}
            onMouseLeave={reset}
            className="relative h-20v md:h-30v sm:h-20v"
            key={index}
          >
            <LazyLoadImage
              // className="object-cover w-full h-full overflow-hidden transition duration-200 ease-in transform rounded shadow-md w-100 h-100 delay-0 hover:scale-150"
              className="relative object-cover w-full h-full overflow-hidden rounded shadow-md "
              alt="my art"
              effect="blur"
              src={item.src}
              wrapperClassName="h-20v md:h-30v sm:h-20v"
            ></LazyLoadImage>

            <div
              className={`absolute inset-0 flex ${
                currentHover === index ? "flex" : "hidden"
              }  items-center justify-center w-full h-full text-white bg-gray-500 bg-opacity-50 rounded shadow-md`}
            >
              Lorem, ipsum dolor .
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridBody;
