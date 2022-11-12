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
// import BigHeader from './speaker/bigheafer';
import MyLayout from './layout';
import Format from './speaker/format';
import BigHeader from './speaker/bigheafer';

const Speakers = () => {
    return (
        <div >
            <Header />

            <div class={s.cards}>
                <SpeacerCard />
                <SpeacerCard />
                <SpeacerCard />
            </div>

        </div>
    )
}

const Description = () => {
    return (
        <div class={s.format}>
            <Format/>
        </div>
    )
}

const DataRender = () => {
    let { id } = useParams();
    const { data, isLoading } = useGetOne('storeEvents', { id })
    if (isLoading) return null;
    return (
        <div >
            <div class={s.bigHeader}>
                <BigHeader/>
            </div>
            <div class={s.main}>
                
             <Speakers/>
             <Description/>

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

        <Admin basename="/" dataProvider={dataProvider} dashboard={DataRender}
            theme={theme(customization)} disableTelemetry layout={MyLayout}>
            <Resource name="stt" />

            <CssBaseline />

            <Route path="/event/:id" element={<DataRender />} />



        </Admin>
    </NavigationScroll>
}