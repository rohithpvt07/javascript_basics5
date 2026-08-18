// Task 1 - Student Details

let studentName1 = "Rohith";
let studentAge1 = 23;
let department1 = "CSE";
const cgpa1 = 7.13;

console.log("Name: " + studentName1);
console.log("Age: " + studentAge1);
console.log("Department: " + department1);
console.log("CGPA: " + cgpa1);

console.log(`Name: ${studentName1}`);
console.log(`Age: ${studentAge1}`);
console.log(`Department: ${department1}`);
console.log(`CGPA: ${cgpa1}`);

console.log("----------------------------------------------");

// Output:
// a) Name: Rohith
// b) Age: 23
// c) Department: CSE
// d) CGPA: 7.13
// e) Name: Rohith
// f) Age: 23
// g) Department: CSE
// h) CGPA: 7.13


// Task 2 - Simple Calculator

let a2 = 20;
let b2 = 10;

console.log("Addition:", a2 + b2);
console.log("Subtraction:", a2 - b2);
console.log("Multiplication:", a2 * b2);
console.log("Division:", a2 / b2);
console.log("Modulus:", a2 % b2);
console.log("Power:", a2 ** b2);

console.log("----------------------------------------------");

// Output:
// a) Addition: 30
// b) Subtraction: 10
// c) Multiplication: 200
// d) Division: 2
// e) Modulus: 0
// f) Power: 10240000000000


// Task 3 - Age Checker

// prompt() is a browser function.
// For Node.js terminal, enter the age directly here.

let votingAge = 23;

if (votingAge >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}

console.log("----------------------------------------------");

// Output:
// a) Eligible to vote


// Task 4 - Student Grade

// For Node.js terminal, the mark is given directly here.

let studentMark4 = 78;

if (studentMark4 >= 90 && studentMark4 <= 100) {
    console.log("A");
} else if (studentMark4 >= 80) {
    console.log("B");
} else if (studentMark4 >= 70) {
    console.log("C");
} else if (studentMark4 >= 60) {
    console.log("D");
} else {
    console.log("Fail");
}

console.log("----------------------------------------------");

// Output:
// a) C


// Task 5 - Login System

let correctUsername5 = "admin";
let correctPassword5 = "1234";

let enteredUsername5 = "admin";
let enteredPassword5 = "1234";

if (enteredUsername5 === correctUsername5 && enteredPassword5 === correctPassword5) {
    console.log("Login successful");
} else if (enteredUsername5 !== correctUsername5 && enteredPassword5 !== correctPassword5) {
    console.log("Invalid credentials");
} else if (enteredUsername5 !== correctUsername5) {
    console.log("Invalid username");
} else {
    console.log("Invalid password");
}

console.log("----------------------------------------------");

// Output:
// a) Login successful


// Task 6 - ATM Withdrawal

let balance6 = 10000;
let withdrawal6 = 2500;

if (withdrawal6 <= 0) {
    console.log("Amount must be greater than 0");
} else if (withdrawal6 > balance6) {
    console.log("Insufficient balance");
} else if (withdrawal6 % 100 !== 0) {
    console.log("Amount must be a multiple of 100");
} else {
    balance6 = balance6 - withdrawal6;

    console.log("Withdrawal successful");
    console.log("Remaining balance:", balance6);
}

console.log("----------------------------------------------");

// Output:
// a) Withdrawal successful
// b) Remaining balance: 7500


// Task 7 - Multiplication Table

let tableNumber7 = 7;

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber7 + " x " + i + " = " + (tableNumber7 * i));
}

console.log("----------------------------------------------");

// Output:
// a) 7 x 1 = 7
// b) 7 x 2 = 14
// c) 7 x 3 = 21
// d) 7 x 4 = 28
// e) 7 x 5 = 35
// f) 7 x 6 = 42
// g) 7 x 7 = 49
// h) 7 x 8 = 56
// i) 7 x 9 = 63
// j) 7 x 10 = 70


// Task 8 - Reverse Number

let number8 = 12345;
let reversed8 = 0;

while (number8 > 0) {
    let digit = number8 % 10;
    reversed8 = reversed8 * 10 + digit;
    number8 = Math.floor(number8 / 10);
}

console.log("Reversed number:", reversed8);

console.log("----------------------------------------------");

// Output:
// a) Reversed number: 54321


// Task 9 - OTP System

