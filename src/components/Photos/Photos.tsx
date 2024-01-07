import type {Photo} from "@/models/PhotoType";
import s from '../../styles/Photos.module.css'

const Photos = (photos) => {
    return(
        <>
            {photos.length && photos.map((photo: Photo) => <img className={s.image} key={photo.id} src={photo.urls.thumb} alt={photo.description}/>)}
        </>
    )
}

export default Photos