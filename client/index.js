import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

class App extends Component {
	render() {
		return 'Hello World';
	}
}

ReactDOM.render(
	<Provider>
		<App store={store} />
	</Provider>,
	document.getElementById('app')
);
