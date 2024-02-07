import type {Photo} from "@/models/PhotoType";
import s from './Photos.module.css'
import {FC} from "react";

type PhotoType = {
    photos: Photo[]
}

const Photos: FC<PhotoType> = ({photos}) => {

    return(
        <div className={s.photos__container}>
            {photos && photos.map((photo: Photo) => <div key={photo.id} className={s.box}><img className={s.box__image} src={photo.urls.small} alt={photo.description}/></div>)}
        </div>
    )
}

export default Photos