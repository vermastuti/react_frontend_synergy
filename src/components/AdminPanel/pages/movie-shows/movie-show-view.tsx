import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const MovieShowView = () => (
  <Show title="View Show">         
    <SimpleShowLayout>            
      <NumberField source="showId" />
      <DateField source="showDate" />
      <TextField source="showTime" />
      <ReferenceField source="id" label="Movie" reference='movies'/>
      <ReferenceField source="id" label="Theatre" reference='theatre'/>
      <NumberField source="totalPrice" />
      <NumberField source="seats" /> 
      <TextField source="status"/> 
    </SimpleShowLayout>    
</Show>
);