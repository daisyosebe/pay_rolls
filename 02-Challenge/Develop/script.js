const collectEmployees = function() {
  const employees = []; // Array to store employee objects

  while (true) {
    let firstName;
    while (true) {
        firstName = prompt('First Name:');
        if (firstName === null) {
            return employees; // Exit the loop and function if user cancels
        } else if (firstName.trim() === '') {
            // Prompt again if nothing is entered
            alert('first name cannot be empty. Please enter first name.');
        } else {
            break; // Exit the loop if valid input is provided
        }
    }

    let lastName;
    while (true) {
        lastName = prompt('Last Name:');
        if (lastName === null) {
            return employees; // Exit the loop and function if user cancels
        } else if (lastName.trim() === '') {
            // Prompt again if nothing is entered
            alert('Last name cannot be empty. Please enter last name.');
        } else {
            break; // Exit the loop if valid input is provided
        }
    }
    

    let salary;
    while (true) {
      const salaryInput = prompt('Employee Salary:');
      if (salaryInput === null) {
        return employees; // Exit the loop and function if user cancels
      }
      salary = parseFloat(salaryInput); // Parse the input as a float
      if (!isNaN(salary)) break; // Exit the loop if a valid number is entered
      else alert('Invalid input. Please enter a valid number.'); // Notify user of invalid input
    }

    employees.push({ firstName, lastName, salary }); // Add employee object to the array

    // Ask if the user wants to add another employee
    const addAnother = confirm('Do you want to add another employee?');
    if (!addAnother) {
      break; // Exit the loop if the user does not want to add another employee
    }
  }

  return employees;
};

// Function to handle button click event
const addButtonClickHandler = function() {
  const employeesArray = collectEmployees();
  console.log(employeesArray);
};

// Get a reference to the button
const addEmployeeBtn = document.getElementById('add-employees-btn');

// Add event listener to the button
addEmployeeBtn.addEventListener('click', addButtonClickHandler);

  // TODO: Get user input to create and return an array of employee objects




// Calculate and return the average salary
const calculateAverageSalary = function(employeesArray) {
  // Check if the array is empty
  if (employeesArray.length === 0) {
    return null; // No employees to calculate average salary
  }

  // Calculate the total salary
  let totalSalary = 0;
  for (const employee of employeesArray) {
    totalSalary += employee.salary;
  }

  // Calculate the average salary
  const averageSalary = totalSalary / employeesArray.length;

  return averageSalary;
};

// Display the average salary
const displayAverageSalary = function(averageSalary) {
  if (averageSalary === null) {
    console.log('No employees to calculate average salary.');
  } else {
    console.log(`Average salary: ${averageSalary.toFixed(2)}`); // Using template literal string for formatting
  }
};

// Assuming you have already collected the employee data and stored it in 'employees' array
const employees = collectEmployees();
const averageSalary = calculateAverageSalary(employees);
displayAverageSalary(averageSalary);


 // Select a random employee
 const getRandomEmployees = function(employeesArray) { // Check if the array is empty
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
   
   const randomEmployees = getRandomEmployees(employees);
   if (randomEmployees) {
    console.log(`Congrats to our randomly picked Employee: ${randomEmployees.firstName} ${randomEmployees.lastName}`);
  } else {
    console.log('No employees available.');
  };

  
 
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
};







