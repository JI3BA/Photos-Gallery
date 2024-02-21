import {FC, ReactNode, MouseEventHandler} from "react";
import s from './Button.module.css'

type ButtonType = {
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement>,
    className?: string
}

const Button: FC<ButtonType> = ({children, onClick, className}) => {
    return(
        <button className={className ? `${className} ${s.button}` : s.button} onClick={onClick}>{children}</button>
    )
}

export default Button