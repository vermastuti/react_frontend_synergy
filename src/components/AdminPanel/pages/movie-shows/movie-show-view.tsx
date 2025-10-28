import { DateField, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const MovieShowView = () => (
  <Show title="View Show">         
    <SimpleShowLayout>            
      <NumberField source="showId" />
      <DateField source="showDate" />
      <DateField source="showTime" showDate={false} />
      <NumberField source="movieId" label="Movie"/>
      <NumberField source="theatreId" label="Theatre"/>
      <NumberField source="totalPrice" />
      <NumberField source="availableSeats" /> 
      <TextField source="status"/> 
    </SimpleShowLayout>    
</Show>
);