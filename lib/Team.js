class Employee {
    constructor(name, memberClass, id, email, otherType, otherInput ) {
        this.name = name;
        this.memberClass = memberClass;
        this.id = id;
        this.email = email;
        this.otherType = otherType;
        this.otherInput = otherInput;
    }

    getName() {
        return this.name;
    }

    getMememberClass() {
        return this.memberClass;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getOtherType() {
        return this.otherType;
    }

    getOtherInput() {
        return this.otherInput;
    }
}

module.exports = Employee;