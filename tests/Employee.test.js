const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("getName", () => {
        it("should return the employee's name", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const result = new Employee(name, id, email).getName();

            expect(result).toEqual(name);
        })
    })
    describe("getId", () => {
        it("should return the employee's id", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const result = new Employee(name, id, email).getId();

            expect(result).toEqual(2);
        })
    })
    describe("getEmail", () => {
        it("should return the employee's email", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const result = new Employee(name, id, email).getEmail();

            expect(result).toEqual('a.reedy@gmail.com');
        })
    })
    describe("getRole", () => {
        it("should return the employee's role", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const result = new Employee(name, id, email).getRole();

            expect(result).toEqual('Employee');
        })
    })
})