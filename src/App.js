import React from 'react';
import './App.css';
import TweenMaxSample from './components/TweenMaxSample';
import TimelineMaxSample from './components/TimelineMaxSample';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<header>
				<nav>
					<Link to='/TweenMaxSample'>TweenMaxSample</Link>
					<Link to='/TimelineMax'>TweenMaxSample</Link>
				</nav>
			</header>
			<div className='App'>
				<Route path='/TweenMaxSample' component={TweenMaxSample} />
				<Route path='/TimelineMax' component={TimelineMaxSample} />
			</div>
		</Router>
	);
}

export default App;
