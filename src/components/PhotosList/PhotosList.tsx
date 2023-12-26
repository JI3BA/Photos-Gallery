'use client'

import s from '../../styles/PhotosList.module.css'

const ACCESS_TOKEN = ''

const PhotosList = () => {
    const getPhotos = async () => {
        try {
            const res = await fetch(`https://api.unsplash.com/photos?client_id=${ACCESS_TOKEN}&page=1`);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return(
        <>
        </>
    )
}

export default PhotosList