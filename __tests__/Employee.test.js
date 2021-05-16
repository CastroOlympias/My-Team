const { COMPLETIONSTATEMENT_TYPES } = require('@babel/types');
const Employee = require('../lib/Employee');

test('testing if my testing works', () => {
    const employee = new Employee('John', '888', 'blackcarrera@msn.com'); //pass variables into here

    expect(employee.getName()).toBe('John');
    expect(employee.getId()).toBe('888');
    expect(employee.getEmail()).toBe('blackcarrera@msn.com');

    console.log(employee.name);
    console.log(employee.id);
    console.log(employee.email);
});