import React, { useState } from 'react';
import Button from './Button';

const App = () => {
  const [data, setData] = useState(null); // State to hold the API response data

  const handleGetAll = async () => {
    try {
      const response = await fetch('http://localhost:3000/post');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching all data:', error);
    }
  };

  const handleGetOne = async () => {
    try {
      const response = await fetch('http://localhost:3000/post/1');
      const result = await response.json();
      setData(result);
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
      setData(result);
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
      setData(result);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <Button onClick={handleGetAll}>GET ALL</Button>
      <Button onClick={handleGetOne}>GET ONE</Button>
      <Button onClick={handlePostOne}>POST ONE</Button>
      <Button onClick={handleDeleteOne}>DELETE ONE</Button>
      <div>
        <h3>API Response:</h3>
        <pre>{data ? JSON.stringify(data, null, 2) : 'No data'}</pre>
      </div>
    </div>
  );
};

export default App;


// // src/App.js
// import React from 'react';
// import Button from './Button';

// const App = () => {
//   const handleGetAll = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/post');
//       if (!response.ok) throw new Error('Network response was not ok');
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Fetch error:', error);
//     }
//   };
  
//   const handleGetOne = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/post/1');
//       if (!response.ok) throw new Error('Network response was not ok');
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Fetch error:', error);
//     }
//   };
  
//   const handlePostOne = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/post', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ value: 'Seven' }),
//       });
//       if (!response.ok) throw new Error('Network response was not ok');
//       const result = await response.json();
//       console.log(result);
//     } catch (error) {
//       console.error('Fetch error:', error);
//     }
//   };
  
//   const handleDeleteOne = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/post/5', {
//         method: 'DELETE',
//       });
//       if (!response.ok) throw new Error('Network response was not ok');
//       const result = await response.json();
//       console.log(result);
//     } catch (error) {
//       console.error('Fetch error:', error);
//     }
//   };
  
//   // const handleGetAll = async () => {
//   //   const response = await fetch('http://localhost:3000/post');
//   //   const data = await response.json();
//   //   console.log(data);
//   // };

//   // const handleGetOne = async () => {
//   //   const response = await fetch('http://localhost:3000/post/1');
//   //   const data = await response.json();
//   //   console.log(data);
//   // };

//   // const handlePostOne = async () => {
//   //   const response = await fetch('http://localhost:3000/post', {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify({ value: 'Seven' }),
//   //   });
//   //   const result = await response.json();
//   //   console.log(result);
//   // };

//   // const handleDeleteOne = async () => {
//   //   const response = await fetch('http://localhost:3000/post/5', {
//   //     method: 'DELETE',
//   //   });
//   //   const result = await response.json();
//   //   console.log(result);
//   // };

//   return (
//     <div>
//       <Button onClick={handleGetAll}>GET ALL</Button>
//       <Button onClick={handleGetOne}>GET ONE</Button>
//       <Button onClick={handlePostOne}>POST ONE</Button>
//       <Button onClick={handleDeleteOne}>DELETE ONE</Button>
//     </div>
//   );
// };



// export default App;
