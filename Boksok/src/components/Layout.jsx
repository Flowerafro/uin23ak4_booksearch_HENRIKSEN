import { Link } from "react-router-dom";

export default function Layout({children}) {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/"> James Bond book list</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
        </>
    )
}