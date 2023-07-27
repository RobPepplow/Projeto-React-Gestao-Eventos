import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
	return (
		
		<nav className="navbar">
			<h2>
				<Link to={'/'}>Minhas Festas</Link>
			</h2>
			<ul>
				<li>
					<Link to={'/'}>Home</Link>
				</li>
				<li>
					<Link to={'/services'} className="new-btn2">Serviços</Link>
				</li>
				<li>
					<Link to={'/new'} className="new-btn">Incluir Festa</Link>
				</li>					
			</ul>
		</nav>
		
	);
};

export default NavBar;