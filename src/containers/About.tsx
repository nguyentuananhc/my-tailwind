import { avatar } from "const";

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-8">
        <h1>
          <span className="text-3xl font-bold underline">ABOUT</span>
        </h1>
      </div>
      <div className="text-center">
        <p>Hi!</p>
        <p>
          My name is Nguyen Ngoc Hoa. You may also know by me alias Len
          illustrator
        </p>
        <p>
          I work at Viet Nam as a Product Illustrator alongside with UX and UI
          designers.
        </p>
        <p>
          I create not only illustrations for digital products but also Design
          systems, guidelines, libraries for illustrations, Animation for app
        </p>
        <p>
          In addition, I also do jobs like Book illustrations - Graphic Designer
          - Motion Graphics 2D - Watercolor We can talk about your business and
          how I can help you.
        </p>
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="flex flex-col items-center justify-center ">
          <img
            className="object-cover rounded-full w-44 h-44 md:h-80 md:w-80"
            src={avatar}
            alt="avatar"
          />
          <span>Photo by Hoa</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8">
        <span className="mb-5 text-2xl font-bold underline">PAGE</span>
        <p>https://dribbble.com/hoacua</p>
        <p>https://www.behance.net/NgocHoa</p>
        <p>https://lottiefiles.com/hoacua</p>
        <p>Thank you for visiting my portfolio</p>
      </div>
    </div>
  );
};

export default About;
