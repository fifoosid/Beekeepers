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
				>
					<ui5-input data-ui5-slot="searchField"></ui5-input>

					<ui5-shellbar-item data-ui5-slot="items" id="connect" src="sap-icon://paper-plane" text="Connect"></ui5-shellbar-item>
					<ui5-shellbar-item data-ui5-slot="items" id="notifications" src="sap-icon://bell" text="Notifications"></ui5-shellbar-item>
				</ui5-shellbar>
				<ui5-tabcontainer
					fixed="false"
				>
					<ui5-tab text="Home">
						<Home></Home>
					</ui5-tab>
					<ui5-tab text="Team Distribution">
						<ui5-label>Quibusdam, veniam! Architecto debitis iusto ad et, asperiores quisquam perferendis reprehenderit ipsa voluptate minus minima, perspiciatis cum. Totam harum necessitatibus numquam voluptatum.</ui5-label>
					</ui5-tab>
					<ui5-tab text="Drone Maintanance">
						<ui5-label>Quibusdam, veniam! Architecto debitis iusto ad et, asperiores quisquam perferendis reprehenderit ipsa voluptate minus minima, perspiciatis cum. Totam harum necessitatibus numquam voluptatum.</ui5-label>
					</ui5-tab>
					<ui5-tab text="Drone Development">
						<ui5-label>Quibusdam, veniam! Architecto debitis iusto ad et, asperiores quisquam perferendis reprehenderit ipsa voluptate minus minima, perspiciatis cum. Totam harum necessitatibus numquam voluptatum.</ui5-label>
					</ui5-tab>
				</ui5-tabcontainer>
			</div>
		);
	}
}

export default App;
