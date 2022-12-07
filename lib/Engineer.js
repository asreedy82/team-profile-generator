//require employee parent class
const Employee = require('./Employee');

//sub class for engineer
class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super (name, id, email);
        this.gitHub = gitHub
    }

    getGitHub () {
        console.log(this.gitHub);
        return this.gitHub;
    }

    getRole () {
        console.log('Engineer');
        return 'Engineer';
    }
}

module.exports = Engineer;