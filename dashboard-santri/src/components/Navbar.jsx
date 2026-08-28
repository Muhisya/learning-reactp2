import { NavLink } from "react-router"

export default function Navbar() {
    const getLinkClass = ({ isActive }) => {
        return isActive ? "nav-link active" : "nav-link"
    }

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <h1 className="logo">
                    Dashboard Santri
                </h1>

                <div className="nav-menu">
                    <NavLink
                        to="/"
                        end
                        className={getLinkClass}
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/santri"
                        className={getLinkClass}
                    >
                        Santri
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={getLinkClass}
                    >
                        Tentang
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}