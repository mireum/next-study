// localhost:3000/movies/123123 으로 접근
// localhost:3000/movies/123123?region=kr&page=2 도 가능

import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";

// async function getMovie(id) {
  
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// async function getVideos(id) {

//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }
 
export default async function MovieDetail({params: {id}}) {
  // 백엔드에서 실행됨(vs code terminal)
  // console.log(props);

  // Promise.all로 병렬 실행(NEXT가 아니라 REACT의 방식)
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  

  return (
    <div>
      {/* 컴포넌트를 가져오는 동안 화면에 Loading movie가 보여짐 */}
      {/* 병렬적으로 fetch하면서 각각의 Loading을 보여줄 수 있음 */}
      {/* Suspense가 컴포넌트를 await해줌 */}
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id}/>
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id}/>
      </Suspense>
    </div>
  );
}