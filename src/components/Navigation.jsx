import { NavLink, Link } from "react-router-dom";
import fortifyLogo from '../imgs/fortify_header.svg';
import navigationData from '../data/Navigation.json';


function Navigation() {
    return (
        <header className="head">
            <nav className="nav">
                <NavLink to={'/'} className='nav_main'>
                    <img src={fortifyLogo} alt="Fortify logo" />
                    <div>Fortify</div>
                </NavLink>
                <ul className="nav_list">
                    {navigationData.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className="nav_link" to={item.link}>{ item.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;