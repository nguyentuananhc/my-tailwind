import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import IMAGES from "const";

export interface DimensionInterface {
  width: number;
  height: number;
}

const Body = (props: { currentNav: number }) => {
  const [dimension, setDimension] = useState<DimensionInterface>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const onResize = () => {
      const firstElement = document.querySelector<HTMLElement>(
        ".image-container"
      );
      const width = firstElement?.offsetWidth!;
      const height = firstElement?.offsetHeight!;

      setDimension({ width, height });
    };

    onResize();

    window.addEventListener("resize", onResize);

    return window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="flex flex-row flex-wrap items-stretch content-start w-full m-auto">
      <div className="relative flex-auto m-1 overflow-hidden image-container xl:w-80 xl:h-80 md:w-48 lg:w-48 md:h-48 lg:h-48">
        <img
          className="object-cover w-full h-full transition duration-200 ease-in transform rounded shadow-md delay-0 hover:scale-150"
          src={IMAGES[0].src}
          alt="my art"
        />
      </div>
      <div className="relative flex-auto m-1 overflow-hidden image-container xl:w-80 xl:h-80 md:w-48 lg:w-48 md:h-48 lg:h-48">
        <img
          className="object-cover w-full h-full transition duration-200 ease-in transform rounded shadow-md delay-0 hover:scale-150"
          src={IMAGES[1].src}
          alt="my art"
        />
      </div>
      <div className="relative flex-auto m-1 overflow-hidden image-container xl:w-80 xl:h-80 md:w-48 lg:w-48 md:h-48 lg:h-48">
        <img
          className="object-cover w-full h-full transition duration-200 ease-in transform rounded shadow-md delay-0 hover:scale-150"
          src={IMAGES[2].src}
          alt="my art"
        />
      </div>
      <div className="relative flex-auto m-1 overflow-hidden image-container xl:w-80 xl:h-80 md:w-48 lg:w-48 md:h-48 lg:h-48">
        <img
          className="object-cover w-full h-full transition duration-200 ease-in transform rounded shadow-md delay-0 hover:scale-150"
          src={IMAGES[3].src}
          alt="my art"
        />
      </div>
      {dimension.width !== 0 &&
        IMAGES.map((item, index) => {
          return (
            <div
              key={index}
              className="relative flex-auto m-1 overflow-hidden xl:w-80 xl:h-80 md:w-48 lg:w-48 md:h-48 lg:h-48"
            >
              {/* <img
                className="object-cover w-full h-full transition duration-200 ease-in transform rounded shadow-md delay-0 hover:scale-150"
                src={item.src}
                alt="my art"
              /> */}
              <LazyLoadImage
                className="object-cover w-full h-full transition duration-200 ease-in transform rounded shadow-md delay-0 hover:scale-150"
                alt="my art"
                effect="blur"
                height={dimension.height}
                src={item.src} // use normal <img> attributes as props
                width={dimension.width}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Body;
