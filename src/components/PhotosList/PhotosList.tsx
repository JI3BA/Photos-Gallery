'use client'

import s from './PhotosList.module.css'
import g from '../../app/globals.css'
import {useEffect, useState} from "react";
import Photos from "@/components/Photos/Photos";
import type {Photo} from "@/models/PhotoType";
import Loader from "@/components/Loader/Loader";
import Filter from "@/components/Filter/Filter";
import Button from "@/components/Button/Button";
import type {PaginationType} from "@/models/PaginationType";
import FavoriteContext from "@/context/FavoriteContext/FavoriteContext";

const ACCESS_TOKEN = ''

const PhotosList = () => {
    const [photos, setPhotos] = useState<Photo[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')
    const [page, setPage] = useState<number>(1)

    const [favorite, setFavorite] = useState<Photo[]>([])

    useEffect(() => {
        getPhotos()
    }, [page])


    const getPhotos = async () => {
        const res = await fetch(`https://api.unsplash.com/photos?client_id=${ACCESS_TOKEN}&page=${page}`);

        const data = await res.json();

        if(res.ok){
            setPhotos(data)
            setLoading(false)
        }else{
            setError(data.errors)
            setLoading(false)
        }
    };

    const onClickHandler = (name: PaginationType) => {
        if(name === 'prev') {
            setPage(prev => prev - 1)
        }else{
            setPage(prev => prev + 1)
        }
    }

    return(
        <FavoriteContext.Provider value={favorite}>
            <div className={s.container}>
                <div className={g.wrapper}>
                    <Filter />

                    {loading
                        ?
                        <Loader/>
                        :
                        !!error
                            ?
                            <p className={s.error}>{error}</p>
                            :
                            <>
                                <Photos photos={photos}/>

                                <div className={s.switch}>
                                    <Button className={s.switch__button} onClick={() => onClickHandler('prev')}>prev</Button>
                                    <Button className={s.switch__button} onClick={() => onClickHandler('next')}>next</Button>
                                </div>
                            </>
                    }
                </div>
            </div>
        </FavoriteContext.Provider>
    )
}

export default PhotosList