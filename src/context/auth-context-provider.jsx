import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
	state = {
		isAuthenticated : true
	}
	changeAuth = () => {
		this.setState ({ isAuthenticated : !this.state.isAuthenticated });	
	}
	render () {
		return (
			<AuthContext.Provider value = {{ ...this.state, changeAuth: this.changeAuth() }}>
				{this.props.children}
			</AuthContext.Provider>
		)
	}	
}

export default AuthContextProvider;
