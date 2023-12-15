export const AnimeCard = ({ animeData }) => {
  return (
    <div className="w-[230px] h-[450px] my-auto mx-auto">
      <img
        src={animeData.images.jpg.image_url}
        alt={animeData.title}
        className="h-[285px]"
      />
      <h1 className="text-xl text-center">{animeData.title}</h1>
    </div>
  );
};
