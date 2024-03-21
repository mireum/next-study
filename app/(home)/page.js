import Link from "next/link";
import { resolve } from "styled-jsx/css";

// client component에선 metadata 사용 불가능
export const metadata = {
  // layout의 metadata에 덮여서 안 나옴
  title: "Home"
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  console.log("fetching");
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

// async await 해줌
export default async function homePage() {
  const movies = await getMovies();

  return (
    <div>
      <h1>home!</h1>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div> 
  )
}