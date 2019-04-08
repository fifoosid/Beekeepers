import React, { Component } from 'react';
import './Home.css';
import CardMap from './CardMap';
import '@ui5/webcomponents/dist/Card';
import "@ui5/webcomponents/dist/CustomListItem";
import '@ui5/webcomponents/dist/DatePicker';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/List';
import "@ui5/webcomponents/dist/ListItem";
import '@ui5/webcomponents/dist/Timeline';
import '@ui5/webcomponents/dist/TimelineItem';
import '@ui5/webcomponents/dist/Title';

import donna from './assets/images/Avatar_3.png'

import Avatar_1 from './assets/images/Avatar_1.png';
import Avatar_2 from './assets/images/Avatar_2.png';
import Avatar_3 from './assets/images/Avatar_3.png';
import Avatar_4 from './assets/images/Avatar_4.png';
import Avatar_5 from './assets/images/Avatar_5.png';
import Avatar_6 from './assets/images/Avatar_6.png';
import Avatar_7 from './assets/images/Avatar_7.png';
import Avatar_8 from './assets/images/Avatar_8.png';
import Avatar_9 from './assets/images/Avatar_9.png';
import Avatar_10 from './assets/images/Avatar_10.png';
import Case_1 from './assets/images/Case1.png';
import Case_2 from './assets/images/Case2.png';
import Case_3 from './assets/images/Case3.png';
import chart1 from './assets/images/chart1.png';
import chart2 from './assets/images/chart2.png';
import Carousel1 from './assets/images/Carousel1.png';

class Home extends Component {

    constructor() {
        super();
        const today = new Date();
        const time = `${today.getHours()}:${today.getMinutes()}`;
        
        this.state = {
            time
        }
    }

