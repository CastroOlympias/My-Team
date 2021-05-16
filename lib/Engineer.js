const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, github) {
        super(name);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;