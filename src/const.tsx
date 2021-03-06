// import image1 from "images/bia-5-ngay-di-bui_optimized.jpg";
import image2 from "images/img_1033_optimized.png";
import image3 from "images/img_1686_optimized.png";
import image4 from "images/img_1687_optimized.png";
import image5 from "images/img_2220_optimized.jpg";
import image6 from "images/img_4201_optimized.jpg";
import image7 from "images/img_4310_optimized.jpg";
import image8 from "images/img_6577_optimized.png";
import image9 from "images/img_7516_optimized.png";
import image10 from "images/img_7681_optimized.png";
import image11 from "images/img_7687_optimized.png";
import image12 from "images/img_7777_optimized.png";
import logoSrc from "images/logo/logo.png";
import avatarSrc from "images/logo/avatar.png";

import behance from "images/icon/behance.svg";
import dribbble from "images/icon/dribbble.svg";
import email from "images/icon/email.svg";
import facebook from "images/icon/facebook.svg";
import instagram from "images/icon/instagram.svg";
import youtube from "images/icon/youtube.svg";

import image from "images/tinified/image.jpg";
import mountain1 from "images/tinified/mountain1.png";
import mountain2 from "images/tinified/mountain2.png";
import mountain3 from "images/tinified/mountain3.png";
import person from "images/tinified/person.png";
import sky from "images/tinified/sky.png";

export const NAVIGATION: { id: number; name: string; to: string }[] = [
  { id: 1, name: "Animation", to: "/animation" },
  { id: 2, name: "Illustration", to: "/illustration" },
  { id: 3, name: "GIF", to: "/gif" },
  // { id: 4, name: "Shop" },
  { id: 5, name: "Contact", to: "/contact" },
  { id: 6, name: "About", to: "/about" },
];

export const Parallax: { id: number; src: string }[] = [
  { id: 0, src: image },
  { id: 1, src: mountain1 },
  { id: 2, src: mountain2 },
  { id: 3, src: mountain3 },
  { id: 4, src: person },
  { id: 5, src: sky },
];

export const ICON: { id: number; src: string }[] = [
  { id: 1, src: behance },
  { id: 2, src: dribbble },
  { id: 3, src: email },
  { id: 4, src: facebook },
  { id: 5, src: instagram },
  { id: 6, src: youtube },
];

const IMAGES: { id: number; src: string }[] = [
  // { id: 1, src: image1 },
  { id: 1, src: image3 },
  { id: 2, src: image2 },
  { id: 3, src: image3 },
  { id: 4, src: image4 },
  { id: 5, src: image5 },
  { id: 6, src: image6 },
  { id: 7, src: image7 },
  { id: 8, src: image8 },
  { id: 9, src: image9 },
  { id: 10, src: image10 },
  { id: 11, src: image11 },
  { id: 12, src: image12 },
  { id: 13, src: image12 },
  { id: 14, src: image12 },
  { id: 15, src: image12 },
  { id: 16, src: image12 },
  { id: 17, src: image12 },
  { id: 18, src: image12 },
  { id: 19, src: image12 },
  { id: 20, src: image12 },
];

export const logo: string = logoSrc;
export const avatar: string = avatarSrc;

export default IMAGES;
