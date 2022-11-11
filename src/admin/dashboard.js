// in src/Dashboard.js
import {useLayoutEffect} from "react";
import { Card, CardContent, CardHeader } from '@mui/material';


const Funnel = ()=>{
    useLayoutEffect(()=>{
        var graph = new window.FunnelGraph({
            container: '#hello',
            gradientDirection: 'horizontal',
            data: {
                labels: ['Impressions', 'Add To Cart', 'Buy'],
                subLabels: ['Direct', 'Social Media', 'Ads'],
                colors: [
                    ['#FFB178', '#FF78B1', '#FF3C8E'],
                    'red',
                    ['blue']
                ],
                values: [
                    [2000, 4000, 6000],
                    [3000, 1000, 1700],
                    [200, 30, 130]
                ]
            },
            displayPercent: true,
            direction: 'horizontal'
        });

        graph.draw();
    }, [])
    return <div id='hello' style={{width:'100%', height: '200px'}} />
}

const Dashboard = () => (
        <Card>
            <CardHeader title="Welcome to the administration" />
            <CardContent>
                <Funnel/>
            </CardContent>
        </Card>
        );

export default Dashboard;