let correctOTP9 = 1234;
let attempts9 = 0;
let verified9 = false;

// Fixed OTP is used so it can run directly in the Node.js terminal.
let enteredOTP9 = 1234;

while (attempts9 < 3) {

    attempts9++;

    if (enteredOTP9 === correctOTP9) {
        console.log("OTP verified");
        verified9 = true;
        break;
    } else {
        console.log("Try again");
    }
}

if (verified9 === false) {
    console.log("Account blocked");
}

console.log("----------------------------------------------");

// Output:
// a) OTP verified


// Task 10 - Salary Calculator

function calculateSalary(basicSalary, bonus) {
    return basicSalary + bonus;
}

console.log(calculateSalary(30000, 5000));

console.log("----------------------------------------------");

// Output:
// a) 35000


// Task 11 - Calculator Function

function add11(a, b) {
    return a + b;
}

function subtract11(a, b) {
    return a - b;
}

function multiply11(a, b) {
    return a * b;
}

function divide11(a, b) {
    return a / b;
}

console.log("Addition:", add11(20, 10));
console.log("Subtraction:", subtract11(20, 10));
console.log("Multiplication:", multiply11(20, 10));
console.log("Division:", divide11(20, 10));

console.log("----------------------------------------------");

// Output:
// a) Addition: 30
// b) Subtraction: 10
// c) Multiplication: 200
// d) Division: 2


// Task 12 - Eligibility Function

function checkEligibility(age, height, weight) {

    if (age >= 21 && height >= 170 && weight >= 70) {
        return "Eligible";
    } else {
        return "Not eligible";
    }
}

console.log(checkEligibility(23, 175, 72));

console.log("----------------------------------------------");

// Output:
// a) Eligible


// Task 13 - Shopping Cart

let cart13 = ["Laptop", "Mouse", "Keyboard"];

cart13.push("Monitor");
cart13.splice(1, 1);
cart13.unshift("Headset");
cart13.pop();

console.log(cart13);

console.log("----------------------------------------------");

// Output:
// a) [ 'Headset', 'Laptop', 'Keyboard' ]


// Task 14 - Find Maximum

let numbers14 = [10, 45, 23, 89, 12, 67];

let largest14 = numbers14[0];

for (let number of numbers14) {
    if (number > largest14) {
        largest14 = number;
    }
}

console.log("Largest number:", largest14);

console.log("----------------------------------------------");

// Output:
// a) Largest number: 89


// Task 15 - Remove Duplicate Values

let numbers15 = [1, 2, 3, 2, 4, 1, 5];
let uniqueNumbers15 = [];

for (let number of numbers15) {
    if (!uniqueNumbers15.includes(number)) {
        uniqueNumbers15.push(number);
    }
}

console.log(uniqueNumbers15);

console.log("----------------------------------------------");

// Output:
// a) [ 1, 2, 3, 4, 5 ]


// Task 16 - Employee Salary Filter

let employees16 = [
    { name: "Arun", salary: 30000 },
    { name: "Bala", salary: 50000 },
    { name: "Kumar", salary: 25000 },
    { name: "Ravi", salary: 70000 }
];

let highSalaryEmployees16 = employees16.filter(function(employee) {
    return employee.salary >= 40000;
});

console.log(highSalaryEmployees16);

console.log("----------------------------------------------");

// Output:
// a) [
//     { name: 'Bala', salary: 50000 },
//     { name: 'Ravi', salary: 70000 }
//   ]


// Task 17 - Increase Salary

let employees17 = [
    { name: "Arun", salary: 30000 },
    { name: "Bala", salary: 50000 },
    { name: "Kumar", salary: 25000 },
    { name: "Ravi", salary: 70000 }
];

let updatedEmployees17 = employees17.map(function(employee) {

    let newSalary;

    if (employee.salary < 40000) {
        newSalary = employee.salary + 5000;
    } else {
        newSalary = employee.salary + 10000;
    }

    return {
        name: employee.name,
        salary: newSalary
    };
});

console.log(updatedEmployees17);

console.log("----------------------------------------------");

// Output:
// a) [
//     { name: 'Arun', salary: 35000 },
//     { name: 'Bala', salary: 60000 },
//     { name: 'Kumar', salary: 30000 },
//     { name: 'Ravi', salary: 80000 }
//   ]


// Task 18 - Total Salary

