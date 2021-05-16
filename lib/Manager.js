const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name = '') {
        super(name);

        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        this.officeNumber = 555-555-5556
    }

    getRole() {
        return Manager
    }
}

module.exports = Manager;