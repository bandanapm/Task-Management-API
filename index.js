const express = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path'); // Import path to serve static files

const app = express();
const port = 3000;

// Serve static files (CSS, images, etc.) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// In-memory array to store tasks
const tasks = [];

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, public, 'index.html'));
});

// Task management routes (as previously implemented)
app.get('/tasks', (req, res) => res.json(tasks));

// POST /tasks: Add a new task
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;

    // Check if the title and description are provided
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    // Check if a task with the same title and description already exists
    const duplicateTask = tasks.find(task => task.title === title && task.description === description);
    if (duplicateTask) {
        return res.status(400).json({ error: 'This task is already added' });
    }

    // If no duplicate task exists, add the new task
    const newTask = { id: uuidv4(), title, description, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});


app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = tasks.find(t => t.id === id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    if (title) task.title = title;
    if (description) task.description = description;
    if (completed !== undefined) task.completed = completed;
    res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' });
    tasks.splice(taskIndex, 1);
    res.status(204).send();
});

// Start server
app.listen(port, () => {
    console.log(`Task management API running at http://localhost:${port}`);
});
