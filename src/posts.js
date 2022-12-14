import * as React from "react";
import {
    List, Datagrid, TextField, ReferenceField, EditButton, TextInput, ReferenceInput,
    SimpleForm,
    Edit,
    Create,
    useRecordContext

} from 'react-admin';


const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostList = () => (
        <List filters={postFilters}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <ReferenceField source="userId" reference="users" />
                <TextField source="title" />
                <TextField source="body" />
                <EditButton />
            </Datagrid>
        </List>
        );

export const PostEdit = () => (
        <Edit title={<PostTitle />}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <ReferenceInput source="userId" reference="users" />
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
        </Edit>
        );

export const PostCreate = props => (
    <Create {...props}>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users" />
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
    </Create>
);