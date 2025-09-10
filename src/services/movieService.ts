const myKey = import.meta.env.VITE_TMDB_TOKEN;
import type { Movie } from "../types/movie";
import axios from "axios";

interface fetchMoviesResponse {
  results: Movie[];
  page: number;
}

export default async function fetchMovies(
  queryValue: string
): Promise<fetchMoviesResponse> {
  const response = await axios.get<fetchMoviesResponse>(
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
    {
      params: {
        query: queryValue,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${myKey}`,
      },
    }
  );
  return response.data;
}