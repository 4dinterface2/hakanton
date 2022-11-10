import * as React from "react";
import {
    List, Datagrid, TextField, ReferenceField, EditButton, TextInput, ReferenceInput,
} from 'react-admin';

import MainCard from '../ui-component/cards/MainCard';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
    ];

export default function RoomsList () {
    return <MainCard>
        <List filters={postFilters}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="title" title='тип номера' />
                <TextField source="title" title='вместимость' />
                <TextField source="title" title='количество номеров' />
                <EditButton />
            </Datagrid>
        </List>
    </MainCard>
};
