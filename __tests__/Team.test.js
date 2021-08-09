const Employee = require('../lib/Team');

test('Tests for the Manager profile data', () => {
    const manager = new Employee('John', 'Manager', '1', 'john@john.com', 'office phone', '111-111-1111');

    expect(manager.getName()).toBe('John');
    expect(manager.getMememberClass()).toBe('Manager');
    expect(manager.getId()).toBe('1');
    expect(manager.getEmail()).toBe('john@john.com');
    expect(manager.getOtherType()).toBe('office phone');
    expect(manager.getOtherInput()).toBe('111-111-1111');

    // console.log(manager.name);
    // console.log(manager.id);
    // console.log(manager.email);
    // console.log(manager.name);
    // console.log(manager.id);
    // console.log(manager.email);
    // console.log(Employee);
});

test('Tests for the Supervisor profile data', () => {
    const supervisor = new Employee('Mark', 'Supervisor', '2', 'mark@mark.com', 'GitHub', 'mark');

    expect(supervisor.getName()).toBe('Mark');
    expect(supervisor.getMememberClass()).toBe('Supervisor');
    expect(supervisor.getId()).toBe('2');
    expect(supervisor.getEmail()).toBe('mark@mark.com');
    expect(supervisor.getOtherType()).toBe('GitHub');
    expect(supervisor.getOtherInput()).toBe('mark');

});

test('Tests for the Engineer profile data', () => {
    const engineer = new Employee('Gabe', 'Engineer', '3', 'gabe@gabe.com', 'GitHub', 'gabe');

    expect(engineer.getName()).toBe('Gabe');
    expect(engineer.getMememberClass()).toBe('Engineer');
    expect(engineer.getId()).toBe('3');
    expect(engineer.getEmail()).toBe('gabe@gabe.com');
    expect(engineer.getOtherType()).toBe('GitHub');
    expect(engineer.getOtherInput()).toBe('gabe');

});

test('Tests for the Intern profile data', () => {
    const intern = new Employee('Jack', 'Intern', '4', 'jack@jack.com', 'School', 'Los Angeles High School');

    expect(intern.getName()).toBe('Jack');
    expect(intern.getMememberClass()).toBe('Intern');
    expect(intern.getId()).toBe('4');
    expect(intern.getEmail()).toBe('jack@jack.com');
    expect(intern.getOtherType()).toBe('School');
    expect(intern.getOtherInput()).toBe('Los Angeles High School');

});