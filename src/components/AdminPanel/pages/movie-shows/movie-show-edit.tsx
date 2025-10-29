import { DateInput, DateTimeInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, TimeInput } from 'react-admin';


// Define the transform function
const transformShowData = (data) => {
    // Make a copy of the data to avoid direct mutation
    const transformedData = { ...data };

    // Format the time correctly
    if (transformedData.showTime instanceof Date) {
        // Use toISOString() and extract the HH:mm:ss part
        transformedData.showTime = transformedData.showTime.toISOString().substring(11, 19);
    }
    
    // Ensure all numeric inputs are parsed as numbers
    transformedData.seats = parseInt(transformedData.seats, 10);
    transformedData.totalPrice = parseFloat(transformedData.totalPrice);

    return transformedData;
};

export const MovieShowEdit = () => (    
<Edit title="Edit Show" transform={transformShowData}>        
    <SimpleForm>            
      <DateInput source="showDate" />
      <TimeInput source="showTime" label="Show Time"/>
      <ReferenceInput source="movieId" label="Movie" reference='movies'/>
      <ReferenceInput source="theatreId" label="Theatre" reference='theatre'/>
      <NumberInput source="totalPrice" />
      <NumberInput source="seats" />
      <TextInput source="status"/>       
    </SimpleForm>    
</Edit>);