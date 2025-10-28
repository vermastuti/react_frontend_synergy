import { DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const MovieEdit = () => (    
<Edit title="Edit Movie">        
    <SimpleForm>            
      <TextInput source="title" />
      <TextInput source="genre" />
      <NumberInput source="rating" />
      <DateInput source="releaseDate" />
      <TextInput source="mlanguage" label="Language"/>
      <TextInput source="duration" />
      <TextInput source="status" />       
    </SimpleForm>    
</Edit>
);