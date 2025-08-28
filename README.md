# Samadhan_2.0_code_rebels

An Educational AI-based project repository that contains multiple **learning modules**.  
Each module demonstrates different programming concepts step by step, including JavaScript basics and Express.js APIs.  

---

## 📘 Learning Modules

### Day 1  

- Print student details from an Object  

### Day 2  

- Find the highest marks from an Array  

### Day 3  

- Simple Student Marks Calculator  

### Day 4  

- API returning `"Hello, World!"` using Express.js  

### Day 5  

- API returning a list of students (JSON)  
  - **GET** → Fetch all students  
  - **POST** → Add a new student  
  - **DELETE** → Remove a student by ID  

---

## 🚀 Setup Instructions

1. **Clone the repository**

```bash
   git clone <repo-url>
   cd <repo-folder>

2. **Install dependencies**

```bash
   npm install

3. **Run a specific module (example: Day 5)**

```bash
   node Day5/app.js

4.  **Open in browser**

```bash
   http://localhost:3000


✅ API Usage (Day 5 - Student API)-----

Get All Students
curl http://localhost:3000

Add a New Student
```bash
   curl -X POST http://localhost:3000 \
   -H "Content-Type: application/json" \
   -d '{"name":"Aman","course":"MongoDB"}'

```bash
   Delete a Student (by ID)
   curl -X DELETE http://localhost:3000/2

📂 Folder Structure-----

Repo/
 ┣ Day1/   → Basics of Objects
 ┣ Day2/   → Arrays & Loops
 ┣ Day3/   → Functions + Calculator
 ┣ Day4/   → Node.js API returning "Hello World"
 ┣ Day5/   → Student API (Express.js)
 ┗ README.md

