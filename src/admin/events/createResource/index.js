function Editor(){
    return <SimpleForm>
        <TextInput label='название' source="name"/>
        <TextInput label='цена' source="price"/>
    </SimpleForm>
}


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