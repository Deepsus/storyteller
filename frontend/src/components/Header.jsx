function Header() {
    return (
        <header className="flex justify-center items-center bg-gray-500 h-16">
            {/* Left Section */}
            <div className="flex-1 flex justify-center gap-5">
                {/* Logo */}
                <h1>StoryTeller</h1>
                <p>Browse</p>
            </div>

            {/* Right section */}
            <div className="flex-1 flex justify-center gap-3">
                <p>Search</p>
                <p>Signin</p>
            </div>
        </header>
    );
}
export default Header;
