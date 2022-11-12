import { useReducer } from 'react';
import theme from '../theme'
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import NavigationScroll from '../layout/navigationScroll';
import customizationReducer from "./reducer";
import { Admin, CustomRoutes, Resource, useGetOne, defaultTheme } from 'react-admin';
import { useParams, Route } from 'react-router-dom';
import SpeacerCard from './speacerCard';
import Header from './speaker/header'
import s from './index.module.css'
import BigHeader from './speaker/bigheafer';
import MyLayout from './layout';
import DDescription from './description';
import RoomGallery from './hotel';

const Speakers = () => {
    return (
        <div >
            <Header />

            <div className={s.cards}>
                <SpeacerCard />
                <SpeacerCard />
                <SpeacerCard />
            </div>

        </div>
    )
}

const Description = ({data}) => {
    return (
        <div class={s.format}>
            <DDescription data={data}/>
        </div>
    )
}

const DataRender = () => {
    console.log('DATA RENDER!!!');
    let { id } = useParams();
    const { data, isLoading } = useGetOne('events', { id })
    if (isLoading) return null;
    return (
        <div >
            <div class={s.bigHeader}>
                <BigHeader data={data}/>
            </div>
            <div class={s.main}>
                <div style={{height:'50px'}}/>
                <Speakers/>
                <div style={{height:'50px'}}/>
                <Description data={data}/>
                <div style={{height:'50px'}}/>
                <RoomGallery/>
            </div>
            
        </div>
    )
}

export default function Landing({ dataProvider }) {
    const customization = {
        ...defaultTheme,
        opened: false
    }

    return <NavigationScroll>

        <Admin
            basename="/"
            dataProvider={dataProvider}
            dashboard={DataRender}
            theme={theme(customization)}
            disableTelemetry layout={MyLayout}>

            <Resource name="stt" />
            <CssBaseline />
            <Route path="/event/:id" element={<DataRender />} />

        </Admin>
    </NavigationScroll>
}