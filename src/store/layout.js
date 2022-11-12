import { Layout, Sidebar } from 'react-admin';
import * as React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@mui/material/Typography';
import s from './events/index.module.css'



export const MyLayout = props => <Layout {...props} sidebar={MySidebar}/>;



export const MySidebar = (props) => (
    <Sidebar >
        <div >
        <ul className={s.name}>Все рубрики:</ul>
        <li className={s.name}>Личная эффективность</li>
        <li className={s.name}>Тренинги для руководителей</li>
        <ul className={s.name}>Места:</ul>
        <li className={s.name}>Актау</li>
        <li className={s.name}>Алма-Ата</li>
        <li className={s.name}>Астана</li>
        </div>
    </Sidebar>
);