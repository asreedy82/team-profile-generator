//require employee parent class
const Employee = require('./Employee');

//sub class for manager
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber;
    }

    getRole () {
        return 'Manager';
    }
}

module.exports = Manager;