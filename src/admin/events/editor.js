import * as React from "react";
import {
    List, Datagrid, TextField, ReferenceField, EditButton, TextInput, ReferenceInput,
    SimpleForm,
    Edit,
    Create,
    useRecordContext,
    ReferenceArrayField,
    TabbedForm,
    FormTab,
    DateInput,
    SelectInput,
    NumberInput
} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Editor(){
    return (<>
        <TabbedForm>

            <FormTab
                label="описание"
                >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextInput label='имя' source="name" />
                    </Grid>

                    <Grid item xs={12}>
                        <SelectInput label='статус' source="category" choices={[
                            { id: '0', name: 'в проекте' },
                            { id: '1', name: 'на утверждение' },
                            { id: '2', name: 'продается' },
                            { id: '3', name: 'идет' },
                            { id: '4', name: 'завершен' },
                            { id: '5', name: 'отменен' },
                            ]} />
                    </Grid>

                    <Grid item xs={2}>
                        <DateInput label='дата начала' source="startDate" />
                    </Grid>
                    <Grid item xs={2}>
                        <DateInput label='дата конца'  source="endDate" />
                    </Grid>
                    <Grid item xs={12}>
                        <RichTextInput source="body" />
                    </Grid>
                </Grid>
            </FormTab>

            <FormTab
                label="Отель"
                sx={{ }}
                >
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <ReferenceInput label="Отель" source="hotel_id" reference="hotels">
                            <SelectInput />
                        </ReferenceInput>
                    </Grid>

                    <Grid item xs={2}>
                        <DateInput label='дата заезда' source="startDate" />
                    </Grid>

                    <Grid item xs={2}>
                        <NumberInput label="ночей" source="length" />
                    </Grid>

                    <Grid item xs={12}>
                        <ReferenceInput label="Отель" source="room_id" reference="rooms">
                            <SelectInput />
                        </ReferenceInput>
                    </Grid>

                    <Grid item xs={12}>
                        <NumberInput  label="количество людей" multiline source="body" />
                    </Grid>

                </Grid>
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