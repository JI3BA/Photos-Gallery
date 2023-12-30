import type {Photo} from "@/models/PhotoType";
import {FC} from "react";
import s from '../../styles/Photos.module.css'

type PhotosType = {
    photos: Photo[]
}

const Photos: FC<PhotosType> = (photos) => {
    return(
        <>
            {photos && photos.photos.map((photo: Photo) => <img className={s.image} key={photo.id} src={photo.urls.thumb} alt={photo.description}/>)}
        </>
    )
}

export default Photos