const Intern = require('../lib/Intern');

test('testing if my testing works', () => {
    const intern = new Intern('Mike', 'Utah of University'); //pass variables into here

    expect(intern.getSchool()).toBe('Utah of University');

    console.log(intern.school);
    console.log(Intern);
});