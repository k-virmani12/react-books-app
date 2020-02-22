import React from 'react';
import Nav from './navbar';
import BookList from './booklist';
import ThemeContextProvider from "./context/context-provider"

function App() {
	return (
		<div className="App">
			<ThemeContextProvider>
				<Nav />
				<BookList />
			</ThemeContextProvider>
		</div>
		);
}

export default App;
