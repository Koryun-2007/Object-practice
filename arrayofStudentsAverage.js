const evaluations = [  
    { studentId: 1, studentName: "John Doe", courseId: 1, courseName: "JS Bootcamp", score: 70 },  
    { studentId: 1, studentName: "John Doe", courseId: 2, courseName: "JS Level 0", score: 60 },  
    { studentId: 1, studentName: "John Doe", courseId: 3, courseName: "JS Level 1", score: 50 },  
    { studentId: 2, studentName: "Tom Colins", courseId: 1, courseName: "JS Bootcamp", score: 60 },  
    { studentId: 2, studentName: "Tom Colins", courseId: 2, courseName: "JS Level 0", score: 50 },  
    { studentId: 2, studentName: "Tom Colins", courseId: 3, courseName: "JS Level 1", score: 40 },  
    { studentId: 3, studentName: "Sarah Conor", courseId: 1, courseName: "JS Bootcamp", score: 45 },  
    { studentId: 3, studentName: "Sarah Conor", courseId: 2, courseName: "JS Level 0", score: 35 },  
    { studentId: 3, studentName: "Sarah Conor", courseId: 3, courseName: "JS Level 1", score: 25 }  
]; 

  function getStudentsWithLowAverage(evaluations) {  
    const studentScores = {};  

    evaluations.forEach(evaluation => {  
        if (!studentScores[evaluation.studentId]) {  
            studentScores[evaluation.studentId] = { totalScore: 0, numCourses: 0, studentName: evaluation.studentName };  
        }  
        studentScores[evaluation.studentId].totalScore += evaluation.score;  
        studentScores[evaluation.studentId].numCourses += 1;  
    });  

    const lowAverageStudents = Object.values(studentScores).filter(student => {  
        const average = student.totalScore / student.numCourses;  
        return average < 40;  
    });  

    return lowAverageStudents;  
}  

const result = getStudentsWithLowAverage(evaluations);  
console.log(result)