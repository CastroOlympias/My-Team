const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name = '') {
        super(name);

        this.github = 'github';
    }

    getGithub() {
        this.github = '@CastroOlympias';
    }

    getRole() {
        this.role = 'Engineer';
    }
}

module.exports = Engineer;