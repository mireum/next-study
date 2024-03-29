import { API_URL } from "@/app/(home)/page";
import styles from "../styles/movie-videos.module.css"

async function getVideos(id) {

  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // 에러 처리 하기위해 잠시 주석처리
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
  // throw new Error('something broke');
}

export default async function MovieVideos({id}) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map(video => 
        <iframe 
          key={video.id} 
          src={`https://youtube.com/embed/${video.key}`} 
          title={video.name} 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          />)
      }
    </div>
  );
}
