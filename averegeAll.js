const payments = [
    {
    studentId: 1, 
    studentName: "John Doe", 
    payedAmount: 1600, 
    year: 2020, 
    },
    {
    studentId: 1, 
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021
    },
    {
    studentId: 1, 
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022
    },
    {
    studentId: 1, 
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023
    },
    {
    studentId: 2, 
    studentName: "Lu Kang",
    payedAmount: 1500,
    
    year: 2020
    },
    {
    studentId: 2, 
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021
    },
    {
    studentId: 2, 
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023
    },
    {
    studentId: 2, 
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023
    }
    ]

let count = payments.filter(payment => payment.payedAmount).length;
let sum = payments.reduce((sum,payment) => sum + payment.payedAmount,0)

let averegeAll = sum / count
console.log(sum);
console.log(count);
console.log(averegeAll);