    render() {
        const firstMeeting = new Date().setHours(9, 15);
        const secondMeeting = new Date().setHours(10, 0);
        const thirdMeeting = new Date().setHours(12, 0);
        return (
            <div className="grid-container">
            {/* First line of Cads */}
                <ui5-card
                class="grid-4-columns first-row-cards-height"
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
                <ui5-card
                class="grid-3-columns personal-card"
                heading="Donna Mendez"
                subtitle="Managing Partner"
                avatar={donna}
                >
                    <div className="card-content">
                        <ui5-title class="padding-bottom">Peach Valley Inc.</ui5-title>
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
                <CardMap></CardMap>

                <ui5-title class="grid-16-columns">Incidents</ui5-title>
                {/* Second line of Cards */}
                <ui5-card
                class="grid-4-columns"
                heading="Incidents in the last 24 hours"
                status="3 of 3"
                >
                    <ui5-list>
                        <ui5-li-custom>
                            <div className="firms-list">
                                <div className="firms-list-item negative-border">
                                    <img src={Case_1} className="image"></img>
                                </div>
                                <div className="main-info">
                                    <ui5-title level="H5">Teico Inc.</ui5-title>
                                    <ui5-label>Sun Valley, Idaho</ui5-label>
                                </div>
                                <div className="counter red-label">2456</div>
                            </div>
                        </ui5-li-custom>
                        <ui5-li-custom>
                            <div className="firms-list">
                                <div className="firms-list-item warning-border">
                                    <img src={Case_2} className="image"></img>
                                </div>
                                <div className="main-info">
                                    <ui5-title level="H5">Freshhh LTD.</ui5-title>
                                    <ui5-label>Dayville, Oregon</ui5-label>
                                </div>
                                <div className="counter orange-label">1263</div>
                            </div>
                        </ui5-li-custom>
                        <ui5-li-custom>
                            <div className="firms-list">
                                <div className="firms-list-item">
                                    <img src={Case_3} className="image"></img>
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
                <ui5-card
                class="grid-4-columns"
                heading="Teico Inc."
                subtitle="Sudden storm wind damaged 3 polinating hives"
                avatar={Case_1}
                >
                    <ui5-list>
                        <ui5-li image={Avatar_1} type="Active" description="On Site">Alain Chevalier</ui5-li>
                        <ui5-li image={Avatar_2} type="Active" description="Travelling to Idaho">Yolanda Barrueco</ui5-li>
                        <ui5-li image={Avatar_3} type="Active" description="Travelling to Idaho">Arend Pellewever</ui5-li>
                        <ui5-li image={Avatar_5} type="Active" description="Headquaters Support">Henry Richardson</ui5-li>
                    </ui5-list>
                </ui5-card>
                <ui5-card
                class="grid-4-columns"
                heading="Freshhh LTD."
                subtitle="Electric shock while charging"
                avatar={Case_2}
                >
                    <ui5-list>
                        <ui5-li image={Avatar_6} type="Active" description="On Site">Benedita Tavares</ui5-li>
                        <ui5-li  type="Active" description="Travelling to Dayville">Tamara Bunce</ui5-li>
                        <ui5-li image={Avatar_10} type="Active" description="Headquaters Support">Michael Adams</ui5-li>
                    </ui5-list>
                </ui5-card>
                <ui5-card
                class="grid-4-columns"
                heading="Lean Pulp"
                subtitle="Software update Issues"
                avatar={Case_3}
                >
                    <ui5-list>
                        <ui5-li image={Avatar_7} type="Active" description="On Site">Thomas Fulloway</ui5-li>
                        <ui5-li image={Avatar_3} type="Active" description="Headquaters Support">Lacara Jones</ui5-li>
                    </ui5-list>
                </ui5-card>

                <ui5-title class="grid-16-columns">Incident Analysis</ui5-title>
                {/* Third line of Cards */}
                <ui5-card
                class="grid-5-columns"
                heading="Failure Breakdown - Q1, 2019"
                >
                <div className="flex-center">
                    <img src={chart1} className="chart"></img>
                </div>
                </ui5-card>
                <ui5-card
                class="grid-4-columns"
                heading="Weather failures"
                >
                    <div className="flex-center">
                        <img src={chart2} className="chart"></img>
                    </div>
                </ui5-card>
                <ui5-card
                class="grid-4-columns"
                heading="Latest Incident Reports"
                status="7 of 28"
                >
                    <ui5-list separators="None">
                        <ui5-li-custom>
                            <div class="table-list">
                                <ui5-title level="H5">Gran Ma Co.</ui5-title>
                                <ui5-label>22.04.2019</ui5-label>
                            </div>
                        </ui5-li-custom>
                        <ui5-li-custom>
                            <div class="table-list">
                                <ui5-title level="H5">CRO Corp.</ui5-title>
                                <ui5-label>22.04.2019</ui5-label>
                            </div>
                        </ui5-li-custom>
                        <ui5-li-custom>
                            <div class="table-list">
                                <ui5-title level="H5">Honey Tomb LTD.</ui5-title>
                                <ui5-label>21.04.2019</ui5-label>
                            </div>
                        </ui5-li-custom>
                        <ui5-li-custom>
                            <div class="table-list">
                                <ui5-title level="H5">Grow Wow Co.</ui5-title>
                                <ui5-label>21.04.2019</ui5-label>
                            </div>
                        </ui5-li-custom>
                        <ui5-li-custom>
                            <div class="table-list">
                                <ui5-title level="H5">Exact Corp.</ui5-title>
                                <ui5-label>20.04.2019</ui5-label>
                            </div>
                        </ui5-li-custom>
                        <ui5-li-custom>
                            <div class="table-list">
                                <ui5-title level="H5">Flawa LLC.</ui5-title>
                                <ui5-label>19.04.2019</ui5-label>
                            </div>
                        </ui5-li-custom>
                        <ui5-li-custom>
                            <div class="table-list">
                                <ui5-title level="H5">Alila Cosmetics Co.</ui5-title>
                                <ui5-label>19.04.2019</ui5-label>
                            </div>
                        </ui5-li-custom>
                    </ui5-list>
                </ui5-card>
            
                <ui5-title class="grid-16-columns">Employee Services</ui5-title>
                {/* Fourth line of Cards */}
                <ui5-card
                class="grid-3-columns"
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

                <div class="grid-6-columns nested-grid-container">
                    <ui5-card
                    class="nested-grid-3-columns"
                    avatar="sap-icon://employee"
                    heading="I &amp; Drone Hive"
                    subtitle="Understand our strategy"
                    ></ui5-card>
                    <ui5-card
                    class="nested-grid-3-columns"
                    avatar="sap-icon://shield"
                    heading="Security"
                    subtitle="Master digital safety"
                    ></ui5-card>
                    <ui5-card
                    class="nested-grid-3-columns"
                    avatar="sap-icon://cart"
                    heading="Order &amp; Purchasing"
                    subtitle="Buy hardware"
                    ></ui5-card>
                    <ui5-card
                    class="nested-grid-3-columns"
                    avatar="sap-icon://building"
                    heading="Facility"
                    subtitle="Handle your workplace"
                    ></ui5-card>
                    <ui5-card
                    class="nested-grid-3-columns"
                    avatar="sap-icon://laptop"
                    heading="IT Services"
                    subtitle="Manage software"
                    ></ui5-card>
                    <ui5-card
                    class="nested-grid-3-columns"
                    avatar="sap-icon://collaborate"
                    heading="HR &amp; Cross Topics"
                    subtitle="Get help"
                    ></ui5-card>
                    <ui5-card
                    class="nested-grid-3-columns"
                    avatar="sap-icon://suitcase"
                    heading="Travel"
                    subtitle="Organize business trip"
                    ></ui5-card>
                </div>
                <ui5-card
                heading="Drone Hive pioneers crops pollination"
                subtitle="by New Scientist"
                class="grid-4-columns"
                >
                    <img src={Carousel1}></img>
                </ui5-card>
            </div>
        );
    }
}

export default Home;
