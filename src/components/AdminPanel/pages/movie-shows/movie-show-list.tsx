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
  DateField,
} from 'react-admin';


const MoviePanel = () => {
    const record = useRecordContext();
    return <div>{record?.body}</div>;
};

export const MovieShowList = (props: any) => {

    const movieFilters = [
            <TextInput source='q' label="Search by title, genre or status" alwaysOn  
                        sx={{ width: '400px' }} // 100% on small screens, 50% on medium screens and up
            />,
            <DateInput source='releaseDate_gte' label="Released After"/>,
            <NumberInput source='rating_gt' label="Rating Greater Than" />
    ]; 
    
    return (
   <List title="Shows" filters={movieFilters} {...props}>
        <Datagrid
            sx={{
                ".RaDatagrid-headerCell": {padding: "5px",},
            }}
        >
            <NumberField source="showId" />
            <DateField source="showDate" />
            <DateField source="showTime" showDate={false} showTime={true} />
            <NumberField source="movieId" label="Movie"/>
            <NumberField source="theatreId" label="Theatre"/>
            <NumberField source="totalPrice" />
            <NumberField source="availableSeats" /> 
            <TextField source="status"/> 
            <EditButton />
        {/* <DeleteButton /> */}
        </Datagrid>
    </List>
    );
};

