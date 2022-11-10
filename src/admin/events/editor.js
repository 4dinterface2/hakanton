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

export default function Editor(){
    return (<>
        <TabbedForm>
            <FormTab
                label="описание"
                sx={{ maxWidth: '40em' }}
                >
                <TextInput label='статус' source="status" />
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
                label="ресурсы"
                sx={{ maxWidth: '40em' }}>
                <h1> ресурсы </h1>
                <h1> - нозвание </h1>
                <h1> - дата бронирования </h1>
                <h1> - цена</h1>
            </FormTab>

            <FormTab
                label="Цена"
                sx={{ maxWidth: '40em' }}>
                <TextInput  label="Цена за обучение" source="price" />
                <h1> ИТОГОВАЯ СТОИМОСТЬ: </h1>
            </FormTab>
        </TabbedForm>
    </>)
}