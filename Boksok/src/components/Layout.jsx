import { Link } from "react-router-dom";

export default function Layout({children}) {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/"> All James Bond Books</Link></li>
                    <li><Link to="search">Search after book here</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <h2>James Bond book list</h2>
            {children}
        </main>
        <footer>Book search LineH</footer>
        </>
    )
}