import React from 'react';
import Nav from './navbar';
import BookList from './booklist';
import ThemeContextProvider from "./context/context-provider";
import ThemeToggle from "./theme-toggler.jsx";

function App() {
	return (
		<div className="App">
				<ThemeContextProvider>
					<Nav />
					<BookList />
					<ThemeToggle />	
				</ThemeContextProvider>
		</div>
		);
}

export default App;
