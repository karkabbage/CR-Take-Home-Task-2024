const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// A temporary in-memory "database" 
const data = [
    {id: 1, value: 'One',},
    {id: 2, value: 'Two',},
    {id: 3, value: 'Three',},
    {id: 4, value: 'Four',},
    {id: 5, value: 'Five',}
];

// API end-points
// Get all posts
app.get('/post', (req, res) => {
    res.json(data);
});

// Get a post by id
app.get('/post/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = data.find(d => d.id === id);
    if (item) {
      res.json(item);
    } else {
      res.json({ status: 'fail' });
    }
});

// Create a object if it doesn't exist
app.post('/post', (req, res) => {
    const { value } = req.body;
    
    if (!value) {
        return res.status(400).json({ status: 'fail', message: 'Value is required' });
    }

    // check if data exists
    const post = data.some(item => item.value === value);
    
    if (!post) {
        const newId = data[data.length - 1].id + 1; // new id based on last object
        const newItem = { id: newId, value: value }; // new item object
        data.push(newItem) // push object into data
        res.json({ status: 'success' }); // status response
    } else {
        res.json({ status: 'fail' });
    }
});

// Delete an id 
app.delete('/post/:id', (req, res) => {
    // get supplied id
    const id = parseInt(req.params.id, 10); // Parse id to integer   
    const index = data.findIndex(item => item.id === id);
    // return status
    if (index !== -1) {
        // delete object
        const deletedItem = data.splice(index, 1)[0];
        res.json({ status: 'success' });
    } else {
        res.json({ status: 'fail' });
    }
});

// tart the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });