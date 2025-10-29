import { DateField, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const MovieView = () => (
  <Show title="Movie Details">         
    <SimpleShowLayout>            
      <TextField source="title" />
      <TextField source="genre" />
      <NumberField source="rating" />
      <DateField source="releaseDate" />
      <TextField source="mlanguage" label="Language"/>
      <TextField source="duration" />
      <TextField source="status" />  
      <TextField source="image"/>  
    </SimpleShowLayout>    
</Show>
);