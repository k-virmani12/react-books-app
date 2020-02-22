import React, { Component } from 'react';
import { ThemeContext } from "./context/context-provider";

class ThemeToggle extends Component {
	static contextType = ThemeContext;
	render () {
		const { handleToggle } = this.context;
		return (
			<button onClick = {handleToggle}>Change Theme</button>
			)
	}
}

export default ThemeToggle;
