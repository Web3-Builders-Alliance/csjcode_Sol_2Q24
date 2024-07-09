import { handleExistingFavorites } from "./handleExistingFavorites";
import { handleNewFavorites } from "./handleNewFavorites";

export const handleFavorites = async (username: string, taskId: string, taskIdName: string, handleToggleFavoriteNew: ()=>void) => {
  try {
    const responseGetFavorites = await fetch(`/api/favorites/${username}`, {
      method: "GET",
    });

    if (responseGetFavorites.ok) {
      const favoritesData = await responseGetFavorites.json();
      console.log(`Favorite fetched GET for username: ${JSON.stringify(favoritesData)}`);
      console.log(`Favorite exist fetched GET for username: ${username}`);

      // Assuming handleExistingFavorites is a function that handles existing favorites
      handleExistingFavorites(username, taskId, taskIdName, favoritesData, handleToggleFavoriteNew);
    } else {
      console.log(`Failed to fetch favorites for username: ${username}`);
      // Handle new favorite scenario
      await handleNewFavorites(username, taskId, taskIdName,handleToggleFavoriteNew);
    }
  } catch (error) {
    console.log(`Error adding favorite for taskIdName: ${taskIdName}`);
  }
};