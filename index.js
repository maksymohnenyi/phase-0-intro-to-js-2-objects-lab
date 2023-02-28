const employee = {
  name: "Sam",
  streetAddress: "13 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
   const newEmployy = {...employee} 
    delete newEmployy.name
    return newEmployy
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
  }