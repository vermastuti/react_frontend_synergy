import { Create, DateInput, DateTimeInput, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput, TimeInput } from "react-admin";

const transformShowData = (data) => {
    const transformedData = { ...data };

    if (transformedData.showTime instanceof Date) {
        const istFormatter = new Intl.DateTimeFormat('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false, 
            timeZone: 'Asia/Kolkata', 
        });

        transformedData.showTime = istFormatter.format(transformedData.showTime);
    }
    
    transformedData.seats = parseInt(transformedData.seats, 10);
    transformedData.totalPrice = parseFloat(transformedData.totalPrice);

    return transformedData;
};

const mutationOptions = {
    onSuccess: (data) => {
        console.log('Movie Show created successfully:', data);},
};

export const MovieShowCreate = () => (
  <Create title="Add Movie Show" transform={transformShowData} mutationOptions={mutationOptions}>
    <SimpleForm>
      <DateInput source="showDate"/>
      <TimeInput source="showTime" label="Show Time"/>
      <ReferenceInput source="movieId" label="Movie" reference="movies"/>
      <ReferenceInput source="theatreId" label="Theatre" reference="theatre"/>
      <NumberInput source="totalPrice" />
      <NumberInput source="seats" />
      <SelectInput
        source="status"
        label="Status"
        choices={[
          { id: 'Available', name: 'Available' },
          { id: 'Cancelled', name: 'Cancelled' },
        ]}/>
    </SimpleForm>
  </Create>
);