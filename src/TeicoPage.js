import React, { Component } from 'react';
import './Home.css';
import { ThemeProvider } from '@fiori-for-react/fiori3/lib/ThemeProvider';
import { Button } from '@fiori-for-react/fiori3/lib/Button';
import { ObjectPage } from '@fiori-for-react/fiori3/lib/ObjectPage';
import { ObjectPageSection } from '@fiori-for-react/fiori3/lib/ObjectPageSection';

import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableRow";
import "@ui5/webcomponents/dist/TableCell";
import "@ui5/webcomponents/dist/TableColumn";

import TeicoImage from './assets/images/Case2.png';
import Avatar_1 from './assets/images/Avatar_1.png';
import Avatar_2 from './assets/images/Avatar_2.png';
import Avatar_5 from './assets/images/Avatar_1.png';
import Avatar_9 from './assets/images/Avatar_2.png';

//css
import "./TeicoPage.css";

class TeicoPage extends Component {
    render() {
        const data = [
            {
                serialNumber: "QRSD105423",
                lastSignal: "9:31:21",
                speed: "35 km/h",
                latitude: 3.45,
                battery: 14,
                temperature: -8.3,
                latestLocation: "39°42'52.8\"N 121°37'58.6\"W"
            },
            {
                serialNumber: "QRSD106548",
                lastSignal: "9:30:45",
                speed: "33 km/h",
                latitude: 8.45,
                battery: 9,
                temperature: -9.1,
                latestLocation: "39°42'52.8\"N 121°37'57.2\"W"
            },
            {
                serialNumber: "QRSD102764",
                lastSignal: "9:31:34",
                speed: "33 km/h",
                latitude: 6.45,
                battery: 11,
                temperature: -8.1,
                latestLocation: "39°42'52.8\"N 121°37'55.9\"W"
            },
            {
                serialNumber: "QRSD103865",
                lastSignal: "9:32:06",
                speed: "34 km/h",
                latitude: 9.45,
                battery: 14,
                temperature: -8.7,
                latestLocation: "39°42'53.3\"N 121°37'53.8\"W"
            },
            {
                serialNumber: "QRSD109765",
                lastSignal: "9:30:34",
                speed: "35 km/h",
                latitude: 3.45,
                battery: 21,
                temperature: -8.9,
                latestLocation: "39°42'52.6\"N 121°37'51.9\"W"
            },
            {
                serialNumber: "QRSD104683",
                lastSignal: "9:31:08",
                speed: "33 km/h",
                latitude: 8.45,
                battery: 9,
                temperature: -9.2,
                latestLocation: "39°42'51.9\"N 121°37'50.8\"W"
            },
            {
                serialNumber: "QRSD101245",
                lastSignal: "9:30:23",
                speed: "33 km/h",
                latitude: 5.45,
                battery: 14,
                temperature: -8.3,
                latestLocation: "39°42'49.9\"N 121°37'51.5\"W"
            },
            {
                serialNumber: "QRSD106794",
                lastSignal: "9:31:07",
                speed: "34 km/h",
                latitude: 8.45,
                battery: 15,
                temperature: -8.6,
                latestLocation: "39°42'49.7\"N 121°37'53.4\"W"
            },
            {
                serialNumber: "QRSD108754",
                lastSignal: "9:30:54",
                speed: "35 km/h",
                latitude: 4.45,
                battery: 13,
                temperature: -9.3,
                latestLocation: "39°42'52.8\"N 121°37'53.1\"W"
            },
            {
                serialNumber: "QRSD109445",
                lastSignal: "9:30:16",
                speed: "33 km/h",
                latitude: 9.45,
                battery: 11,
                temperature: -8.5,
                latestLocation: "39°42'52.6\"N 121°37'54.6\"W"
            },
            {
                serialNumber: "QRSD100762",
                lastSignal: "9:32:09",
                speed: "34 km/h",
                latitude: 7.45,
                battery: 9,
                temperature: -8.4,
                latestLocation: "39°42'49.9\"N 121°37'55.7\"W"
            },
        ];
        return (
            <ThemeProvider contentDensity="Cozy">
                <script>
                    delete Document.prototype.adoptedStyleSheets;
                </script>
                <ObjectPage
                    title="Teico Inc."
                    subTitle="Sudden storm wind damaged 3 polinating hives"
                    headerActions={[
                        <Button icon="sap-icon://edit" type="Emphasized"></Button>,
                        <Button icon="sap-icon://print" type="Transparent"></Button>,
                        <Button icon="sap-icon://customize" type="Transparent"></Button>,
                        <Button icon="sap-icon://full-screen" type="Transparent"></Button>,
                        <Button icon="sap-icon://decline" type="Transparent"></Button>
                    ]}
                    image={TeicoImage}
                    selectedSectionId="1"
                    >
                    <ObjectPageSection title="Case Investigators" id="1">
                        <div className="section1">
                            <ui5-li type="Inactive" image={Avatar_1} description="On Site">Alain Chevalier</ui5-li>
                            <ui5-li type="Inactive" image={Avatar_2} description="Travelling to Idaho">Yolanda Barrueco</ui5-li>
                            <ui5-li type="Inactive" image={Avatar_9} description="Travelling to Idaho">Arend Pellewever</ui5-li>
                            <ui5-li type="Inactive" image={Avatar_5} description="Headquaters Support">Henry Richardson</ui5-li>
                        </div>
                    </ObjectPageSection>
                    <ObjectPageSection title="Timeline" id="2">
                        <div className="section2">
                            <ui5-timeline class="section2-timeline">
                                <ui5-timeline-item id="test-item" title-text="First Alert Received" subtitle-text="9:28:38 AM, 23.05.2019" icon="sap-icon://alert"></ui5-timeline-item>
                                <ui5-timeline-item title-text="Retreat Initiated" subtitle-text="9:28:40 AM, 23.05.2019" icon="sap-icon://map-2">
                                </ui5-timeline-item>
                                <ui5-timeline-item title-text="Crew Dispatched" subtitle-text="9:35:00 AM, 23.05.2019" icon="sap-icon://collaborate">
                                    <div>ETA - 11:27 AM - San Joaquin Valley</div>
                                </ui5-timeline-item>
                            </ui5-timeline>
                            <div className="section2-text-wrapper">
                                <span>Followed by 2455 subsequent alerts in the next 2 minutes.</span>
                                <span>Only 365 drones managed to reach their hive after receiving the retreat alert.</span>
                                <div>
                                    <span>The crew on duty left as soon as they were briefed with the case.</span>
                                    <br />
                                    <span>Meanwhile our Teico point of contact - Alain Chevalier is gathering and uploading evidence.</span>
                                </div>
                            </div>
                        </div>
                    </ObjectPageSection>
                    <ObjectPageSection title="Local Evidence" id="3">
                        <div className="section3">
                            <ui5-li type="Inactive" icon="sap-icon://pdf-attachment" description="by Alain Chevalier">Field Wind Censors Data</ui5-li>
                            <ui5-li type="Inactive" icon="sap-icon://pdf-attachment" description="by Alain Chevalier">Field Temperature Censors Data</ui5-li>
                            <ui5-li type="Inactive" icon="sap-icon://attachment-photo" description="by Alain Chevalier">Drone Damage 1</ui5-li>
                            <ui5-li type="Inactive" icon="sap-icon://attachment-photo" description="by Alain Chevalier">Drone Damage 2</ui5-li>
                            <ui5-li type="Inactive" icon="sap-icon://attachment-photo" description="by Alain Chevalier">Drone Damage 3</ui5-li>
                            <ui5-li type="Inactive" icon="sap-icon://attachment-photo" description="by Alain Chevalier">Drone Damage 4</ui5-li>
                            <ui5-li type="Inactive" icon="sap-icon://attachment-photo" description="by Alain Chevalier">Drone Damage 5</ui5-li>
                            <ui5-li type="Inactive" icon="sap-icon://attachment-photo" description="by Alain Chevalier">Drone Damage 6</ui5-li>
                            <ui5-li type="Inactive" icon="sap-icon://attachment-audio" description="by Alain Chevalier">Eye Witness Statement</ui5-li>
                            <ui5-li type="Inactive" icon="sap-icon://attachment-video" description="by Alain Chevalier">Corn Field Footage 1</ui5-li>
                            <ui5-li type="Inactive" icon="sap-icon://attachment-video" description="by Alain Chevalier">Corn Field Footage 2</ui5-li>
                            <ui5-li type="Inactive" icon="sap-icon://attachment-video" description="by Alain Chevalier">Soy Field Footage</ui5-li>
                        </div>
                    </ObjectPageSection>
                    <ObjectPageSection title="Raw Drone Data" id="4">
                        <div className="section4-header">
                            <ui5-title level="H4">Damaged Drones (11 of 2456)</ui5-title>
                            <div className="searchWrapper">
                                <ui5-button class="margin-right">Edit columns</ui5-button>
                                <ui5-input placeholder="Search" class="input-width">
                                    <ui5-icon id="searchIcon" slot="icon" src="sap-icon://search" class="inputIcon"></ui5-icon>
                                </ui5-input>
                            </div>
                        </div>

                        <ui5-table class="demo-table" id="tbl">
                            <ui5-table-column slot="columns-1" width="12em">
                                <span slot="header">Serial Number</span>
                            </ui5-table-column>

                            <ui5-table-column slot="columns-2" min-width="800" popin-text="Supplier">
                                <span slot="header">Last Signal</span>
                            </ui5-table-column>

                            <ui5-table-column slot="columns-3" min-width="600" popin-text="Last Signal" demand-popin="">
                                <span slot="header">Last Signal</span>
                            </ui5-table-column>

                            <ui5-table-column slot="columns-4" min-width="600" popin-text="Weight" demand-popin="">
                                <span slot="header">Latitude</span>
                            </ui5-table-column>

                            <ui5-table-column slot="columns-5">
                                <span slot="header">Battery</span>
                            </ui5-table-column>

                            <ui5-table-column slot="columns-6">
                                <span slot="header">Temperature</span>
                            </ui5-table-column>

                            <ui5-table-column slot="columns-7">
                                <span slot="header">Latest Location</span>
                            </ui5-table-column>

                            {data.map((item, index) => {
                                return <ui5-table-row key={item.serialNumber} slot={`rows-${index}`}>
                                    <ui5-table-cell slot="cells-1">
                                        <ui5-label class="bold">
                                            {item.serialNumber}
                                        </ui5-label>
                                    </ui5-table-cell>
                                    <ui5-table-cell slot="cells-2">
                                        <ui5-label>
                                            {item.lastSignal}
                                        </ui5-label>
                                    </ui5-table-cell>
                                    <ui5-table-cell slot="cells-3">
                                        <ui5-label>
                                            {item.speed}
                                        </ui5-label>
                                    </ui5-table-cell>
                                    <ui5-table-cell slot="cells-4">
                                        <ui5-label>
                                            {item.latitude}
                                        </ui5-label>
                                    </ui5-table-cell>
                                    <ui5-table-cell slot="cells-5">
                                        <ui5-label class="red-color">
                                            {item.battery}%
                                        </ui5-label>
                                    </ui5-table-cell>
                                    <ui5-table-cell slot="cells-6">
                                        <ui5-label>
                                            {item.temperature}
                                        </ui5-label>
                                    </ui5-table-cell>
                                    <ui5-table-cell slot="cells-7">
                                        <ui5-label>
                                            {item.latestLocation}
                                        </ui5-label>
                                    </ui5-table-cell>
                                </ui5-table-row>
                            })}

                        </ui5-table>
                    </ObjectPageSection>
                </ObjectPage>
            </ThemeProvider>
        );
    }
}

export default TeicoPage;
