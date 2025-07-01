import Logo from "./Logo"

const Nav = () => {
    return(
        <nav className="navbar">
            <Logo/>
            <h1>Fake Or Real?</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/demo">Product Demo</a>
                <a href="sdfsdf">Source Code</a>
            </div>
        </nav>
    )
   
}
export default Nav