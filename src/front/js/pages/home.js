import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
    const navigate = useNavigate(); 
    // const location = useLocation();


    function handleLogout() {
        actions.adminLogout();
        navigate('/');
    }

	return (
		<div className="text-center mt-5">
			<h1>¿Quieres ver al oso?</h1>
			<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWg5YW90dXU4bHFzbXJvY2gwazRjNWlqbXVsdGR3bnBidTE1bmxicyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/mu3Ped3JNZarQu4yTm/giphy.gif"/>
			<div className="ml-auto">
			<Link to="/adminSignup">
						<button className="btn btn-primary">Crea una cuenta</button>
					</Link>
					<p> o </p>
					<Link to="/adminLogin">
						<button className="btn btn-primary">inicia sesión</button>
					</Link>
					
				</div>
		</div>
	);
};
