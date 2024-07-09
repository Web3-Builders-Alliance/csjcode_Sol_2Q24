export const handleExistingFavorites = async (username: string, taskId: string, taskIdName: string, favoritesData: any,handleToggleFavoriteNew: ()=>void) => {
  try {
    // Find the existing favorite entry for the user
    const favoriteEntry = favoritesData.find((fav: any) => fav.username === username);

    if (favoriteEntry) {

        // Check if the taskId exists in the favoritesTaskId array
        if (favoriteEntry.favoritesTaskId.includes(taskId)) {
          // Remove the taskId and taskIdName if they exist
          favoriteEntry.favoritesTaskId = favoriteEntry.favoritesTaskId.filter((id: string) => id !== taskId);
          favoriteEntry.favoritesTaskIdName = favoriteEntry.favoritesTaskIdName.filter((name: string) => name !== taskIdName);
        } else {
          // Add the taskId and taskIdName if they do not exist
          favoriteEntry.favoritesTaskId.push(taskId);
          favoriteEntry.favoritesTaskIdName.push(taskIdName);
        }

      // Update the dateModified field
      favoriteEntry.dateModified = Math.floor(Date.now() / 1000); // current Unix timestamp in seconds

      console.log(JSON.stringify(favoriteEntry), "favoriteEntry");
      console.log(`/api/favorites/${favoriteEntry.id}`);


      // Send PUT request to update the entry on the server
      const responsePutFavorites = await fetch(`/api/favorites/${favoriteEntry.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(favoriteEntry),
      });

      if (responsePutFavorites.ok) {
        console.log(`Favorite updated for taskId: ${taskId}`);
        console.log(`Favorite updated for taskIdName: ${taskIdName}`);
        handleToggleFavoriteNew();
      } else {
        console.log(`Failed to update favorite for taskId: ${taskId}`);
        console.log(`Failed to update favorite for taskIdName: ${taskIdName}`);
      }
    } else {
      console.log(`No existing favorite entry found for username: ${username}`);
    }
  } catch (error) {
    console.error(`Error updating favorite for taskIdName: ${taskIdName}`, error);
  }
};
