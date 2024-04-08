import Link from "next/link";
import s from "./Favorites.module.css"
import FavoritePhotos from "@/components/FavoritePhotos/FavoritePhotos";


export default function Favorites(){
    return(
        <div className={s.favorites}>
            <div className='wrapper'>
                <Link className={`link ${s.favorites__link}`} href='/'>Main</Link>
                <FavoritePhotos />
            </div>
        </div>
    )
}
