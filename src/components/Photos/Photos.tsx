import type {Photo} from "@/models/PhotoType";
import s from './Photos.module.css'
import {FC} from "react";

type PhotoType = {
    photos: Photo[]
}

const Photos: FC<PhotoType> = ({photos}) => {

    return(
        <div className={s.photos__container}>
            {photos && photos.map((photo: Photo) => <img className={s.image} key={photo.id} src={photo.urls.small} alt={photo.description}/>)}
        </div>
    )
}

export default Photos