import {useReducer} from 'react';
import theme from '../theme'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import Dashboard from './dashboard';
import { EventsList, EventCreate, EventEdit } from './events';
import { OrdersList } from './orders';
import { CustomersList } from './customers';
import NavigationScroll from '../layout/navigationScroll';
import customizationReducer from "./reducer";
// import layout from '../layout/MainLayout';

export default function StoreAdmin ({dataProvider}) {
    const customization = useReducer(customizationReducer);
    return <NavigationScroll>
        <Admin basename="/admin" dataProvider={dataProvider} dashboard={Dashboard} theme={theme(customization)} disableTelemetry>
            <CssBaseline/>
            <Resource name="events" list={EventsList} edit={EventEdit} create={EventCreate} />
            <Resource name="orders" list={OrdersList}/>
            <Resource name="customers" list={CustomersList}/>
        </Admin>
    </NavigationScroll>
}