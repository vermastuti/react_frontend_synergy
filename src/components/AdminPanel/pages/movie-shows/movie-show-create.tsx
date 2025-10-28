import { Create, DateInput, DateTimeInput, NumberInput, SimpleForm, TextInput } from "react-admin";


export const MovieShowCreate = () => (
  <Create title="Add Show">
    <SimpleForm>
      <NumberInput source="showId" />
      {/* <DateInput source="showDate" />
      <DateTimeInput source="showTime"/>
      <NumberInput source="movieId" label="Movie"/>
      <NumberInput source="theatreId" label="Theatre"/>
      <NumberInput source="totalPrice" /> */}
      <NumberInput source="availableSeats" />
      <TextInput source="status"/>    
    </SimpleForm>
  </Create>
);