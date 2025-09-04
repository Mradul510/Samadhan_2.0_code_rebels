const students = [
  { name: "Akbar", marks: 58 },
  { name: "Vivek", marks: 92 },
  { name: "Chinmay", marks: 65 },
  { name: "Naman", marks: 85 },
  { name: "Anarkali", marks: 95 }
];


function analyzeMarks(students) {
  const result = students.reduce(
    (acc, student) => {
      acc.total += student.marks;

      if (student.marks > acc.highest.marks) acc.highest = student;
      if (student.marks < acc.lowest.marks) acc.lowest = student;

      return acc;
    },
    { highest: students[0], lowest: students[0], total: 0 }
  );

  const average = (result.total / students.length).toFixed(2);

  console.log("Student Marks Analysis");
  console.log("--------------------------");
  console.log(`Highest: ${result.highest.name} (${result.highest.marks})`);
  console.log(`Lowest: ${result.lowest.name} (${result.lowest.marks})`);
  console.log(`Average Marks: ${average}`);
}


analyzeMarks(students);