let employees18 = [
    { name: "Arun", salary: 30000 },
    { name: "Bala", salary: 50000 },
    { name: "Kumar", salary: 25000 },
    { name: "Ravi", salary: 70000 }
];

let totalSalary18 = employees18.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("Total salary:", totalSalary18);

console.log("----------------------------------------------");

// Output:
// a) Total salary: 175000


// Task 19 - Check Employee

let employees19 = [
    { name: "Arun", salary: 30000 },
    { name: "Bala", salary: 50000 },
    { name: "Kumar", salary: 25000 },
    { name: "Ravi", salary: 70000 }
];

let highEarner19 = employees19.some(function(employee) {
    return employee.salary > 100000;
});

let minimumSalary19 = employees19.every(function(employee) {
    return employee.salary >= 20000;
});

console.log("Anyone earning above ₹100000:", highEarner19);
console.log("Everyone earning at least ₹20000:", minimumSalary19);

console.log("----------------------------------------------");

// Output:
// a) Anyone earning above ₹100000: false
// b) Everyone earning at least ₹20000: true


// Task 20 - Employee Management Mini Program

let employees20 = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 35000
    },
    {
        id: 102,
        name: "Bala",
        department: "HR",
        salary: 45000
    },
    {
        id: 103,
        name: "Kumar",
        department: "IT",
        salary: 60000
    }
];

// 1. Print all employee names

console.log("Employee Names:");

employees20.forEach(function(employee) {
    console.log(employee.name);
});

console.log("----------------------------------------------");

// 2. Get only IT employees

let itEmployees20 = employees20.filter(function(employee) {
    return employee.department === "IT";
});

console.log("IT Employees:");
console.log(itEmployees20);

console.log("----------------------------------------------");

// 3. Increase every salary by 10%

let updatedSalaries20 = employees20.map(function(employee) {
    return {
        ...employee,
        salary: employee.salary * 1.10
    };
});

console.log("Updated Salaries:");
console.log(updatedSalaries20);

console.log("----------------------------------------------");

// 4. Find employee with salary ₹45000

let foundEmployee20 = employees20.find(function(employee) {
    return employee.salary === 45000;
});

console.log("Employee with salary ₹45000:");
console.log(foundEmployee20);

console.log("----------------------------------------------");

// 5. Calculate total salary

let totalSalary20 = employees20.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("Total Salary:", totalSalary20);

console.log("----------------------------------------------");

// 6. Check whether anyone earns above ₹50000

let above50000 = employees20.some(function(employee) {
    return employee.salary > 50000;
});

console.log("Anyone earning above ₹50000:", above50000);

console.log("----------------------------------------------");

// 7. Check whether everyone earns above ₹20000

let everyoneAbove20000 = employees20.every(function(employee) {
    return employee.salary > 20000;
});

console.log("Everyone earning above ₹20000:", everyoneAbove20000);

console.log("----------------------------------------------");

// 8. Sort employees from highest salary to lowest

let sortedEmployees20 = [...employees20];

sortedEmployees20.sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("Employees sorted by salary:");
console.log(sortedEmployees20);

console.log("----------------------------------------------");

// 9. Destructure employee name and salary

employees20.forEach(function(employee) {

    let { name, salary } = employee;

    console.log("Name:", name);
    console.log("Salary:", salary);
});

console.log("----------------------------------------------");

// 10. Create a new employee list using spread operator

let newEmployee = {
    id: 104,
    name: "Ravi",
    department: "Finance",
    salary: 40000
};

let newEmployeeList20 = [...employees20, newEmployee];

console.log("New Employee List:");
console.log(newEmployeeList20);

console.log("----------------------------------------------");

// Output:
// a) Employee Names:
// Arun
// Bala
// Kumar
//
// b) IT Employees:
// [
//   { id: 101, name: 'Arun', department: 'IT', salary: 35000 },
//   { id: 103, name: 'Kumar', department: 'IT', salary: 60000 }
// ]
//
// c) Updated Salaries:
// Arun - 38500
// Bala - 49500
// Kumar - 66000
//
// d) Employee with salary ₹45000:
// Bala
//
// e) Total Salary: 140000
//
// f) Anyone earning above ₹50000: true
//
// g) Everyone earning above ₹20000: true
//
// h) Highest salary employee: Kumar
//
// i) Employee names and salaries:
// Arun - 35000
// Bala - 45000
// Kumar - 60000
//
// j) New employee list contains 4 employees.