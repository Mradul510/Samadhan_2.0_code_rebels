# Samadhan 2.0 - Code Rebels

An educational AI-based project repository containing multiple **learning modules** that demonstrate programming concepts step by step. This project covers JavaScript basics, Node.js fundamentals, and Express.js API development.

---

## 📚 Learning Modules

### Day 1 - JavaScript Objects

- **Topic**: Object fundamentals
- **Goal**: Print student details from an Object
- **Skills**: Object manipulation, property access

### Day 2 - Arrays and Iteration

- **Topic**: Array methods and loops
- **Goal**: Find the highest marks from an Array
- **Skills**: Array iteration, Math operations, comparison logic

### Day 3 - Functions and Logic

- **Topic**: Function creation and calculations
- **Goal**: Simple Student Marks Calculator
- **Skills**: Function design, conditional logic, user input handling

### Day 4 - Node.js Basics

- **Topic**: Server setup with Express.js
- **Goal**: Create API returning `"Hello, World!"`
- **Skills**: Express.js setup, routing, HTTP responses

### Day 5 - RESTful API Development

- **Topic**: Full CRUD API operations
- **Goal**: Student management API with JSON responses
- **Skills**: RESTful design, HTTP methods, JSON handling
- **Endpoints**:
  - **GET** `/` → Fetch all students
  - **POST** `/` → Add a new student
  - **DELETE** `/:id` → Remove a student by ID

### Day 6 - React Setup

- **Topic**: Introduction to React with Vite  
- **Goal**: Build a Profile Card Component  
- **Skills**: React components, props, JSX, styling, interactivity  
- **Features**:  
  - Colorful profile cards with gradient background  
  - Hover effects & animations  
  - "Connect" button with interactive design

### Day 7 - State Management

- **Topic**: React `useState` hook & input handling  
- **Goal**: Create a Counter + Live Text Preview  
- **Skills**: State management, re-rendering, controlled components  
- **Features**:  
  - Increment button to update counter  
  - Input box to display text live on screen 

### Day 8 - Lists & Events (To-Do List)

- ***Topic**: Rendering lists with .map, handling onClick and onChange events
- **Goal**: Build a To-Do List app with local state + local storage
- **Skills**: React lists, event handling, persistent storage
- **Features**:
  -Add and delete tasks dynamically
  -Tasks saved in local storage
---

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd Samadhan_2.0_code_rebels
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run a specific module**
   ```bash
   # Example: Run Day 5 Student API
   node Day5/app.js
   ```

4. **Access the application**
   - Open your browser and navigate to: `http://localhost:3000`
   - For API testing, use the endpoints below
   - For React modules (Day 6 , Day 7 & Day 8), run:
   - ```bash
   npm run dev
   ```
---

## 🔗 API Documentation (Day 5)

### Base URL
```
http://localhost:3000
```

### Endpoints

#### Get All Students
```bash
curl http://localhost:3000
```

#### Add a New Student
```bash
curl -X POST http://localhost:3000 \
  -H "Content-Type: application/json" \
  -d '{"name":"Aman","course":"MongoDB"}'
```

#### Delete a Student
```bash
curl -X DELETE http://localhost:3000/2
```

### Example Response
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "course": "JavaScript"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "course": "React"
  }
]
```

---

## 📂 Project Structure

```
samadhan_2.0_code_rebels/
├── Day1/                  # JavaScript Basics
│   └── day_1_.js
├── Day2/                  # Functions & Loops
│   └── day_2.js
├── Day3/                  # Arrays & Objects
│   └── day_3.js
├── Day4/                  # Node.js Intro
│   ├── day_4.js
│   └── package.json
├── Day5/                  # Express.js Basics
│   ├── day_5.js
│   ├── package.json
│   └── routes/
├── Day6-react/            # React Setup
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── Day7-state/            # React app (State Management)
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── Day8-todo/             # React app (To-Do List with Events & Local Storage)
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── index.css
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 🛠️ Technologies Used

- **JavaScript (ES6+)** - Core programming language
- **Node.js** - Runtime environment
- **Express.js** - Web framework for APIs
- **npm** - Package management
- **React (with Vite)** - Frontend library for UI

---

## 📖 Learning Path

This repository is designed for progressive learning:

1. **Start with Day 1** - Master JavaScript object fundamentals
2. **Progress through each day** - Build on previous concepts
3. **Complete Day 5** - Apply all learned concepts in a full API project
4. **Day 6** - Add interactivity with React components
5. **Day 7** - Manage state and build interactive UI
6. **Day 8** - Work with lists, events & persistent storage (To-Do app)

Each module includes:

- ✅ Working code examples
- ✅ Clear comments explaining logic
- ✅ Step-by-step implementation

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-module`)
3. Commit your changes (`git commit -am 'Add new learning module'`)
4. Push to the branch (`git push origin feature/new-module`)
5. Create a Pull Request


## 📝 License

This project is open source and available under the [MIT License](LICENSE).
