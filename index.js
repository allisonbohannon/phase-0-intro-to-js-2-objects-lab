// Write your solution in this file!
const employee = {
    name: 'Bob', 
    streetAddress: '1313 Mockingbird Lane',
}

function updateEmployeeWithKeyAndValue(employeeObject, newKey, value) {
    const updatedEmployee = {...employeeObject, 
    [newKey]: value,
    }
    return updatedEmployee; 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value; 
    return employeeObject;
}

function deleteFromEmployeeByKey(employeeObject, key) {
   const updatedEmployee = {...employeeObject}
   delete updatedEmployee[key]; 
   return updatedEmployee; 
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    delete employeeObject[key]; 
    return employeeObject;
}