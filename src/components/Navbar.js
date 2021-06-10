import logo from '../components/images/favicon.png'
import Menu1 from './Menu';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
            <ul>
            <li><a href="/"><img src={logo} alt="" style={{width: '35px'}}/>yxelGroup</a></li>
            </ul>
        </nav>
        <Menu1/> 
        </div>
    )
}

export default Navbar
