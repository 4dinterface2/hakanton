import {useReducer} from 'react';
import theme from '../theme'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import {RoomsList, RoomCreate, RoomEdit } from './rooms';
import {ResurceList, ResourceCreate, ResourseEdit} from './resources';

import NavigationScroll from '../layout/navigationScroll';
// import Dashboard from './dashboard';
// dashboard={Dashboard}
//import { OrdersList } from './orders';
//import { CustomersList } from './customers';
// import { EventsList, EventCreate, EventEdit } from './events';
import customizationReducer from "./reducer";
// import layout from '../layout/MainLayout';

export default function StoreAdmin ({dataProvider}) {
    // const customization = useReducer(customizationReducer);
    // theme={theme(customization)}
    return <NavigationScroll>
        <Admin basename="/vendor" dataProvider={dataProvider}  disableTelemetry>
            <Resource label= 'комнатный фонд' name="rooms" list={RoomsList} create={RoomCreate} edit={RoomEdit} />
            <Resource label= 'ресурсы' name="resources" list={ResurceList} create={ResourceCreate} edit={ResourseEdit} />
            <CssBaseline/>
        </Admin>
    </NavigationScroll>
}

// <Resource name="events" list={EventsList} edit={EventEdit} create={EventCreate} />