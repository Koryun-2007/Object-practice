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


    let sum = payments.reduce((sum,payment) => sum + payment.payedAmount,0)

    console.log(sum);