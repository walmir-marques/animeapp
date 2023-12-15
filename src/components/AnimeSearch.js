import React from "react";
import { useState } from "react";

export const AnimeSearch = ({ onSearch }) => {
  const [animeName, setAnimeName] = useState("");

  const handleInputChange = (event) => {
    const newName = event.target.value;
    setAnimeName(newName);

    // Chame a função onSearch passando o nome do anime sempre que o input for alterado
    onSearch(newName);
  };

  return (
    <div>
      <input
        type="text"
        id="Animeinput"
        name="animeInput"
        className="mt-1 p-2 border rounded-md w-64 border-red-400"
        placeholder="Digite o nome do anime ... "
        value={animeName}
        onChange={handleInputChange}
      />
    </div>
  );
};
