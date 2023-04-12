function Navbar() {
    return (
        <nav className="bg-theme flex fixed w-screen mt-6">
            <div className="flex-1 flex justify-center mr-auto">
                <a href="/" className="mx-2">Samuel Catania</a>
            </div>
            <div className="flex-1 flex justify-center ml-auto">
                <a href="/home" className="mx-2">Home</a>
            </div>
        </nav>
    )
}

export default Navbar;
