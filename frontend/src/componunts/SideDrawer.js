import "./SideDrawer.css";
import {Link} from 'react-router-dom';

const SideDrawer=({show,click})=> {
  const sidedrawerclass=['sidedrawer']
  if(show){
    sidedrawerclass.push("show");
  }
  return (
    <div className={sidedrawerclass.join(" ")}>
      <ul className="sidedrower_Link" onClick={click}>
        <li>
          <Link to="/cart">
          <i className="fas fa-shopping-cart"></i>
          <span>
            card<span className="sidedrowe__cartbadge">0</span>
          </span>
          </Link>
        </li>
        <li>
          <Link to="/">shop</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;

