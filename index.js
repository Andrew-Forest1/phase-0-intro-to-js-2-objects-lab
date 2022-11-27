// Write your solution in this file!
let employee = {
    name : 'Andrew',
    address : 'San Jose',
};

function updateEmployeeWithKeyAndValue(emp, key, value){
    let emp2 = {...emp};
    emp2[key] = value;
    return emp2;
}

function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value){
    emp[key] = value;
    return emp;
}

function deleteFromEmployeeByKey(emp, key){
    let emp2 = {...emp};
    delete emp2[key];
    return emp2;
}

function destructivelyDeleteFromEmployeeByKey(emp, key){
    delete emp[key];
    return emp;
}