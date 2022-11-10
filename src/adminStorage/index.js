import {useReducer} from 'react';
import theme from '../theme'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import Dashboard from './dashboard';
import { EventsList, EventCreate, EventEdit } from './events';

import NavigationScroll from '../layout/navigationScroll';
import customizationReducer from "./reducer";
// import layout from '../layout/MainLayout';


export default function StoreFront ({dataProvider }) {
    const customization = useReducer(customizationReducer);
    return <NavigationScroll>

        <Admin basename="/" dataProvider={dataProvider } dashboard={Dashboard} theme={theme(customization)} disableTelemetry>

        <CssBaseline/>
            <Resource name="storeEvents"  list={EventsList} edit={EventEdit} create={EventCreate}/>
            
        </Admin>
    </NavigationScroll>
}