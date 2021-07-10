import React from 'react'
import AppLayout from './components/Layout'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { history, RoutesEnum } from './lib/routes'
import TicketsList from './pages/TicketsList'
import EventsList from './pages/EventsList'
import Home from './pages/Home'

function App() {
	return (
		<Router history={history}>
			<AppLayout>
				<Switch>
					<Route path={RoutesEnum.Home} component={Home} exact />
					<Route path={RoutesEnum.TicketsList} component={TicketsList} />
					<Route path={RoutesEnum.EventsList} component={EventsList} />
				</Switch>
			</AppLayout>
		</Router>
	)
}

export default App
