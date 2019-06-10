import React, { Component } from 'react';
import './Home.css';
import CardMap from './CardMap';
import ImagesCard from './ImagesCard';
import '@ui5/webcomponents/dist/Card';
import "@ui5/webcomponents/dist/CustomListItem";
import '@ui5/webcomponents/dist/DatePicker';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/List';
import "@ui5/webcomponents/dist/ListItem";
import '@ui5/webcomponents/dist/Timeline';
import '@ui5/webcomponents/dist/TimelineItem';
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
import '@ui5/webcomponents/dist/Title';

import Avatar_1 from './assets/images/Avatar_1.png';
import Avatar_2 from './assets/images/Avatar_2.png';
import Avatar_3 from './assets/images/Avatar_3.png';
import Avatar_5 from './assets/images/Avatar_5.png';
import Avatar_6 from './assets/images/Avatar_6.png';
import Avatar_7 from './assets/images/Avatar_7.png';
import Avatar_8 from './assets/images/Avatar_8.png';
import Avatar_9 from './assets/images/Avatar_9.png';
import Avatar_10 from './assets/images/Avatar_10.png';
import Case_1 from './assets/images/Case1.png';
import Case_2 from './assets/images/Case2.png';
import Case_3 from './assets/images/Case3.png';
import chart1 from './assets/images/chart1.svg';
import chart2 from './assets/images/chart2.svg';

class Home extends Component {

    constructor() {
        super();
        const today = new Date();
        const time = `${today.getHours()}:${today.getMinutes()}`;
        this.TeicoCard = React.createRef()

        this.state = {
            time
        }

    }

    componentDidMount() {
        this.TeicoCard.current.addEventListener('headerPress', () => this.props.history.push("/teico"));
    }

