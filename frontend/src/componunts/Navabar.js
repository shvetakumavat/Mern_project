
import './Navabar.css';
import { Link } from 'react-router-dom';
const Navbar = ({click}) => {
    return (
        <nav className="navbar">
            {/** <h1>fflfgklfgkl</h1> */}
            <div className="navbar__log">
                <h2>
                    Waghur
                </h2>
            </div>


            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className='cart__Link'>

                        <i className="fas fa-shopping-cart"></i>
                        <span>cart</span>

                        <span className="cartlogo__badge">0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>

            </ul>
            <div className='HBicon' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}
export default Navbar;