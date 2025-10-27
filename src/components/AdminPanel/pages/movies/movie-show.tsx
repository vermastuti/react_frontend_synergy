import { DateField, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const MovieShow = () => (
  <Show title="Show Movie">         
    <SimpleShowLayout>            
      <TextField source="title" />
      <TextField source="genre" />
      <NumberField source="rating" />
      <DateField source="releaseDate" />
      <TextField source="mlanguage" label="Language"/>
      <TextField source="duration" />
      <TextField source="status" />  
    </SimpleShowLayout>    
</Show>
);