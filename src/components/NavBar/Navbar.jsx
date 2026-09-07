import "./Navbar.css";

function Navbar() {
    return (
        <>
            <nav className="navbar-links">
                <a className="nav-link" href="/">INICIO</a>
                <span className="link-span">|</span>

                <a className="nav-link" href="#nosotros">NOSOTROS</a>
                <span className="link-span">|</span>

                <a className="nav-link" href="#servicios">SERVICIOS</a>
                <span className="link-span">|</span>

                <a className="nav-link" href="#especialidades">ESPECIALIDADES</a>
            </nav>
        </>
    );
}

export default Navbar;