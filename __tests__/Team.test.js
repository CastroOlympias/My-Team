const Employee = require('../lib/Team');

test('testing if my testing works', () => {
    const employee = new Employee('John', 'Manager', 'f2#3', 'maximum@minimum.com', 'office phone', '555-444-3333');

    expect(employee.getName()).toBe('John');
    expect(employee.getMememberClass()).toBe('Manager');
    expect(employee.getId()).toBe('f2#3');
    expect(employee.getEmail()).toBe('maximum@minimum.com');
    expect(employee.getOtherType()).toBe('office phone');
    expect(employee.getOtherInput()).toBe('555-444-3333');

    console.log(employee.name);
    console.log(employee.id);
    console.log(employee.email);
    console.log(employee.name);
    console.log(employee.id);
    console.log(employee.email);
    console.log(Employee);
});