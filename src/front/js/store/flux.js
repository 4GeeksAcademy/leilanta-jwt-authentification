const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
				// admin login system 
	adminLogin: (email,password) => {
		console.log('Login desde flux')
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(
				{
					"email":email,
					"password":password
				}
			)
		};
		fetch(process.env.BACKEND_URL + "/api/adminLogin/", requestOptions)
			.then(response => {
				console.log(response.status)
				if(response.status === 200){
					setStore({ auth_admin: true });
				}
				return response.json()
			})
			.then(data => {
				localStorage.setItem("token", data.access_token);
				localStorage.setItem("userType", "admin"); // Indicador de tipo de usuario
				console.log(data)
			});
	},

	adminSignup: (email, password) => {
		const requestOptions = {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(
				{
					"email":email,
					"password":password
				}
			)
		  };
		  
		fetch(process.env.BACKEND_URL + "/api/adminSignup/", requestOptions)
			.then(response => {
				if(response.status == 200){
					setStore({ auth_admin: true });
				}
				return response.text()
			})
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	},
	adminLogout: () => {
		setStore({ auth_admin: false });
		localStorage.removeItem("token");				
	},

			}
		}
	};

export default getState;
