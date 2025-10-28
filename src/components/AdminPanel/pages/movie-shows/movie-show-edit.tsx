import { DateInput, DateTimeInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MovieShowEdit = () => (    
<Edit title="Edit Show">        
    <SimpleForm>            
      <DateInput source="showDate" />
      <DateTimeInput source="showTime"/>
      <NumberInput source="movieId" label="Movie"/>
      <NumberInput source="theatreId" label="Theatre"/>
      <NumberInput source="totalPrice" />
      <NumberInput source="seats" />
      <TextInput source="status"/>       
    </SimpleForm>    
</Edit>);