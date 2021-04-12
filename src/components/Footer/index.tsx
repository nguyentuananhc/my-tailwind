import { ICON } from "const";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-between py-8 sm:flex-row md:flex-row lg:flex-row">
      <div className="flex">
        {ICON.map((item) => (
          <img
            loading="lazy"
            key={item.id}
            src={item.src}
            alt="icon"
            className="object-cover w-5 h-5 m-3"
          />
        ))}
      </div>
      <div>All images @ Copyright Hoa Cua</div>
    </div>
  );
}
