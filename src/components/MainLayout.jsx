import { Outlet } from 'react-router-dom'
import Navigator from './Navigator.jsx'

export default function MainLayout () {
    return (
        <>
            <Navigator />
            <Outlet />
        </>
    ) 
}