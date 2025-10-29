import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
  TextInput,
  ReferenceInput,
  useRecordContext,
  FunctionField,
  DateInput,
  NumberInput,
} from 'react-admin';


const MoviePanel = () => {
    const record = useRecordContext();
    return <div>{record?.body}</div>;
};

export const MovieList = (props: any) => {

    const movieFilters = [
            <TextInput source='q' label="Search by title, genre or status" alwaysOn  
                        sx={{ width: '400px' }} // 100% on small screens, 50% on medium screens and up
            />,
            <DateInput source='releaseDate_gte' label="Released After"/>,
            <NumberInput source='rating_gt' label="Rating Greater Than" />
    ]; 
    
    return (
   <List title="List of Movies" filters={movieFilters} {...props}>
        <Datagrid
            bulkActionButtons={false}
            sx={{
                ".RaDatagrid-headerCell": {padding: "5px",},
            }}
        >
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="genre" />
            <TextField source="releaseDate" /> 
            <NumberField source="rating" />
            <TextField source="status" /> 
            <EditButton />
        </Datagrid>
    </List>
    );
};