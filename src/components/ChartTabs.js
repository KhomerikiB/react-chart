import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import ChartTabItem from './chartTabItem';
import Chart from './Chart';
import ChartFilter from './chartFilter';
class ChartTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartItems: [
                {
                    chartItemTitle: 'Total Users who Like Flyjin',
                    chartItemCount: '1846',
                    chartItemSecondCount: '#13 Most Popular',
                    chartItemAdditional: 'in Bar & Restaurant in Montreal'
                },
                {
                    chartItemTitle: 'Total Matches made on Flyjin',
                    chartItemCount: '472',
                    chartItemSecondCount: '+37% matches',
                    chartItemAdditional: 'from last week'
                },
                {
                    chartItemTitle: 'News likes this week',
                    chartItemCount: '134',
                    chartItemSecondCount: '-2% likes',
                    chartItemAdditional: 'from last week'
                },
                {
                    chartItemTitle: 'Invitations sent to Flyjin',
                    chartItemCount: '14,396',
                    chartItemSecondCount: '#6 Most Popular',
                    chartItemAdditional: 'locations for first encounter'
                }
            ],
            // DATA AND LABEL SHOULD TAKE PARAMETERS FOR X AND Y AXES
            // SOME FAKE DATA FOR DIFFERENT CHARTS
            chartData: [
                {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [{
                        backgroundColor: 'transparent',
                        borderColor: '#6d94d5',
                        fontStyle: 'normal',
                        fontColor: '#c2c1c1',
                        data: [2122, 10555, 12311, 121231, 38812, 7112, 12122, 7821, 12001, 5041, 11000, 121001]
                    }]
                },
                {
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    datasets: [{
                        backgroundColor: 'transparent',
                        borderColor: '#6d94d5',
                        fontStyle: 'normal',
                        fontColor: '#c2c1c1',
                        data: [2122, 4001, 2312, 4005, 7021, 1200, 8775]
                    }]
                },
                {
                    labels: ['Company One', 'Company Two', 'Company Three'],
                    datasets: [{
                        backgroundColor: 'transparent',
                        borderColor: '#6d94d5',
                        fontStyle: 'normal',
                        fontColor: '#c2c1c1',
                        data: [2122, 10555, 12311]
                    }]
                },
                {
                    labels: ['January', 'February', 'March'],
                    datasets: [{
                        backgroundColor: 'transparent',
                        borderColor: '#6d94d5',
                        fontStyle: 'normal',
                        fontColor: '#c2c1c1',
                        data: [2122, 10555, 12311, 121231, 38812]
                    }]
                }
            ]
        }
    }

    render() {

        let tab = this.state.chartItems.map((item, index) => {
            return <Tab> <ChartTabItem liItems={item} key={index} /> </Tab>;
        });
        let charts = this.state.chartData.map((item, index) => {
            return <TabPanel> <Chart chartData={item} key={index} /> </TabPanel>;
        })
        return (
            <div className="chart-container">
                <Tabs>
                    <TabList>
                        {tab}
                    </TabList>
                    {charts}
                </Tabs>
                <ChartFilter />
            </div>
        )
    }



}
export default ChartTabs;

