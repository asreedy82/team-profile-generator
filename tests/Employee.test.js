const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("getName", () => {
        it("should return the employee's name", () => {
            const str = 'Anthony';
            const result = new Employee().getName(str);

            expect(result).toEqual('Anthony')
        })
    })
})