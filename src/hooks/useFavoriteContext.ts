import {useContext} from "react";
import {FavoriteContext} from "@/context/FavoriteContext/FavoriteContext";

export function useFavoriteContext(){
    const context = useContext(FavoriteContext)

    if (!context){
        throw new Error('context not found')
    }
    return context
}