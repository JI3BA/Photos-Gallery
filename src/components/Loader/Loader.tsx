import s  from '../../styles/Loader.module.css'

const Loader = () => {
    return(
        <div className={s.loader}>
            <div className={s.loader_inner}></div>
        </div>
    )
}

export default Loader