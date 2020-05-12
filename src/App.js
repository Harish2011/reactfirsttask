import React, { Component } from 'react';
import Login from './components/login/Login';
import Uploaddoc from './components/login/uploaddoc';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Uploaddoc/>
			</div>
		);
	}
}

export default App;
