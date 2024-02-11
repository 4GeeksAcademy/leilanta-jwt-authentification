import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
export const Admin = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    return (

     
        <div className="page-container container mt-5 py-5 w-50 mx-auto" style={{ marginBottom: "280px" }}>
            <h1 className="page-title mb-3">Aquí está el oso</h1>
            {store.auth_admin === true &&
                <>
                <img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-490.gif"/>
                </>
            }
        </div>
    );
};