class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`Employee's name is ${this.name}`);
        return this.name;
    }

    getId() {
        console.log(`Employee's ID is ${this.id}`);
        return this.id;
    }

    getEmail() {
        console.log(`Employee's email is ${this.email}`);
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;