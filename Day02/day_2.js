function findHighestMarks(marks) {
    let highest = marks[0];
    for(let i=1; i<marks.length;i++) {
        if(marks[i]>highest){
            highest=marks[i];

        }
    }
    return highest;
}

const studentMarks =[69,90,13,15,17,19,70,99];
console.log("Highest Marks", findHighestMarks(studentMarks))