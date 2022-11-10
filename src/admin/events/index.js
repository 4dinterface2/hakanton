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
                <TextField source="title" />
                <TextField source="body" />
                <EditButton />
            </Datagrid>
        </List>
        );

export const EventEdit = () => (
        <Edit title={<PostTitle />}>
            <TabbedForm>
                <FormTab
                    label="описание"
                    sx={{ maxWidth: '40em' }}
                    >
                    <TextInput label='дата начала' source="name" />
                    <TextInput label='дата конца' source="name" />
                    <TextInput source="name" />
                    <TextInput multiline source="body" />

                </FormTab>

                <FormTab
                    label="Отель"
                    sx={{ maxWidth: '40em' }}
                    >
                    <TextInput  label="Отель" source="name" />
                    <TextInput  label="даты" multiline source="body" />
                    <TextInput  label="номер по умолчания" multiline source="body" />
                    <div
                        >количество мест<br/><br/>
                    </div>
                    <TextInput  label="количество людей" multiline source="body" />
                </FormTab>

                <FormTab
                    label="Цена"
                    sx={{ maxWidth: '40em' }}>
                    <TextInput  label="Цена за обучение" source="name" />
                    <h1> ИТОГОВАЯ СТОИМОСТЬ: </h1>
                </FormTab>
                
            </TabbedForm>
        </Edit>
        );

export const EventCreate = props => (
        <Create {...props}>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users" />
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
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
