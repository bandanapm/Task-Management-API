Author    : Bandana Pachabhaiya Magar
Student Id: C0916126

------------------------------------------------
Task Management API with Frontend
Overview
This project is a simple Task Management API built using Node.js and Express.js, with a front-end interface built using HTML, CSS, and JavaScript. It allows users to:

Add tasks with a title and description.
Edit existing tasks.
Mark tasks as complete or incomplete.
Delete tasks.
See alerts when trying to add duplicate tasks.
Features
Add Task: Users can add tasks by providing a title and description. If a task with the same title and description already exists, an alert will notify the user that the task is duplicated.
Edit Task: Users can update task details (title and description) using the "Edit" button.
Mark as Complete/Incomplete: Users can toggle the completion status of a task. Once a task is marked as complete, the button changes to "Mark as Incomplete," and vice versa.
Delete Task: Users can delete tasks they no longer need.
Dynamic UI: The task list dynamically updates when tasks are added, edited, or deleted, without requiring a page reload.
Prerequisites
Node.js installed on your system
npm (Node Package Manager)

----------------------------------------------------------
Setup Instructions
1. Install Dependencies
    After navigating to the project directory, install the necessary dependencies by running:

    bash
    Copy code
    npm install
2. Start the Server
    To start the Express server, run the following command:

    bash
    Copy code
    node index.js
    By default, the server will run on http://localhost:3000.

3. Access the Application
    Once the server is running, open your browser and navigate to http://localhost:3000 to access the task management front end.

    API Endpoints
    Get All Tasks
    GET /tasks

    Returns the list of all tasks.

    Add a Task
    POST /tasks

    Request Body (JSON):

    json
    Copy code
    {
    "title": "Task Title",
    "description": "Task Description"
    }
    Update a Task
    PUT /tasks/:id

    Request Body (JSON):

    json
    Copy code
    {
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "completed": true
    }
    Delete a Task
    DELETE /tasks/:id

    Deletes the task with the specified id.

    Front-End Interaction
    The front-end dynamically interacts with the API through fetch calls, performing the following actions:

    Add Task: Users input a task title and description, then click the "Add Task" button to submit.
    Edit Task: Clicking the "Edit" button will populate the form with the task's current details, allowing for editing.
    Mark as Complete/Incomplete: The task can be marked as complete or incomplete by toggling the button.
    Delete Task: Clicking the "Delete" button will remove the task.

--------------------------------------------------------------------    
Project Structure

Copy code
├── node_modules
├── index.js         # Main server file (API)  
├── public/ 
|   ├── index.html   # Front-end HTML 
|   ├──style.css     # Stylesheet for front-end 
├── package.json     # Project dependencies and metadata
├── package-lock.json     
└── README.md        # Project documentation


--------------------------------------------------------------------------
Future Improvements
    Implement persistent storage using a database such as MongoDB or SQLite instead of in-memory storage.
    Add user authentication for managing personal task lists.
    Add categories or tags for better task organization.
    Improve front-end design with a responsive layout.


----------------------------------------------------------------------------