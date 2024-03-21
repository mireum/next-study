"use client"

import Link from "next/link";
import styles from "@/styles/movie.module.css"
import { useRouter } from "next/navigation";


export default function Movie({title, id, poster_path}) {
  // next.router가 아니라 next.navigation에서 import해야함
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`)
  }
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}