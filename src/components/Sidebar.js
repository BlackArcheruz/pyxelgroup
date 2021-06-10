import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'
import {Link, withRouter } from 'react-router-dom'

const Sidebar = () => {
    return (
        <Menu>
        <Link className="menu-item" to="/">
        Home
        </Link>
        <Link className="menu-item" to="/services">
        Services
        </Link>
        <Link className="menu-item" to="/contact">
        Contact
        </Link>
      </Menu>
    )
}

export default withRouter(Sidebar)
