import { FetchOptions } from "@/app/api/types";

export async function fetchWithRetry(url:string, options:FetchOptions, retries = 3, backoff = 300) {
  let lastError = null;

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return response; // Success
    } catch (error) {
      lastError = error;
      // Wait for a bit before retrying (simple exponential backoff could be implemented here)
      await new Promise((resolve) => setTimeout(resolve, backoff * (i + 1)));
    }
  }

  // If all retries failed, throw the last error
  throw lastError;
}
