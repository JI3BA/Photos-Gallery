import {FC, MouseEvent} from "react";
import s from '../../styles/Filter.module.css'

const Filter: FC = () => {

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }

    return(
        <>
            <form className={s.form}>
                <input type="text" className={s.form__input}/>
                <button onClick={onClickHandler} className={s.form__button}>filter</button>
            </form>
        </>
    )
}

export default Filter