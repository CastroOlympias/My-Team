const Intern = require('../lib/Intern');

test('testing if my testing works', () => {
    const intern = new Intern('Mike', 'University of Utah'); //pass variables into here

    expect(intern.getSchool()).toBe('University of Utah');

    console.log(intern.school);
    console.log(Intern);
});