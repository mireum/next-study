import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <h1>home</h1>
    </div>
  );
}
