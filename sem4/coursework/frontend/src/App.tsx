import React from 'react'
import AppLayout from './components/Layout'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { history, RoutesEnum } from './lib/routes'
import TicketsList from './pages/TicketsList'

function App() {
	return (
		<Router history={history}>
			<Redirect from="/" to={RoutesEnum.TicketsList} />
			<AppLayout>
				<Switch>
					<Route path={RoutesEnum.TicketsList} component={TicketsList} />
				</Switch>
			</AppLayout>
		</Router>
	)
}

export default App
