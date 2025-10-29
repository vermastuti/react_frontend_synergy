import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  TextInput,
  NumberInput,
  useRecordContext,
} from 'react-admin';


const TheatrePanel = () => {
  const record = useRecordContext();
  return <div>{record ? `Located in: ${record.city}` : 'No details available'}</div>;
};

export const TheatreList = (props: any) => {
  // for searching theatres
  const theatreFilters = [
    <TextInput
      source="q"
      label="Search by Name or City"
      alwaysOn
      sx={{ width: '400px' }}
    />,
    <TextInput source="city" label="Filter by City" />,
    <NumberInput source="seats_gte" label="Seats greater than" />,
  ];

  return (
    <List
      title="List of Theatres"
      filters={theatreFilters}
      {...props}
    >
      <Datagrid
        // expand={<TheatrePanel />}
        sx={{
          '.RaDatagrid-headerCell': { padding: '5px' },
        }}
      >
        <NumberField source="id" label="Theatre ID" />
        <TextField source="name" label="Theatre Name" />
        <TextField source="city" label="City" />
        {/* <NumberField source="seats" label="Seats" /> */}
        <EditButton />
      </Datagrid>
    </List>
  );
};
