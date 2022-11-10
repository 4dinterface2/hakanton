import * as React from "react";
import {
    List, Datagrid, TextField, ReferenceField, EditButton, TextInput, ReferenceInput,
    SimpleForm,
    Edit,
    Create,
    useRecordContext,
    TabbedForm,
    FormTab,
    ReferenceArrayField
} from 'react-admin';

import Editor from './editor';


const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const EventsList = () => (
        <List filters={postFilters}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <ReferenceField source="userId" reference="users" />
                <TextField source="price" />
                <EditButton />
            </Datagrid>
        </List>
        );




export const EventEdit = () => (
        <Edit title={<PostTitle />}>
            <Editor/>
        </Edit>
        );

export const EventCreate = props => (
        <Create {...props}>
            <Editor/>
        </Create>
        );

/*
<FormTab
    label="прогграмма"
    sx={{ maxWidth: '40em' }}
    >
    <TextInput disabled source="id" />
    <ReferenceInput source="userId" reference="users" />
    <TextInput source="title" />
    <TextInput multiline source="body" />
</FormTab>*/

//= <FormTab
//    label="участники"
//    sx={{ maxWidth: '40em' }}
//    >
//    <TextInput disabled source="id" />

//    <ReferenceArrayField label="Tags" reference="customers" source="customers">
//        <Datagrid>
//            <TextField source="id" />
//            <ReferenceField source="userId" reference="users" />
//            <TextField source="title" />
//            <TextField source="body" />
//            <EditButton />
//        </Datagrid>
//    </ReferenceArrayField>
