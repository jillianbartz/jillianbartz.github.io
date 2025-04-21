//Q1
let employees = [
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },
    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },
    {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    }
];
//if you wanted this to be in a JSON string console.log(JSON.stringify(employees, null, 2)), i just decided to output the js format hopefully that is ok
console.log(employees);

//Q2
let company = 
    {
        companyName: "Tech Stars",
        website: "www.techstars.site",
        employees: employees
    };
console.log(company);

//Q3
let newEmployee = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
};
let updatedEmployees = [...employees, newEmployee]; //spread operator https://www.geeksforgeeks.org/javascript-how-to-add-an-element-to-a-json-object/
console.log(updatedEmployees);
company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: updatedEmployees
};
console.log(company);

//Q4
let totalSalary = 0;
for(let employee of updatedEmployees){
    totalSalary += employee.salary;
}
console.log("Total Employee Salary: " + totalSalary);

//Q5
let raisedUpdatedEmployees = [];
function raiseSalaries(){
    for(let employee of updatedEmployees){
        let tempEmployee = {...employee}; //shallow copy https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
        if(tempEmployee.raiseEligible){
            tempEmployee.salary += (tempEmployee.salary / 10);
            tempEmployee.raiseEligible = false;
        }
        raisedUpdatedEmployees.push(tempEmployee);
    }
};
raiseSalaries();
console.log(raisedUpdatedEmployees);

//Q6
let wfhUpdatedEmployees = [];
let wfhList = ['Anna', 'Sam'];
function updateWFH(){
    for(let employee of raisedUpdatedEmployees){
        let tempEmployee = {...employee}; //shallow copy https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
        if(wfhList.includes(tempEmployee.firstName)){
            tempEmployee.wfh = true;
        }
        else{
            tempEmployee.wfh = false;
        }
        wfhUpdatedEmployees.push(tempEmployee);
    }
};
updateWFH();
console.log(wfhUpdatedEmployees);