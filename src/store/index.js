import {useReducer} from 'react';
import theme from '../theme'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import Dashboard from './dashboard';
import { EventsList, EventCreate, EventEdit } from './events';

import NavigationScroll from '../layout/navigationScroll';
import customizationReducer from "./reducer";

export default function StoreFront ({dataProvider }) {
    const customization = useReducer(customizationReducer);
    return <NavigationScroll>
        <Admin basename="/" dataProvider={dataProvider } theme={theme(customization)} disableTelemetry
        >
            <CssBaseline/>
            <Resource name="events"  list={EventsList} />
        </Admin>
    </NavigationScroll>
}