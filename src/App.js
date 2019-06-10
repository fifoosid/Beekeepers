import React, { Component } from 'react';
import Home from './Home';
import './App.css';
import "@ui5/webcomponents/dist/ShellBar";
import "@ui5/webcomponents/dist/ShellBarItem";
import "@ui5/webcomponents/dist/Popover";
import "@ui5/webcomponents/dist/Icon";
import "@ui5/webcomponents/dist/Input";
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
import "@ui5/webcomponents/dist/Label";

import logo from './assets/images/CompanyLogo.png';
import profileImage from './assets/images/Avatar_4.png';

import { Route } from "react-router-dom";
import TeicoPage from './TeicoPage';


class App extends Component {
	constructor() {
		super();

		const today = new Date();
		const displayDate = `${new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(today)}, ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(today)} ${today.getDate()}, ${today.getFullYear()}`

		this.state = {
			displayDate
		}
	}

	render() {
		return (
			<div>
				<ui5-shellbar
					primary-title='Drone Hive'
					secondary-title={this.state.displayDate}
					logo={logo}
					profile={profileImage}
					show-product-switch
				>
					<ui5-input data-ui5-slot="searchField"></ui5-input>

					<ui5-shellbar-item data-ui5-slot="items" id="connect" src="sap-icon://paper-plane" text="Connect"></ui5-shellbar-item>
					<ui5-shellbar-item data-ui5-slot="items" id="notifications" src="sap-icon://bell" text="Notifications"></ui5-shellbar-item>
				</ui5-shellbar>


				<Route exact path="/" component={Home}></Route>
				<Route exact path="/teico" component={TeicoPage}></Route>
			</div>
		);
	}
}

export default App;
