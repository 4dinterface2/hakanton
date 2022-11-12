import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
    List, Datagrid, TextField, ReferenceField, EditButton, TextInput, ReferenceInput,
    SimpleForm,
    Edit,
    Create,
    useRecordContext,
    TabbedForm,
    FormTab,
    ReferenceArrayField,
    RecordContextProvider,
    useListContext,
    useGetList,
    ImageField,
    Link,

} from 'react-admin';
import s from './index.module.css'
import {
    Card,
    CardActions,
    Grid,
    Typography,
    CardMedia,
    CardContent

} from '@mui/material';


const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const EventsListGrid = () => {

    const { data, isLoading } = useListContext();
    if (isLoading) return null;
    return (
        <Grid container spacing={1}     >
            {data.map(record => (

                <RecordContextProvider key={record.id} value={record}>
                    <Grid item sm={4} >
                        <Card>
                            <TextField source="eventName" />
                            <div></div>
                            <TextField source="eventOrganizer" />
                            <ImageField source="img" sx={{ '& img': { maxWidth: 600, maxHeight: 600, objectFit: 'contain' } }} />
                            <ReferenceField source="userId" reference="users" />
                            <TextField source="title" />
                            <TextField source="body" />

                        </Card>
                    </Grid>
                </RecordContextProvider>

            )
            )}

        </Grid>
    )
};


export const EventsListGridTest = () => {
    const clickHendler = React.useCallback((id) => { 
        navigate("/" + id) }, [])
    const navigate = useNavigate();
    const { data, isLoading } = useListContext();
    if (isLoading) return null;
    return (
        <Grid container spacing={1}     >
            {data.map(record => (

                <RecordContextProvider key={record.id} value={record}>

                    <Grid item sm={4} >
                        <Card class={s.imgblock} sm={4} style={{ width: '100%', padding: '0px', }}>
                            <CardContent sx={{ position: 'relative', padding: '0px' }} class={s.cardContent} >
                                <div class={s.cardmedia}>
                                    <CardMedia onClick={()=>clickHendler(record.id)}
                                        component='img'
                                        image={record.img}
                                        sx={{ height: 300, padding: 0, }}
                                    />

                                    <Typography class={s.text}

                                        variant="h5"
                                        component="h2"
                                        align="center"
                                    >
                                        {record.eventOrganizer}

                                        <div class={s.datatext} >
                                            <div style={{ flex: 1 }}>{record.date}</div>
                                            <span>{record.cost}</span>

                                        </div>
                                    </Typography>

                                </div>
                            </CardContent>
                        </Card>
                    </Grid>

                </RecordContextProvider>

            )
            )}

        </Grid>
    )
};

export const EventsList = () => (

    <List>
        <EventsListGridTest />
    </List>
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
