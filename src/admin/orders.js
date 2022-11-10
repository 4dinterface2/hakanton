import * as React from "react";
import {
    List, Datagrid, TextField, ReferenceField, EditButton, TextInput, ReferenceInput,
} from 'react-admin';
import MainCard from '../ui-component/cards/MainCard';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
    ];

export const OrdersList = () => (
        <MainCard>
            <List filters={postFilters}>
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <ReferenceField source="userId" reference="users" />
                    <TextField source="title" />
                    <TextField source="body" />
                </Datagrid>
            </List>
        </MainCard>
);
