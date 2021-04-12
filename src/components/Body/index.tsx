import IMAGES from "const";

const Body = (props: { currentNav: number }) => {
  return (
    <div className="flex flex-row flex-wrap items-stretch content-start w-full m-auto">
      {IMAGES.map((item, index) => {
        return (
          <div
            key={index}
            className="relative flex-auto m-1 overflow-hidden xl:w-80 xl:h-80 md:w-48 lg:w-48 md:h-48 lg:h-48"
          >
            <img
              className="object-cover w-full h-full transition duration-200 ease-in transform rounded shadow-md delay-0 hover:scale-150"
              src={item.src}
              alt="my art"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Body;
