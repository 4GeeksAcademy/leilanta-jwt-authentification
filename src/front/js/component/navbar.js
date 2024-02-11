import React, { useContext } from "react";
import { Link, useLocation} from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate(); 
    // const location = useLocation();


    function handleLogout() {
        actions.adminLogout();
        navigate('/');
    }

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/adminLogin">
						<button className="btn btn-primary">Log in</button>
					</Link>
					<Link to="/adminSignup">
						<button className="btn btn-primary">Sign up</button>
					</Link>
				</div>
				<button className="btn btn-primary" onClick={handleLogout} >Cerrar Sesión</button>
			</div>
		</nav>
	);
};
