
export default function Layout({children}) {
    return (
        <>
        <header>
            <h1>OpenLibary Booksearch</h1>
            <p>Find your next read here</p>
            </header>
        <main>
            {children}
        </main>
        </>
    )
}