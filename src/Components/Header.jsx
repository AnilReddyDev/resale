import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div className="w-full font-mono h-20 px-10 flex items-center justify-between gap-10 text-xl  text-white bg-black">
            <Link to="/">Home</Link>
            <div className="flex gap-10">
            <Link to="/Post">Post</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            </div>
        </div>
    )
}
