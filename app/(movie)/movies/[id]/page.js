// localhost:3000/movies/123123 으로 접근
// localhost:3000/movies/123123?region=kr&page=2 도 가능
export default function MovieDetail({params: {id}}) {
  // 백엔드에서 실행됨
  // console.log(props);
  return (
    <h1>Movie {id}</h1>
  );
}