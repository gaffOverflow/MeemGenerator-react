import React, { useState, useEffect } from "react";
import "../index.css";

export default function Form() {
  // Locate State to Store our default Object of properties
  const [Meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // allMeme State created to handle our Memes Api Fetch
  const [allMeme, setAllMeme] = useState([]);

  // Fetching Memes Api with useEffect
  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`).then(
      (res) => res.json().then((data) => setAllMeme(data.data.memes)),
      []
    );
  });

  //
  function HandleEvent() {
    const Random = Math.floor(Math.random() * allMeme.length + 1);
    const MemeImg = allMeme[Random].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: (prevMeme.randomImage = MemeImg),
      };
    });
  }

  // Text input onChange event Handler

  function TextChangeHandler(event){
const {name, value} = event.target
setMeme(prevMeme => ({
  ...prevMeme,
  [name]: value
}))
  }

  return (
    <div className="flex flex-col gap-4 p-28">
      <div className="flex gap-4">
        {/* Top text input */}
        <input
          type="text"
          name="topText"
          onChange={TextChangeHandler}
          value={Meme.topText}
          placeholder="Top Text"
          className="w-1/2 rounded-md border-2 px-3 py-2"
        />

        {/* Bottom Text input */}
        <input
          type="text"
          name="bottomText"
          onChange={TextChangeHandler}
          value={Meme.bottomText}
          placeholder="Bottom Text"
          className="w-1/2 rounded-md border-2 px-3 py-2"
        />
      </div>

      {/* button */}

      <button
        onClick={HandleEvent}
        className=" h-10 rounded-md bg-gradient-to-r from-[#711F8D] to-[#A818DA] text-lg font-semibold text-white"
      >
        Get a new meme image 🖼
      </button>

      {/* Random Images */}
      <div className="relative">
        <h1 className="absolute left-1/2 top-5 -translate-x-1/2 text-5xl font-extrabold text-[#a818da]">
          {Meme.topText}
        </h1>
        <h1 className="absolute bottom-5 left-1/2 -translate-x-1/2 text-5xl font-extrabold text-[#a818da]">
          {Meme.bottomText}
        </h1>
        <img
          src={Meme.randomImage}
          alt="Meme Images"
          className="object-cover w-full"
        />
      </div>
    </div>
  );
}
