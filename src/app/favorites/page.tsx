import Link from "next/link";
import s from "./Favorites.module.css"
import FavoritePhotos from "@/components/FavoritePhotos/FavoritePhotos";


export default function Favorites(){
    return(
        <div className={s.favorites}>
            <div className='wrapper'>
                <div className={s.link__wrapper}>
                    <Link className={`link ${s.link__name}`} href='/'>Main</Link>
                </div>

                <FavoritePhotos />
            </div>
        </div>
    )
}
