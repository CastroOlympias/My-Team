const Engineer = require('../lib/Engineer');

test('testing if my testing works', () => {
    const engineer = new Engineer('John', '@CastroOlympias'); //pass variables into here

    expect(engineer.getGithub()).toBe('@CastroOlympias');

    console.log(engineer.github);
    console.log(Engineer);
});