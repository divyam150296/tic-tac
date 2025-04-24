import { NavLink } from "react-router-dom";
import classes from './Navigator.module.css'

export default function NavigatorSection () {
    return (
        <div className={classes.link}>
            <NavLink to='/game' className={({isActive}) => isActive ? classes.active : undefined}>Tic Toc</NavLink>
            <NavLink to='/game/timerGame' className={({isActive}) => isActive ? classes.active : undefined}> Timer Page</NavLink>
        </div>
    )
}