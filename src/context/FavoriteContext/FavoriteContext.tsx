'use client'

import {createContext, useState} from "react";
import {Photo} from "@/models/PhotoType";

type FavoriteContextType = {
    favorite: Photo[];
    setFavorite: (value: Photo[]) => void;
};

const FavoriteContext = createContext<FavoriteContextType>({
    favorite: [],
    setFavorite: () => {}
});

export default function FavoriteContextProvider({children}){
    const [favorite, setFavorite] = useState<Photo[]>([])

    return(
        <FavoriteContext.Provider value={{favorite, setFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}