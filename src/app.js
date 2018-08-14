import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Pages from './pages'
import configureStore from './state/store';

const store = configureStore(window.__INITIAL_STATE__ || {})


class App extends Component {
    render(){
        return(
				<Provider store={store}>
					<BrowserRouter>
						<Pages/>
					</BrowserRouter>
				</Provider>
			)
    }
}

export default App