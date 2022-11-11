import {useReducer} from 'react';
import theme from '../theme'
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import NavigationScroll from '../layout/navigationScroll';
import customizationReducer from "./reducer";
import { Admin, CustomRoutes, Resource, useGetOne,  } from 'react-admin';
import {useParams, Route} from 'react-router-dom';
import SpeacerCard from './speacerCard';
import Header from './speaker/header'
import s from './index.module.css'


const DataRender =( ) => {
    let {id} = useParams() ;
    const { data, isLoading} =useGetOne('storeEvents', {id})
    if (isLoading) return null;
    return (
<div class={s.main}>
    <Header/>
    
    <div class={s.cards}>
        <SpeacerCard/>
        <SpeacerCard/>
        <SpeacerCard/>
    </div>
</div> 
)
}

export default function Landing ({dataProvider }) {
    const customization = useReducer(customizationReducer);
    
    return <NavigationScroll>

        <Admin basename="/" dataProvider={dataProvider } dashboard={DataRender} 
     theme={theme(customization)} disableTelemetry>
        <Resource name="stt" />
            
            <CssBaseline/>
            
            <Route path="/:id" element={<DataRender/>}  />
            
          
            
        </Admin>
    </NavigationScroll>
}