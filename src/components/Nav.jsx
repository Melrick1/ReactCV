import "../assets/css/Nav.css"

const Navigation = () => {
    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="#home" className="nav-link home"><i class="bi bi-house"></i><span>Home</span></a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link about"><i class="bi bi-person"></i><span>About</span></a>
                </li>
                <li className="nav-item">
                    <a href="#resume" className="nav-link resume"><i class="bi bi-file-earmark"></i><span>Resume</span></a>
                </li>
                <li className="nav-item">
                    <a href="#portfolio" className="nav-link portfolio"><i class="bi bi-journal-richtext"></i><span>Portfolio</span></a>
                </li>
                <li className="nav-item">
                    <a href="#services" className="nav-link services"><i class="bi bi-hdd-stack"></i><span>Services</span></a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link contact"><i class="bi bi-envelope"></i><span>Contact</span></a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;