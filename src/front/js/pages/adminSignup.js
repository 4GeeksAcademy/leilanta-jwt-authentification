import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Navigate } from "react-router-dom";

export const AdminSignup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function sendData(e) {
        e.preventDefault();
        actions.adminSignup(email, password);
        // Check if signup was successful before navigating
        if (store.auth_admin) {
            return <Navigate to="/Admin" />;
        }
    }

    return (
        <div className="page-container container d-flex justify-content-center align-items-center mt-3 py-5 ">
            <div className="border border-dark rounded-3 p-4 w-75">
            {store.auth_admin ? 
                <Navigate to="/Admin" />
             : (
        
                <form onSubmit={sendData}>
                    <h1 className="page-title mb-3">Crea una cuenta para ver al oso</h1>
                    <div className="mb-3">     
                        <label htmlFor="emailInput" className="form-label">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordInput" className="form-label">Contraseña</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="passwordInput" />
                    </div>
                    <button type="submit" style={{ width: "100%" }} className="btn btn-primary">Crear cuenta</button>
                    <p className="mt-3">¿Ya tienes cuenta? <Link to="/adminLogin">accede aquí</Link></p>
                </form>
            )}
            </div>
        </div>
    );
};