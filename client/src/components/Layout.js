import { Badge } from 'antd'
import React, { useContext } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import { adminMenu, userMenu } from '../Data/data'
import { logoutfunc } from '../services/Apis'
import "../styles/Layout.css"
import { authContext } from './context/ContextProvider'

const Layout = ({ children }) => {


    const navigate = useNavigate();
    const { user } = useContext(authContext);
    const location = useLocation();

    //logout 
    const handlelogout = async () => {
        const response = await logoutfunc()
        if (response.status === 200) {
            navigate('/login')
        }
    }

    //rendring menu list
    const SidebarMenu = user?.isAdmin ? adminMenu : userMenu
    return (
        <>
            <div className="main">
                <div className="layout">
                    <div className="sidebar">
                        <div className="logo">
                            <h2>DocApp</h2>
                            <hr style={{ color: "black" }} />
                        </div>
                        <div className="menu">
                            {SidebarMenu.map(menu => {
                                const isActive = location.pathname === menu.path
                                return (
                                    <>
                                        <div className={`menu-item ${isActive && 'active'}`}>
                                            <i className={menu.icon}></i>
                                            <NavLink to={menu.path}>{menu.name}</NavLink>
                                        </div>
                                    </>
                                )
                            })}
                            <div className="menu-item " onClick={handlelogout} >
                                <i className="fa-solid fa-right-from-bracket"></i>
                                <NavLink to="/login">Logout</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="header">
                            <div className="header-content" >
                                <Badge onClick={() => {
                                    navigate('/notification')
                                }}
                                    style={{ cursor: "pointer" }}
                                    count={user?.notification.length}>
                                    <i style={{ cursor: "pointer" }} class="fa-solid fa-bell"></i>
                                </Badge>
                                <NavLink className="text-decoration-none m-2" to='/profile'>{user?.name}</NavLink>
                            </div>
                        </div>
                        <div className="body">{children}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout