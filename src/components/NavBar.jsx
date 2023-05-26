import React from "react"
import "../index.css"
import MeemLogo from "../assets/Logo.png"

export default function NavBar (){
  return (
    <nav className="bg-gradient-to-r from-[#672280] to-[#A626D3] flex items-center justify-between h-16 px-10 sm:px-20 md:px-24">
      <img src={MeemLogo} alt="Meem Logo" className="" />
      <div className="text-white">React Course - Project 3</div>
    </nav>
  );
}