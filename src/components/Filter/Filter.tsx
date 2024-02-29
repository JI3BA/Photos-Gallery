import {FC, MouseEvent} from "react";
import s from './Filter.module.css'
import Button from "@/components/Button/Button";

const Filter: FC = () => {
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