const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name = '') {
        super(name);

        this.school = 'school';
    }

    getSchool() {
        this.school = 'fox hound';
    }

    getRole() {
        return Intern;
    }
}

module.exports = Intern;