    render() {
        const firstMeeting = new Date().setHours(9, 15);
        const secondMeeting = new Date().setHours(10, 0);
        const thirdMeeting = new Date().setHours(12, 0);
        return (
                <ui5-tabcontainer
                fixed="false"
				>
					<ui5-tab text="Home">
                        <div className="flex-container">
                        {/* First line of Cads */}
                        <div className="flex-basis-4">
                            <ui5-card
                            heading="Schedule for today"
                            subtitle={this.state.time}
                            status="3 of 3"
                            >
                                <ui5-timeline>
                                    <ui5-timeline-item title-text="Call Donna Mendez" timestamp={firstMeeting} icon="sap-icon://phone"></ui5-timeline-item>
                                    <ui5-timeline-item title-text="Incidents Status - Online" timestamp={secondMeeting} icon="sap-icon://my-view"></ui5-timeline-item>
                                    <ui5-timeline-item title-text="Site Visit - Peach Valley" timestamp={thirdMeeting} icon="sap-icon://car-rental">
                                        <ui5-label>San Joaquin Valley</ui5-label>
                                    </ui5-timeline-item>
                                </ui5-timeline>
                            </ui5-card>
                        </div>
                        <div className="flex-basis-3 hide-at-830px">
                            <ui5-card
                            heading="Donna Mendez"
                            subtitle="Managing Partner"
                            avatar={Avatar_3}
                            >
                                <div className="card-content">
                                    <ui5-title class="padding-bottom">Lean Pulp Inc.</ui5-title>
                                    <div className="contacts">
                                        <ui5-label>Mobile:</ui5-label>
                                        <ui5-link>+001 6101 34869-0</ui5-link>
                                    </div>
                                    <div className="contacts">
                                        <ui5-label>Phone:</ui5-label>
                                        <ui5-link>+001 4231 5424 0231</ui5-link>
                                    </div><div className="contacts">
                                        <ui5-label>Email:</ui5-label>
                                        <ui5-link>donna@peachvalley.com</ui5-link>
                                    </div>
                                </div>
                            </ui5-card>
                        </div>
                        <div className="flex-basis-7 hide-at-1240px">
                            <CardMap></CardMap>
                        </div>

                        <ui5-title class="flex-basis-full section-header">Incidents</ui5-title>
                        {/* Second line of Cards */}
                        <div className="flex-basis-4">
                            <ui5-card
                            heading="Incidents in the last 24 hours"
                            status="3 of 3"
                            >
                                <ui5-list separators="Inner">
                                    <ui5-li-custom class="custom-list-item-height">
                                        <div className="firms-list">
                                            <div className="firms-list-item negative-border">
                                                <img src={Case_2} className="image" alt="avatar"></img>
                                            </div>
                                            <div className="main-info">
                                                <ui5-title level="H5">Teico Inc.</ui5-title>
                                                <ui5-label>Sun Valley, Idaho</ui5-label>
                                            </div>
                                            <div className="counter red-label">2456</div>
                                        </div>
                                    </ui5-li-custom>
                                    <ui5-li-custom class="custom-list-item-height">
                                        <div className="firms-list">
                                            <div className="firms-list-item warning-border">
                                                <img src={Case_3} className="image" alt="avatar"></img>
                                            </div>
                                            <div className="main-info">
                                                <ui5-title level="H5">Freshhh LTD.</ui5-title>
                                                <ui5-label>Dayville, Oregon</ui5-label>
                                            </div>
                                            <div className="counter orange-label">1263</div>
                                        </div>
                                    </ui5-li-custom>
                                    <ui5-li-custom class="custom-list-item-height">
                                        <div className="firms-list">
                                            <div className="firms-list-item">
                                                <img src={Case_1} className="image" alt="avatar"></img>
                                            </div>
                                            <div className="main-info">
                                                <ui5-title level="H5">Lean Pulp</ui5-title>
                                                <ui5-label>Raymond, California</ui5-label>
                                            </div>
                                            <div className="counter">236</div>
                                        </div>
                                    </ui5-li-custom>
                                </ui5-list>
                            </ui5-card>
                        </div>
                        <div className="flex-basis-4 hide-at-830px">
                            <ui5-card
                            heading="Teico Inc."
                            subtitle="Sudden storm wind damaged 3 polinating hives"
                            avatar={Case_2}
                            ref={this.TeicoCard}
                            >
                                <ui5-list separators="None">
                                    <ui5-li image={Avatar_1} type="Active" description="On Site">Alain Chevalier</ui5-li>
                                    <ui5-li image={Avatar_2} type="Active" description="Travelling to Idaho">Yolanda Barrueco</ui5-li>
                                    <ui5-li image={Avatar_9} type="Active" description="Travelling to Idaho">Arend Pellewever</ui5-li>
                                    <ui5-li image={Avatar_5} type="Active" description="Headquaters Support">Henry Richardson</ui5-li>
                                </ui5-list>
                            </ui5-card>
                        </div>
                        <div className="flex-basis-4 hide-at-830px">
                            <ui5-card
                            heading="Freshhh LTD."
                            subtitle="Electric shock while charging"
                            avatar={Case_3}
                            >
                                <ui5-list separators="None">
                                    <ui5-li image={Avatar_6} type="Active" description="On Site">Benedita Tavares</ui5-li>
                                    <ui5-li image={Avatar_8} type="Active" description="Travelling to Dayville">Tamara Bunce</ui5-li>
                                    <ui5-li image={Avatar_10} type="Active" description="Headquaters Support">Michael Adams</ui5-li>
                                </ui5-list>
                            </ui5-card>
                        </div>
                        <div className="flex-basis-4 hide-at-830px">
                            <ui5-card
                            heading="Lean Pulp"
                            subtitle="Software update Issues"
                            avatar={Case_1}
                            >
                                <ui5-list separators="None">
                                    <ui5-li image={Avatar_7} type="Active" description="On Site">Thomas Fulloway</ui5-li>
                                    <ui5-li image={Avatar_3} type="Active" description="Headquaters Support">Donna Mendez</ui5-li>
                                </ui5-list>
                            </ui5-card>
                        </div>

                        <ui5-title class="flex-basis-full section-header">Incident Analysis</ui5-title>
                        {/* Third line of Cards */}
                        <div className="flex-basis-5">
                            <ui5-card
                            heading="Failure Breakdown - Q1, 2019"
                            >
                                <div className="flex-center">
                                    <img src={chart1} className="chart" alt="chart 1"></img>
                                </div>
                            </ui5-card>
                        </div>
                        <div className="flex-basis-4 hide-at-1240px">
                            <ui5-card
                            heading="Weather failures"
                            >
                                <div className="flex-center">
                                    <img src={chart2} className="chart" alt="chart 2"></img>
                                </div>
                            </ui5-card>
                        </div>
                        <div className="flex-basis-4">
                            <ui5-card
                            heading="Latest Incident Reports"
                            status="7 of 28"
                            >
                                <ui5-list separators="None">
                                    <ui5-li-custom class="table-list-item">
                                        <div className="table-list">
                                            <ui5-title level="H5">Gran Ma Co.</ui5-title>
                                            <ui5-label>22.04.2019</ui5-label>
                                        </div>
                                    </ui5-li-custom>
                                    <ui5-li-custom class="table-list-item">
                                        <div className="table-list">
                                            <ui5-title level="H5">CRO Corp.</ui5-title>
                                            <ui5-label>22.04.2019</ui5-label>
                                        </div>
                                    </ui5-li-custom>
                                    <ui5-li-custom class="table-list-item">
                                        <div className="table-list">
                                            <ui5-title level="H5">Honey Tomb LTD.</ui5-title>
                                            <ui5-label>21.04.2019</ui5-label>
                                        </div>
                                    </ui5-li-custom>
                                    <ui5-li-custom class="table-list-item">
                                        <div className="table-list">
                                            <ui5-title level="H5">Grow Wow Co.</ui5-title>
                                            <ui5-label>21.04.2019</ui5-label>
                                        </div>
                                    </ui5-li-custom>
                                    <ui5-li-custom class="table-list-item">
                                        <div className="table-list">
                                            <ui5-title level="H5">Exact Corp.</ui5-title>
                                            <ui5-label>20.04.2019</ui5-label>
                                        </div>
                                    </ui5-li-custom>
                                    <ui5-li-custom class="table-list-item">
                                        <div className="table-list">
                                            <ui5-title level="H5">Flawa LLC.</ui5-title>
                                            <ui5-label>19.04.2019</ui5-label>
                                        </div>
                                    </ui5-li-custom>
                                    <ui5-li-custom class="table-list-item">
                                        <div className="table-list">
                                            <ui5-title level="H5">Alila Cosmetics Co.</ui5-title>
                                            <ui5-label>19.04.2019</ui5-label>
                                        </div>
                                    </ui5-li-custom>
                                </ui5-list>
                            </ui5-card>
                        </div>

                        <ui5-title class="flex-basis-full section-header">Employee Services</ui5-title>
                        {/* Fourth line of Cards */}
                        <div className="flex-basis-3">
                            <ui5-card
                            heading="Most Frequently Used"
                            status="7 of 28"
                            >
                                <ui5-list>
                                <ui5-li icon="sap-icon://home" type="Active">Work From Home</ui5-li>
                                <ui5-li icon="sap-icon://general-leave-request" type="Active">Time &amp; Vacation</ui5-li>
                                <ui5-li icon="sap-icon://travel-expense" type="Active">Travel Expense</ui5-li>
                                <ui5-li icon="sap-icon://headset" type="Active">IT Direct</ui5-li>
                                <ui5-li icon="sap-icon://monitor-payments" type="Active">Compensation</ui5-li>
                                <ui5-li icon="sap-icon://activity-individual" type="Active">Activity Recording</ui5-li>
                                </ui5-list>
                            </ui5-card>
                        </div>
                        <div className="flex-basis-6 nested-flex-container hide-at-1240px">
                            <ui5-card
                            class="nested-flex-item"
                            avatar="sap-icon://employee"
                            heading="I &amp; Drone Hive"
                            subtitle="Understand our strategy"
                            ></ui5-card>
                            <ui5-card
                            class="nested-flex-item"
                            avatar="sap-icon://shield"
                            heading="Security"
                            subtitle="Master digital safety"
                            ></ui5-card>
                            <ui5-card
                            class="nested-flex-item"
                            avatar="sap-icon://cart"
                            heading="Order &amp; Purchasing"
                            subtitle="Buy hardware"
                            ></ui5-card>
                            <ui5-card
                            class="nested-flex-item"
                            avatar="sap-icon://building"
                            heading="Facility"
                            subtitle="Handle your workplace"
                            ></ui5-card>
                            <ui5-card
                            class="nested-flex-item"
                            avatar="sap-icon://laptop"
                            heading="IT Services"
                            subtitle="Manage software"
                            ></ui5-card>
                            <ui5-card
                            class="nested-flex-item"
                            avatar="sap-icon://collaborate"
                            heading="HR &amp; Cross Topics"
                            subtitle="Get help"
                            ></ui5-card>
                            <ui5-card
                            class="nested-flex-item"
                            avatar="sap-icon://suitcase"
                            heading="Travel"
                            subtitle="Organize business trip"
                            ></ui5-card>
                        </div>
                        <div className="flex-basis-4 hide-at-830px">
                            <ImagesCard></ImagesCard>
                        </div>
                    </div>
					</ui5-tab>
					<ui5-tab disabled text="Team Distribution">
					</ui5-tab>
					<ui5-tab disabled text="Drone Maintanance">
					</ui5-tab>
					<ui5-tab disabled text="Drone Development">
					</ui5-tab>
				</ui5-tabcontainer>
        );
    }
}

export default Home;
