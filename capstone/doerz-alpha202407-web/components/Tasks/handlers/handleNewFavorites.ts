import { Favorite } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export const handleNewFavorites = async (username: string, taskId: string, taskIdName: string,handleToggleFavoriteNew: ()=>void) => {
  try {
    // Define the new favorite entry
    const newFavorite: Favorite = {
      username,
      idFavorites: uuidv4(),
      dateModified: Math.floor(Date.now() / 1000),
      favoritesTaskId: [taskId],
      favoritesTaskIdName: [taskIdName],
    };

    // Send POST request to add the new favorite
    const responsePostFavorites = await fetch(`/api/favorites/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFavorite),
    });

    if (responsePostFavorites.ok) {
      console.log(`Favorite added for taskId: ${taskId}`);
      console.log(`Favorite added for taskIdName: ${taskIdName}`);
      handleToggleFavoriteNew();
    } else {
      console.log(`Failed to add favorite for taskId: ${taskId}`);
      console.log(`Failed to add favorite for taskIdName: ${taskIdName}`);
    }
  } catch (error) {
    console.error(`Error adding favorite for taskIdName: ${taskIdName}`, error);
  }
};
