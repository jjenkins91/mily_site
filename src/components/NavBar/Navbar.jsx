import "./Navbar.css";
function Navbar(){
    return(
        <>
        <nav className="navbar-links">
            <a className="nav-link" href="/">INICIO</a>
            <span className="link-span">|</span>
            <a className="nav-link" href="/">NOSOTROS</a>
            <span className="link-span">|</span>
            <a className="nav-link" href="/">SERVICIOS</a>
            <span className="link-span">|</span>
            <a className="nav-link" href="/">ESPECIALIDADES</a>
        </nav>
        </>
    );   
}
export default Navbar;