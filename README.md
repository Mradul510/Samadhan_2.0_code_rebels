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
Samadhan_2.0_code_rebels/
├── Day1/                  # JavaScript Objects fundamentals
│   └── index.js
├── Day2/                  # Arrays and iteration methods
│   └── index.js
├── Day3/                  # Functions and calculator logic
│   └── index.js
├── Day4/                  # Basic Express.js server
│   ├── app.js
│   └── package.json
├── Day5/                  # RESTful Student API
│   ├── app.js
│   ├── package.json
│   └── routes/
└── README.md
```

---

## 🛠️ Technologies Used

- **JavaScript (ES6+)** - Core programming language
- **Node.js** - Runtime environment
- **Express.js** - Web framework for APIs
- **npm** - Package management

---

## 📖 Learning Path

This repository is designed for progressive learning:

1. **Start with Day 1** - Master JavaScript object fundamentals
2. **Progress through each day** - Build on previous concepts
3. **Complete Day 5** - Apply all learned concepts in a full API project

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
