'use client'
import {useFavoriteContext} from "@/hooks/useFavoriteContext";
import type {Photo} from "@/models/PhotoType";
import s from "@/components/Photos/Photos.module.css";

const FavoritePhotos = () => {
    const {favorite, setFavorite} = useFavoriteContext()

    const deleteFavoritePhoto = (id: string) => {
        setFavorite(favorite.filter(ph => ph.id !== id))
    }

    return(
        <>
            <div className={s.photos__container}>
                {favorite && favorite.map((photo: Photo) => {
                    return(
                        <div key={photo.id} className={s.box}>
                            <img className={s.box__image} src={photo.urls.small} alt={photo.description}/>

                            <svg className={s.box__heart} onClick={() => deleteFavoritePhoto(photo.id)} width='48px' height='48px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path className={s.svg__favorite} d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10
                                         19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806
                                         16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016
                                         0.825464 2 4.27416 2 9.1371Z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default FavoritePhotos