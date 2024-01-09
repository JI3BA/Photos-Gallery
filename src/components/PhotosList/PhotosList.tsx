'use client'

import s from '../../styles/PhotosList.module.css'
import g from '../../app/globals.css'
import {useEffect, useState} from "react";
import Photos from "@/components/Photos/Photos";
import type {Photo} from "@/models/PhotoType";
import Loader from "@/components/Loader/Loader";
import Filter from "@/components/Filter/Filter";

const ACCESS_TOKEN = ''

const PhotosList = () => {
    const [photos, setPhotos] = useState<Photo[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        getPhotos()
    }, [])

    const getPhotos = async () => {
        const res = await fetch(`https://api.unsplash.com/photos?client_id=${ACCESS_TOKEN}&page=1`);

        const data = await res.json();

        if(res.ok){
            setPhotos(data)
            setLoading(false)
        }else{
            setError(data.errors)
            setLoading(false)
        }
    };


    return(
        <div className={s.container}>
            <div className={g.wrapper}>
                <Filter />
                {loading ? <Loader /> : <Photos photos={photos} />}

                {!!error && <span className={s.error}>{error}</span>}
            </div>
        </div>
    )
}

export default PhotosList