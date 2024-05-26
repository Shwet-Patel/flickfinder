import { FaFacebookF , FaInstagram , FaGithub , FaYoutube , FaTwitter , FaLinkedinIn } from "react-icons/fa";
import Fetchdata from "./components/Fetchdata";

export const navlinks = [
    { id: 1 , text: "HOME" , href:"/"},
    { id: 2 , text: "ABOUT US" , href:"/about"},
];

export const randomImageurls = [
    { id: 1 , url:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/7CENyUim29IEsaJhUxIGymCRvPu.jpg"},
    { id: 2 , url:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/2ssWTSVklAEc98frZUQhgtGHx7s.jpg"},
    { id: 3 , url:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/zCjZfevPFBbOh2SAx2syIBHSqEI.jpg"},
    { id: 4 , url:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/dqK9Hag1054tghRQSqLSfrkvQnA.jpg"},
];


export const footerlinks = [
    {id:1 , text:"Terms of use" , href:""},
    {id:2 , text:"Privacy policy" , href:""},
    {id:3 , text:"About us" , href:""},
    {id:4 , text:"FAQs" , href:""},
];

export const social = [
    {id:1 , icon:<FaFacebookF className=" size-6  duration-300 text-gray-900"/> , href:""},
    {id:2 , icon:<FaInstagram className="  size-6 duration-300 text-gray-900"/> , href:""},
    {id:3 , icon:<FaTwitter  className=" size-6  duration-300 text-gray-900"/> , href:""},
    {id:4 , icon:<FaLinkedinIn   className=" size-6 duration-300 text-gray-900"/> , href:""},
    {id:5 , icon:<FaYoutube className=" size-6 duration-300 text-gray-900"/> , href:""},
    {id:6 , icon:<FaGithub className=" size-6  duration-300 text-gray-900"/> , href:""},
];