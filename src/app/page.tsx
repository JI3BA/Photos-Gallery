import styles from './page.module.css'
import PhotosList from "@/components/PhotosList/PhotosList";
import {useContext} from "react";
import FavoriteContext from "@/context/context";

export default function Home() {
  const favorite = useContext(FavoriteContext)

  return (
      <main className={styles.main}>
          <PhotosList />
      </main>
  )
}
