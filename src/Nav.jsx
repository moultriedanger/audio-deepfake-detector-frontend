import Logo from "./Logo"

const Nav = () => {
    return(
        <nav className="navbar">
            <Logo/>
            <h1>Fake Or Real?</h1>
            <div className="links">
                <a href="/">Product Demo</a>
                <a href="https://github.com/moultriedanger/Audio-Deepfake-Detector-Overview">Source Code</a>
            </div>
        </nav>
    )
   
}
export default Nav