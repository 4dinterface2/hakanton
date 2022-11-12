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

//export const EventsListGrid = () => {
//
//    const { data, isLoading } = useListContext();
//    if (isLoading) return null;
//    return (
//        <Grid container spacing={1}     >
//            {data.map(record => (
//
//                <RecordContextProvider key={record.id} value={record}>
//                    <Grid item sm={4} >
//                        <Card>
//                            <TextField source="eventName" />
//                            <div></div>
//                            <TextField source="eventOrganizer" />
//                            <ImageField source="img" sx={{ '& img': { maxWidth: 600, maxHeight: 600, objectFit: 'contain' } }} />
//                            <ReferenceField source="userId" reference="users" />
//                            <TextField source="title" />
//                            <TextField source="body" />
//
//                        </Card>
//                    </Grid>
//                </RecordContextProvider>
//
//            )
//            )}
//
//        </Grid>
//    )
//};

const tempImagesUrls=[
    'https://synergyglobal.ru/img/speakers/card/norris-69d965e169.png',
    'https://n1s1.hsmedia.ru/83/80/d4/8380d41d9a97a7772293b0505a2672df/1200x629_0xac120003_14062640311647462667.jpeg',
    'http://superkarate.ru/uploads/posts/2013-07/1373013231_kungfu_1.jpeg',
    'https://synergyglobal.ru/img/speakers/card/brenson-59ccb56ace.png',
    'https://synergyglobal.ru/img/speakers/card/sigal-b103967aa4.png',
    'https://synergyglobal.ru/img/speakers/card/shaukat-b94c50c5e1.png',
    'https://synergyglobal.ru/img/speakers/card/kotler-a13d897e8b.png',
    'https://synergyglobal.ru/img/speakers/card/besson-81232d6750.png'
];

function EventCard({record, index}){
    const titleImg = tempImagesUrls[index];
    const clickHendler = React.useCallback((id) => navigate("/event/" + id) , [])
    const navigate = useNavigate();
    console.log('record = ', record);

    return <Card className={s.imgblock} sm={4} style={{ width: '100%', padding: '0px', }}>
        <CardContent sx={{ position: 'relative', padding: '0px' }} className={s.cardContent} >
            <div className={s.cardmedia}>
                <CardMedia onClick={()=>clickHendler(record.id)}
                    component='img'
                    image={record?.titleImg ?? titleImg}
                    sx={{ height: 300, padding: 0, }}
                />

                <Typography className={s.text}
                    variant="h5"
                    component="h2"
                    align="center"
                    >
                    <span style={{color: 'white'}}>{record.name}</span>

                    <div className={s.datatext} >
                        <div style={{ flex: 1, textAlign: 'left' }}>{record.startDate}</div>
                        <span>{record.price}</span>
                    </div>
                </Typography>

            </div>
        </CardContent>
    </Card>
}

export const EventsListGridTest = () => {
    const { data, isLoading } = useListContext();
    if (isLoading) return null;
    return (
        <Grid container spacing={1}     >
            {data.map((record, index) => (
                <RecordContextProvider key={record.id} value={record}>
                    <Grid item sm={4} >
                        <EventCard record={record} index={index} />
                    </Grid>
                </RecordContextProvider>
            ))}
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
