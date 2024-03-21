import { API_URL } from "@/app/(home)/page";

async function getVideos(id) {

  await new Promise((resolve) => setTimeout(resolve, 3000));
  // 에러 처리 하기위해 잠시 주석처리
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
  // throw new Error('something broke');
}

export default async function MovieVideos({id}) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>
}