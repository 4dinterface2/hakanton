import * as React from "react";
import {
    NumberField,
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    TextInput,
    ReferenceInput,
    NumberInput,
    SimpleForm,
    Edit,
    Create
} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

import MainCard from '../../ui-component/cards/MainCard';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

function Editor(){
    return <SimpleForm>
        <TextInput label='название' source="name"/>
        <RichTextInput label='описание' source="description"/>
        <NumberInput label='цена' source="price"/>
    </SimpleForm>
}

export const ResourseEdit = () => (
        <Edit>
            <Editor/>
        </Edit>
        );

export const ResourceCreate = props => (
        <Create {...props}>
            <Editor/>
        </Create>
        );



export function ResurceList () {
    return <MainCard>
        <List filters={postFilters} >
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" title='ресурс' />
                <NumberField source="price" title='ресурс' />
                <TextField source="description" title='описаниеx' />
                <EditButton />
            </Datagrid>
        </List>
    </MainCard>
};