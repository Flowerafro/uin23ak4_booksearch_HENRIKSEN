import { Link } from "react-router-dom";

export default function Layout({children}) {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/"> Welcome to you the OpenLibary API search list</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
        </>
    )
}