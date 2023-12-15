import React from "react";
import { AnimeSearch } from "./AnimeSearch";

export const Header = ({ onSearch }) => {
  return (
    <header className="bg-black  flex flex-col md:flex-row items-center md:justify-between p-5">
      <img className="h-[140px]" src="/assets/animeguide3.png" alt="App logo" />
      <img className="h-[120px]" src="/assets/name.png" alt="App logo" />
      <AnimeSearch onSearch={onSearch} />
    </header>
  );
};
