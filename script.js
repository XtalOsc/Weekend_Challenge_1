// Weekend Challenge 1
// An application that displays the total salary of all employees and lists each employee seperately.

console.log('script.js sourced');

var monthlyReport=[];
var addEmployee = function(){

  // Input new employee information: Employee First Name, Employee Last Name, ID Number, Job Title, and Annual Salary
  var newEmployee = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    idNumber: document.getElementById('idNumber').value,
    jobTitle: document.getElementById('jobTitle').value,
    annualSalary: parseInt(document.getElementById('annualSalary').value)
  }//end newEmployee

  // clearing inputs
  var clearInputFields=function(){
    document.getElementById('firstName').value='';
    document.getElementById('lastName').value='';
    document.getElementById('idNumber').value='';
    document.getElementById('jobTitle').value='';
    document.getElementById('annualSalary').value='';
  }//end clearInputFields

  var displayEmployees = function(){
  document.getElementById('allEmployees').innerHTML = '';
    for (var i = 0; i < monthlyReport.length; i++) {
      //appending Employees information to DOM
      var employeeInfo = '<h3>' + monthlyReport[i].firstName + ' ' + monthlyReport[i].lastName + '</h3><h4>Employee Number: ' + Number(monthlyReport[i].idNumber) + '<br>JobTitle: ' + monthlyReport[i].jobTitle + '<br>Annual Salary: $ ' + monthlyReport[i].annualSalary.toFixed(2) + '<br></h4><button onClick="removeEmployee(' + i + ')">Remove Employee</button><p></p>';
      document.getElementById('allEmployees').innerHTML += employeeInfo;
    }//end for
  }//end displayEmployees

  // Hard Mode
  // Create a delete button that removes an employee from the DOM. Note that in hard mode, it need
  // not remove that Employee's salary from the reported total.
  removeEmployee = function(index){
    console.log('in removeEmployee');
    console.log('removing '+ monthlyReport[index].firstName + ' ' + monthlyReport[index].lastName)
    var rem='<h3 class="former">' + monthlyReport[index].firstName + ' ' + monthlyReport[index].lastName + '</h3><h4 class="former">Employee Number: ' + Number(monthlyReport[index].idNumber) + '<br>JobTitle: ' + monthlyReport[index].jobTitle + '<br>Annual Salary: $ ' + monthlyReport[index].annualSalary.toFixed(2) + '<br></h4><p></p>';
    //move the removed employee to the "Former Employees" list on the DOM
    document.getElementById('formerEmp').innerHTML += rem;
    //Remove employee from the "Current Employees" list on the DOM
    monthlyReport.splice(index,1);
    displayEmployees();
    displaySalary();
  }//end removeEmployee

  // calculate the employee salaries and report back the monthly cost of all salaries.
  var displaySalary = function(){
    var totalAnnual=0;
    var totalMonthly=0;
    for (var i = 0; i < monthlyReport.length; i++) {
      totalAnnual += parseInt(monthlyReport[i].annualSalary);
      totalMonthly = totalAnnual/12;
    }//end for loop
    //total annual salary of all employees entered by user
    document.getElementById('allSalary').innerHTML = '$ ' + totalMonthly.toFixed(2);
  }//end displaySalary

  //Check if all fields have data.
  if(newEmployee.firstName == '' || newEmployee.lastName == '' || newEmployee.idNumber == '' || newEmployee.jobTitle == '' || newEmployee.annualSalary == ''){
    alert('Please fill in all fields.');
  }//end if
  else if (isNaN(newEmployee.idNumber) || isNaN(newEmployee.annualSalary)){
    alert('Please input a number in the Employee ID Number and Annual Salary fields.')
  }//end else if
  else{
    //push new employees to monthly report array
    monthlyReport.push(newEmployee);
    //clear inputs
    clearInputFields();
    console.log("new employee:",newEmployee);
    console.log('monthly report:',monthlyReport);
    //display employees on DOM
    displayEmployees();
  }//end else
  //display total Salary of all employees entered
  displaySalary();
}//end addEmployee
