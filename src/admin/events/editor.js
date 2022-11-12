import * as React from "react";
import {
    List, Datagrid, TextField, ReferenceField, EditButton, TextInput, ReferenceInput,
    UrlField,
    TabbedForm,
    FormTab,
    DateInput,
    SelectInput,
    NumberInput,
    DateField,
    ReferenceArrayInput,
    TopToolbar,
    FilterButton,
    CreateButton,
    ExportButton,
    Button,
    ArrayInput,
    SimpleFormIterator,
    useRecordContext,
    useStoreContext,
    useDataProvider,
    useGetOne
} from 'react-admin';

import { RichTextInput } from 'ra-input-rich-text';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconEvent from '@mui/icons-material/Event';
import { addResource } from './';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ListActions = () => (
        <TopToolbar>

            <CreateButton/>
            <ExportButton/>
            {/* Add your custom actions */}
            <Button
                onClick={() => { alert('Your custom action'); }}
                label="Show calendar"
                >
                <IconEvent/>
            </Button>
        </TopToolbar>
        );

export function ResourceList()  {
    return (<List actions={<ListActions/>}  sx={{ border:'1px solid blue', width: '100%' }}>
            <Datagrid sx={{ border:'1px solid blue'}}>
                <DateField source="date" />
                <UrlField source="url" />
                <EditButton />
            </Datagrid>
    </List>)
};


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
                sx={{ maxWidth: '100%' }}>

                <ArrayInput source="resources">
                    <SimpleFormIterator inline>
                                <ReferenceInput source="resource" reference="resources" >
                                    <SelectInput optionText="name" />
                                </ReferenceInput>
                                <DateInput label='дата' source="date" />
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>

            <FormTab
                label="Цена"
                sx={{ maxWidth: '40em' }}>
                <Price />
            </FormTab>

        </TabbedForm>
    </>)
}


function Price({}){
    const [state, setState] = React.useState(0);
    const [actualState, setActualState] = React.useState();
    const [collection, setCollection] = React.useState([]);
    const dataProvider = useDataProvider();
    const record = useRecordContext();
    console.log('rrr', record);

    React.useEffect(()=>{
        if(!record)
            return;

        let price=record.price;
        let result = [];
        record.resources.forEach(async item => {
            const recordResource = await dataProvider.getOne('resources', { id: item.resource });
            price += recordResource?.data?.price ?? 0;
            result.push({
                ...item,
                price: recordResource.data.price ?? 0,
                name: recordResource.data.name,
            });
            setState(price);
            setCollection(result);
        });
       // console.log('!!! record=>' ,record);
    }, [record])

    if(!record)
        return;

    const myPrice = actualState ?? record?.price ?? 0;
    console.log('collection=', collection);
    console.log('record=', record);

    return <div>
        <NumberInput  label="Цена за обучение" source="price" inputProps={{
            onChange: e => {
                console.log('sdedede', e.target.value)
                setCollection([...collection]);
                setActualState(Number(e.target.value));
            },
        }}/>
        {collection.map(item=>( <div>{item.name} - {item.price} </div> ))}
        <h1> ИТОГОВАЯ СТОИМОСТЬ: {state + myPrice} </h1>
    </div>;
}

//function PriceItem({record, state, useState}){
//   // console.log('record.id', record);
//   const { data, isLoading, error, refetch } = useGetOne('resources', { id: record.resource });
//   if(isLoading)
//       return 'loading...';
//    return <div>
//        {data?.name} / {data?.price} / {record?.resource}
//    </div>
//}

//function PriceList(){
//    const record = useRecordContext();
//    console.log('!!!!', record);
//    const [state, setState] = React.useState(0);
//    // console.log('record.resources=', record.resources);
//    if (!record) return null;
//
//     record.resources?.map((item)=>{
//        console.log('item=', item);
//        // return <PriceItem record={item} state={state} setState={setState}/>
//    })
//    return null;
//}
//
//function ResourcesSelectInput(){
//   return <ReferenceArrayInput label="name" reference="resources" source="resource">
//       <SelectInput optionText="name" />
//   </ReferenceArrayInput>
//}

// <ReferenceArrayInput label="Tags" reference="resources" source="resources">
//    <ResourceList/>
// </ReferenceArrayInput>