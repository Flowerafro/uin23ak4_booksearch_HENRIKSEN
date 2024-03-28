import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Layout({children}) {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="search">Search</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer>Book search LineH</footer>
        </>
    )
}