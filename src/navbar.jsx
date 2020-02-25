import React, { Component } from 'react';
import { ThemeContext} from './context/context-provider';

class Nav extends Component {
	render () {
		return (
				<ThemeContext.Consumer>{ (themeContext) => {
					const { isLightTheme, light, dark } = themeContext;
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
					) }
					}
				</ThemeContext.Consumer>
				)}
}

export default Nav;
