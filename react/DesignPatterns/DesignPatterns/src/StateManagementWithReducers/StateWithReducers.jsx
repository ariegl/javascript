import React, {useReducer} from 'react'

const initState = {
	loggedIn: false,
	user: null,
	token: null
}

function authReducer(state, action) {

	switch(action.type) {
		case "login": 
			console.log("LOGIN");
			return({
				loggedIn: true,
				user: action.payload.user,
				token: action.payload.token
			});
			break;
		case "logout":
			console.log("LOGOUT");
			return (initState);
			break;
	}

}


function StateWithReducers() {

  const [state, dispatch] = useReducer(authReducer, initState);

	const login = () => {
		dispatch({
			type: "login",
			payload: {
				user: {name: "Ariel F. García"},
				token: "token"
			}
		});
	}

	const logout = () => {
		dispatch({
			type: "logout",
		});
	}


  return (
    <div style={{background: "red"}}>
			StateWithReducers
			{state.loggedIn ? (
				<div>
					<h1>Aloh {state?.user?.name}</h1>	
					<button onClick={logout}>Logout</button>
				</div>
			) : (
				<form onSubmit={login}>
					<input type="text" name="username" autoComplete='username'></input>
					<input type="password" name="password" autoComplete='new-password'></input>
					<input type="submit"></input>
				</form>
			)}

		</div>
  )
}

export default StateWithReducers