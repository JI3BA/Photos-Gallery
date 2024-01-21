import {FC, ReactNode, MouseEventHandler} from "react";
import s from './Button.module.css'

type ButtonType = {
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonType> = ({children, onClick}) => {
    return(
        <button className={s.button} onClick={onClick}>{children}</button>
    )
}

export default Button