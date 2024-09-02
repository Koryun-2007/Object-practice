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

function getCoursesWithAverageEvaluation(evaluations) {  
    const courseMap = {};  

    evaluations.forEach(({ courseId, courseName, score }) => {  
        if (!courseMap[courseId]) {  
            courseMap[courseId] = { courseName, totalScore: 0, count: 0 };  
        }  
        courseMap[courseId].totalScore += score;  
        courseMap[courseId].count += 1;  
    });  

    const coursesWithAverage = Object.values(courseMap).map(course => {  
        return {  
            courseName: course.courseName,  
            averageScore: (course.totalScore / course.count).toFixed(2)  
        };  
    });  

    return coursesWithAverage;  
}  

const result = getCoursesWithAverageEvaluation(evaluations);  
console.log(result);  