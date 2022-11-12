import * as React from "react";
import {
    List, Datagrid, TextField, ReferenceField, EditButton,
    TextInput, ReferenceInput, Edit, Create, NumberField, SimpleForm,
    ImageInput, ImageField, NumberInput,
    CheckboxGroupInput,
} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

import MainCard from '../../ui-component/cards/MainCard';
import {Input} from "@mui/material";

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

function Editor(){
    return <SimpleForm>
        <Grid container spacing={2}>

            <Grid item xs={12}>
                <TextInput label='имя' source="name" />
            </Grid>

            <Grid item xs={12}>
                <NumberInput source="capacity" label='вместимость' />
            </Grid>

            <Grid item xs={12}>
                <CheckboxGroupInput source="roles" choices={[
                    { id: 'wifi', name: 'wi-fi' },
                    { id: 'tv', name: 'Телевизор' },
                    { id: 'cond', name: 'кондиционер' },
                    { id: 'jacuzzi', name: 'джакузи' },
                    ]} />
            </Grid>

            <Grid  item xs={12}>
                <RichTextInput source="body" xs={12}/>
            </Grid>

            <Grid item xs={12}>
                <ImageInput source="pictures" label="Related pictures" multiple={true}>
                    <ImageField source="src" title="title" />
                </ImageInput>
            </Grid>
        </Grid>
    </SimpleForm>
};


export const RoomEdit = () => (
        <Edit>
            <Editor/>
        </Edit>
        );

export const RoomCreate = props => (
        <Create {...props}>
            <Editor/>
        </Create>
        );

export function RoomsList () {
    return<MainCard>
        <List filters={postFilters}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="type" title='тип номера' />
                <NumberField source="capacity" title='вместимость' />
                <NumberField source="amount" title='количество номеров' />
                <EditButton />
            </Datagrid>
        </List>
    </MainCard>
};
