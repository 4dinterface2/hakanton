import {useReducer} from 'react';
import theme from '../theme'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import RoomsList from './rooms';
import Main from './main';


// import Dashboard from './dashboard';
// dashboard={Dashboard}

//import { OrdersList } from './orders';
//import { CustomersList } from './customers';

// import { EventsList, EventCreate, EventEdit } from './events';
import NavigationScroll from '../layout/navigationScroll';
import customizationReducer from "./reducer";
// import layout from '../layout/MainLayout';

export default function StoreAdmin ({dataProvider}) {
    // const customization = useReducer(customizationReducer);
    // theme={theme(customization)}
    return <NavigationScroll>
        <Admin basename="/vendor" dataProvider={dataProvider}  disableTelemetry>
            <Resource name="rooms" list={RoomsList} />
            <Resource name="options" list={Main} />
            <CssBaseline/>
        </Admin>
    </NavigationScroll>
}

// <Resource name="events" list={EventsList} edit={EventEdit} create={EventCreate} />