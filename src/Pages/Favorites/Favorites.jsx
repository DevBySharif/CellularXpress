import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favoritesItems = JSON.parse(localStorage.getItem("favorites"));

    if (favoritesItems) {
      setFavorites(favoritesItems);

      const total = favoritesItems.reduce(
        (prePrice, curPrice) => prePrice + curPrice.price,
        0
      );
      setTotalPrice(total);
    } else {
      setNotFound("No Data Found");
    }
  }, []);
  const handleRemove = () => {
    localStorage.clear();
    setFavorites([]);
    setNotFound("No Data Found");
  };
  return (
    <div>
      {notFound ? (
        <p>{notFound}</p>
      ) : (
        <div>
          {favorites.length > 0 && (
            <div className="text-center my-4 space-y-3">
              <button
                onClick={handleRemove}
                className="px-5 bg-green-400 block mx-auto rounded-md"
              >
                Delete all favorites
              </button>
              <h1>Total Price : ${totalPrice}</h1>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 justify-center items-center">
            {isShow
              ? favorites.map((phone) => (
                  <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                ))
              : favorites
                  .slice(0, 3)
                  .map((phone) => (
                    <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                  ))}
          </div>
          {favorites.length > 3 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="px-5 my-5 bg-green-400 block mx-auto rounded-md"
            >
              {isShow ? "See less" : "See more"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
