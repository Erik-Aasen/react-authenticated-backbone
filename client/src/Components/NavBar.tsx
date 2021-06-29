import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../Pages/Context';
import Axios, { AxiosResponse } from "axios";

export default function NavBar() {
    const ctx = useContext(myContext);

    const logout = () => {
        Axios.get("http://localhost:4000/logout", {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            if (res.data === "logged out") {
                window.location.href = "/"
            }
        })
    }

    let routes;
    if (ctx) {
        routes = (
            <>
                <Link to="/">Home</Link>
                <Link onClick={logout} to="/logout">Logout</Link>
                {ctx.isAdmin ? (<Link to="/admin">Admin</Link>) : ''}
                <Link to="/profile">Profile</Link>
            </>
        )
    } else {
        routes = (
            <>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </>
        )
    }

    return (
        // <div className="NavContainer">
        //     <>
        //         <Link to="/">Home</Link>
        //     </>

        //     {ctx ? (
        //         <>
        //             <Link onClick={logout} to="/logout">Logout</Link>
        //             {ctx.isAdmin ? (<Link to="/admin">Admin</Link>) : ''}
        //             <Link to="/profile">Profile</Link>
        //         </>
        //     ) : (
        //         <>
        //             <Link to="/login">Login</Link>
        //             <Link to="/register">Register</Link>
        //         </>
        //     )}

        // </div>

        <div className="NavContainer">
            {routes}
        </div>
    )
}
