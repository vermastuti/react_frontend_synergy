import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const MovieShowView = () => (
  <Show title="Show Details">         
    <SimpleShowLayout>            
      <NumberField source="showId" />
      <DateField source="showDate" />
      <TextField source="showTime" />
      <ReferenceField source="movieId" label="Movie" reference='movies'/>
      <ReferenceField source="theatreId" label="Theatre" reference='theatre'/>
      <NumberField source="totalPrice" />
      <NumberField source="seats" /> 
      <TextField source="status"/> 
    </SimpleShowLayout>    
</Show>
);