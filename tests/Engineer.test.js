const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("getName", () => {
        it("should return the engineer's name", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const gitHub = 'asreedy82';
            const result = new Engineer(name, id, email, gitHub).getName();

            expect(result).toEqual(name);
        })
    })
    describe("getId", () => {
        it("should return the engineer's id", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const gitHub = 'asreedy82';
            const result = new Engineer(name, id, email, gitHub).getId();

            expect(result).toEqual(2);
        })
    })
    describe("getEmail", () => {
        it("should return the engineer's email", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const gitHub = 'asreedy82';
            const result = new Engineer(name, id, email, gitHub).getEmail();

            expect(result).toEqual('a.reedy@gmail.com');
        })
    })
    describe("getGitHub", () => {
        it("should return the engineer's GitHub", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const gitHub = 'asreedy82';
            const result = new Engineer(name, id, email, gitHub).getGitHub();

            expect(result).toEqual('asreedy82');
        })
    })
    describe("getRole", () => {
        it("should return the engineer's role", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const gitHub = 'asreedy82';
            const result = new Engineer(name, id, email, gitHub).getRole();

            expect(result).toEqual('Engineer');
        })
    })
})