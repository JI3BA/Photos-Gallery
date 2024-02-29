import {FC, MouseEvent, useState} from "react";
import s from './Filter.module.css'
import Button from "@/components/Button/Button";

const Filter: FC = () => {
    const [favorite, setFavorite] = useState<number>(0)

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }

    return(
        <>
            <form className={s.form}>
                <input type="text" className={s.form__input}/>
                <Button onClick={onClickHandler}>Search</Button>
            </form>
        </>
    )
}

export default Filter