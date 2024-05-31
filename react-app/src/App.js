import React, { useState } from 'react'; // librbary and hook to add states
import Button from './Button'; // custom imported component

const App = () => { // declare functional component
  const [data, setData] = useState(null); 
  // data: A state variable to hold the API response data.
  // setData: A function to update the data state.
  // useState(null): Initializes the state to null.

  // API Call handlers
  // ** version with results of the API calls logged to the console instead of
  // published on the website 
  const handleGetAll = async () => {
    try {
      const response = await fetch('http://localhost:3000/post');
      const result = await response.json();
      setData(result); // ** console.log(data);
    } catch (error) {
      console.error('Error fetching all data:', error);
    }
  };

  const handleGetOne = async () => {
    try {
      const response = await fetch('http://localhost:3000/post/1');
      const result = await response.json();
      setData(result); // ** console.log(data);
    } catch (error) {
      console.error('Error fetching one data:', error);
    }
  };

  const handlePostOne = async () => {
    try {
      const response = await fetch('http://localhost:3000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: 'Seven' }),
      });
      const result = await response.json();
      setData(result); // ** console.log(result);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleDeleteOne = async () => {
    try {
      const response = await fetch('http://localhost:3000/post/5', {
        method: 'DELETE',
      });
      const result = await response.json();
      setData(result); // ** console.log(result);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return ( 
    // Renders four Button components, 
    // each triggering a different API call when clicked.
    <div>
      <Button onClick={handleGetAll}>GET ALL</Button>
      <Button onClick={handleGetOne}>GET ONE</Button>
      <Button onClick={handlePostOne}>POST ONE</Button>
      <Button onClick={handleDeleteOne}>DELETE ONE</Button>
      <div>
        <Comment>Comment below out is want to use console</Comment>
        <h3>API Response:</h3>
        <pre>{data ? JSON.stringify(data, null, 2) : 'No data'}</pre>
      </div>
    </div>
  );
};

export default App;