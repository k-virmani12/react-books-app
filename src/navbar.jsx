import React, { Component } from 'react';
import { ThemeContext } from './context/context-provider';

class Nav extends Component {
	static contextType = ThemeContext;
	render () {
		const { isLightTheme, light, dark } = this.context;
		const theme = isLightTheme ? light : dark;
		return (
		<nav style = {{ background : theme.bg , color : theme.syntax }}>
			<h1>Book App</h1>
			<ul className = "nav-items">
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
		)
	}
}

export default Nav;
