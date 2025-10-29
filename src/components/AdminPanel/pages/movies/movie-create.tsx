import { Create, DateInput, NumberInput, SelectInput, SimpleForm, TextInput } from "react-admin";


const mutationOptions = {
    onSuccess: (data) => {
        console.log('Movie created successfully:', data);},
};

export const MovieCreate = () => (
  <Create title="Add Movie" mutationOptions={mutationOptions}>
    <SimpleForm>
      <TextInput source="title" label="Title"/>
      {/* <TextInput source="genre" /> */}
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
      <NumberInput source="rating" label="Rating"/>
      <DateInput source="releaseDate" label="Release Date"/>
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
      <TextInput source="duration" label="Duration"/>
      <SelectInput
        source="status"
        label="Status"
        choices={[
          { id: 'UPCOMING', name: 'UPCOMING' },
          { id: 'RELEASED', name: 'RELEASED' },
        ]}/>
      <TextInput source="image" label="Public Image URL"/>    
    </SimpleForm>
  </Create>
);