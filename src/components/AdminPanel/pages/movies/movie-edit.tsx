import { DateInput, Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';


const mutationOptions = {
    onSuccess: (data) => {
        console.log('Movie Show updated successfully:', data);},
};

export const MovieEdit = () => (    
<Edit title="Edit Movie" mutationOptions={mutationOptions}>        
    <SimpleForm>            
      <TextInput source="title" />
      <SelectInput
        source="genre"
        label="Genre"
        choices={[
          { id: 'ROMANTIC', name: 'ROMANTIC' },
          { id: 'ACTION', name: 'ACTION' },
          { id: 'COMEDY', name: 'COMEDY' },
          { id: 'DRAMA', name: 'DRAMA' },
          { id: 'THRILLER', name: 'THRILLER' },
          { id: 'TRAVEL', name: 'TRAVEL' },
        ]}/>
      <NumberInput source="rating" />
      <DateInput source="releaseDate" />
      <SelectInput
        source="mlanguage"
        label="Language"
        choices={[
          { id: 'HINDI', name: 'HINDI' },
          { id: 'ENGLISH', name: 'ENGLISH' },
          { id: 'TAMIL', name: 'TAMIL' },
          { id: 'TELUGU', name: 'TELUGU' },
          { id: 'MARATHI', name: 'MARATHI' },
          { id: 'MALAYALAM', name: 'MALAYALAM' },
          { id: 'BENGALI', name: 'BENGALI' },
          { id: 'BHOJPURI', name: 'BHOJPURI' },
        ]}/>
      <TextInput source="duration" />
      <SelectInput
        source="status"
        label="Status"
        choices={[
          { id: 'UPCOMING', name: 'UPCOMING' },
          { id: 'RELEASED', name: 'RELEASED' },
        ]}/> 
      <TextInput source="image"/>      
    </SimpleForm>    
</Edit>
);


