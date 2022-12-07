const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("getName", () => {
        it("should return the intern's name", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const school = 'University of Miami';
            const result = new Intern(name, id, email, school).getName();

            expect(result).toEqual(name)
        })
    })
    describe("getId", () => {
        it("should return the intern's id", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const school = 'University of Miami';
            const result = new Intern(name, id, email, school).getId();

            expect(result).toEqual(2);
        })
    })
    describe("getEmail", () => {
        it("should return the intern's email", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const school = 'University of Miami';
            const result = new Intern(name, id, email, school).getEmail();

            expect(result).toEqual('a.reedy@gmail.com');
        })
    })
    describe("getGitHub", () => {
        it("should return the intern's school", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const school = 'University of Miami';
            const result = new Intern(name, id, email, school).getSchool();

            expect(result).toEqual('University of Miami');
        })
    })
    describe("getRole", () => {
        it("should return the intern's role", () => {
            const name = 'Anthony';
            const id = 2;
            const email = 'a.reedy@gmail.com';
            const school = 'University of Miami';
            const result = new Intern(name, id, email, school).getRole();

            expect(result).toEqual('Intern');
        })
    })
})