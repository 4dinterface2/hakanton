// in src/App.js
import * as React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StoreAdmin from './admin';

//import { ReactQueryDevtools } from 'react-query/devtools'
//import jsonServerProvider from 'ra-data-json-server';
//import { UserList } from './users';
//import { PostList,PostEdit, PostCreate } from './posts';
//import PostIcon from '@mui/icons-material/Book';
//import UserIcon from '@mui/icons-material/Group';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
import fakeDataProvider from 'ra-data-fakerest';
import theme from './theme'

const dataProvider = fakeDataProvider({
    orders:[
        {id:0, customerId:0,  eventId:0, price: 150, options: [], date: '' },
        {id:1, customerId:1,  eventId:0, price: 100, options: [], date: '' },
    ],
    customers:[
        {id:0, },
        {id:1, },
    ],
    events:[
        {id:0, customerId:0,  eventId:0, price: 150, options: [], date: '', customers: [
           0
        ] },
        {id:1, customerId:1,  eventId:0, price: 100, options: [], date: '', customers: [
           1
        ] },
    ]

})



const StoreFront = ()=>{
    return <div> hello world </div>
 }

const App = () => (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StoreFront />} />
                <Route path="/admin/*" element={<StoreAdmin dataProvider={dataProvider} />} />
            </Routes>
        </BrowserRouter>
);

// <Resource name="posts" list={PostList}  edit={PostEdit} create={PostCreate} icon={PostIcon}/>
// <Resource name="users" list={UserList} recordRepresentation="name" icon={UserIcon} />
// <Resource name="comments" list={UserList}  icon={UserIcon} />
export default App;