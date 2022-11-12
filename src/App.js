// in src/App.js
import * as React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StoreAdmin from './admin';
import VendorAdmin from './vendor';
import Landing from './landing';


//import { ReactQueryDevtools } from 'react-query/devtools'
//import jsonServerProvider from 'ra-data-json-server';
//import { UserList } from './users';
//import { PostList,PostEdit, PostCreate } from './posts';
//import PostIcon from '@mui/icons-material/Book';
//import UserIcon from '@mui/icons-material/Group';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
// import fakeDataProvider from 'ra-data-fakerest';
import localStorageDataProvider from 'ra-data-local-storage';
import theme from './theme'
import StoreFront from "./store";

// статистика
// техподдержка
// финансовая отчетность (переводы нам)

// персональные предлоожения
// -- процент с услуг спик
// import SuperAdmin from "./adminStorage";

const dataProvider = localStorageDataProvider({
    defaultData: {
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
            ],

        resources: [
            {id:1, name:'meet room', price: 200},
            {id:2, name:'pixas', price: 300}
        ],

        hotels: [
            {id:1, name:'rixas'},
            {id:2, name:'pixas'}
        ],

        rooms: [
            {id:1, name:'rixas'},
            {id:2, name:'pixas'}
        ],

        storeEvents: [
            {id:0, eventId:0, eventName:'Psychotherapy', cost:'100$', eventOrganizer:'Veronika Stepanova', date:'13 august',description:'',
                img:[]},
            {id:1, eventId:1, eventName:'Dance', cost:'300$', eventOrganizer:'Natasha', date:'11 november', img: 'https://static.wikia.nocookie.net/warriors-cats/images/a/a6/%D0%9A%D0%BE%D1%82%D1%8F%D1%82%D0%B0.jpg'},
            {id:2, eventId:2, eventName:'Dance', cost:'400$', eventOrganizer:'Natasha', date:'5 october', img:'https://cdnn1.img.sputnik-abkhazia.info/img/102889/91/1028899171_539:-1:1085:600_1920x0_80_0_0_56c57340b5e188285b5fa47607c4eda3.jpg'},
            {id:3, eventId:3, eventName:'Dance', cost:'1000$', eventOrganizer:'Natasha', date:'25 june', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bonsai_kitten.jpg/274px-Bonsai_kitten.jpg'},
            {id:4, eventId:4, eventName:'Dance', cost:'200$', eventOrganizer:'Natasha', date:'31 jule', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bonsai_kitten.jpg/274px-Bonsai_kitten.jpg'},
            {id:5, eventId:5, eventName:'Dance', cost:'150$', eventOrganizer:'Natasha', date:'1 may', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bonsai_kitten.jpg/274px-Bonsai_kitten.jpg'},
            {id:6, eventId:6, eventName:'Dance', cost:'100$', eventOrganizer:'Natasha', date:'5 march', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bonsai_kitten.jpg/274px-Bonsai_kitten.jpg'},
            {id:7, eventId:7, eventName:'Dance', cost:'100$',  eventOrganizer:'Natasha', date:'15 october', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bonsai_kitten.jpg/274px-Bonsai_kitten.jpg'},
            {id:8, eventId:8, eventName:'Dance', cost:'100$', eventOrganizer:'Natasha', date:'9 june', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bonsai_kitten.jpg/274px-Bonsai_kitten.jpg'}
        ]
    }
})

const App = () => (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={<StoreAdmin dataProvider={dataProvider} />} />
                <Route path="/vendor/*" element={<VendorAdmin dataProvider={dataProvider} />} />
                <Route path="/*" element={<StoreFront dataProvider={dataProvider}/>} />
                <Route path="/event/:id" element={<Landing dataProvider={dataProvider}/>} />
            </Routes>
        </BrowserRouter>
);

// <Resource name="posts" list={PostList}  edit={PostEdit} create={PostCreate} icon={PostIcon}/>
// <Resource name="users" list={UserList} recordRepresentation="name" icon={UserIcon} />
// <Resource name="comments" list={UserList}  icon={UserIcon} />
export default App;


// <Route path="/superadmin/*" element={<SuperAdmin dataProvider={dataProvider} />} />