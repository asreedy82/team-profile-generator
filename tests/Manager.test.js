const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("getName", () => {
        it("should return the manager's name", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const officeNumber = 36;
            const result = new Manager(name, id, email, officeNumber).getName();

            expect(result).toEqual(name);
        })
    })
    describe("getId", () => {
        it("should return the manager's id", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const officeNumber = 36;
            const result = new Manager(name, id, email, officeNumber).getId();

            expect(result).toEqual(2);
        })
    })
    describe("getEmail", () => {
        it("should return the manager's email", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const officeNumber = 36;
            const result = new Manager(name, id, email, officeNumber).getEmail();

            expect(result).toEqual('a.reedy@gmail.com');
        })
    })
    describe("getRole", () => {
        it("should return the manager's role", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const officeNumber = 36;
            const result = new Manager(name, id, email, officeNumber).getRole();

            expect(result).toEqual('Manager');
        })
    })
})