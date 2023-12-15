import { AnimeCard } from "./components/AnimeCard";
import { Header } from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  const [animeName, setAnimeName] = useState("Naruto");
  const [animeDetails, setAnimeDetails] = useState([]);

  const getAnime = async (anime) => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}&sfw`);
      const json = await res.json();
      setAnimeDetails(json.data);
    } catch (error) {
      console.error("Erro ao buscar dados dos animes", error);
    }
  };

  useEffect(() => {
    getAnime(animeName);
  }, [animeName]);

  const handleSearch = (name) => {
    setAnimeName(name);
  };

  return (
    <div className="w-screen h-screen ">
      <Header onSearch={handleSearch} />
      <div className="container p-5 mx-auto">
        <div className="grid md:grid-cols-3 xl:grid-cols-5 grid-cols-1 gap-3 ">
          {animeDetails?.map((item) => (
            <AnimeCard animeData={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
