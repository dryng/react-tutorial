import { useContext } from "react";
import FavoriteContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoriteContext = useContext(FavoriteContext);
  let content;

  if (favoriteContext.totalFavorites === 0) {
    content = <p>There are no favorites. Add some!</p>;
  } else {
    content = <MeetupList meetups={favoriteContext.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
