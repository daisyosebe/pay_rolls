// Get a reference to the #add-employees-btn element
// const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Function to collect employee data
const collectEmployees = function() {
  const employees = []; // Array to store employee objects
  
  // Loop to collect information for each employee
  while (true) {
      const firstName = prompt('First Name:');
      if (firstName === null) break; // Exit the loop if user cancels
      
      const lastName = prompt('Last Name:');
      if (lastName === null) break; // Exit the loop if user cancels
      
      const salary = parseFloat(prompt('Employee Salary:'));
      if (salary === null) break; // Exit the loop if user cancels
      
      // Create an employee object and add it to the array
      const employee = {
          firstName: firstName,
          lastName: lastName,
          salary: salary
      };
      employees.push(employee);
      
      // Ask the user if they want to continue adding employees
      const continueAdding = confirm('Do you want to continue adding employees?');
      if (!continueAdding) break; // Exit the loop if user chooses to cancel
  }
  
  return employees; // Return the array of employee objects
};

// Function to handle button click event
const addButtonClickHandler = function() {
  const employeeArray = collectEmployees();
  console.log(employeeArray);
};

// Get a reference to the button
const addEmployeesBtn = document.getElementById('add-employees-btn');

// Add event listener to the button
addEmployeesBtn.addEventListener('click', addButtonClickHandler);

  // TODO: Get user input to create and return an array of employee objects























// Display the average salary
const displayAverageSalary = function(employeesArray) {  // Check if the array is empty
  if (employeesArray.length === 0) {
      console.log('No employees to calculate average salary.');
      return;
  // TODO: Calculate and display the average salary
}
 // Calculate the total salary
 let totalSalary = 0;
 for (const employee of employeesArray) {
     totalSalary += employee.salary;
 }
 
 // Calculate the average salary
 const averageSalary = totalSalary / employeesArray.length;
 
 // Display the average salary
 console.log('Average salary: ' + averageSalary.toFixed(2)); // Displaying average salary rounded to 2 decimal places
};
const employees = [
  { firstName: 'John', lastName: 'Doe', salary: 50000 },
  { firstName: 'Jane', lastName: 'Smith', salary: 60000 },
  { firstName: 'Alice', lastName: 'Johnson', salary: 70000 }
];
displayAverageSalary(employees);




























// Select a random employee
const getRandomEmployee = function(employeesArray) { // Check if the array is empty
  if (employeesArray.length === 0) {
      console.log('No employees available.');
      return null;
  }
  
  // Generate a random index within the range of the array length
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  
  // Return the random employee at the random index
  return employeesArray[randomIndex];
};
  // TODO: Select and display a random employee
  const randomEmployee = getRandomEmployee(employees);
  console.log('Random employee:', randomEmployee);














/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);


// create dummy data for  single blog post. 
// can i save that data to localStorage
// how do i send user from one webpage to another? 
// read data thats already in localStorage, and parse it into something you can work with
// diplay all the data back on the screen. 


// create a form that will be incharge of putting data into the system - put each vlog item into the code
