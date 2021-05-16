const Manager = require('../lib/Manager');

test('testing if my testing works', () => {
    const manager = new Manager('Brad', '777-777-7777'); //pass variables into here

    expect(manager.getOfficeNumber()).toBe('777-777-7777');

    console.log(manager.officeNumber);
    console.log(Manager);
});