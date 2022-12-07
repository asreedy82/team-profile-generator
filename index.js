const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');

let managerArray = [];
let engineerArray = [];
let internArray = [];

const managerQuestions = [
    {
        //name
        name: "managerName",
        message: "What is your name?",
        type: "input",
    },
    {
        //employee id
        name: "managerEmployeeId",
        message: "What is your Employee ID?",
        type: "input",
    },
    {
        //email
        name: "managerEmail",
        message: "What is your email address?",
        type: "input",
    },
    {
        //office number
        name: "managerOfficeNum",
        message: "What is your office number",
        type: "input",
    },
];

const engineerQuestions = [
    {
        //name
        name: "engineerName",
        message: "What is the Engineer's name?",
        type: "input",
    },
    {
        //employee id
        name: "engineerEmployeeId",
        message: "What is the Engineer's Employee ID?",
        type: "input",
    },
    {
        //email
        name: "engineerEmail",
        message: "What is the Engineer's email address?",
        type: "input",
    },
    {
        //GitHub username
        name: "engineerGitHub",
        message: "What is the Engineer's GitHub username",
        type: "input",
    },
];

const internQuestions = [
    {
        //name
        name: "internName",
        message: "What is the Intern's name?",
        type: "input",
    },
    {
        //employee id
        name: "internEmployeeId",
        message: "What is the Intern's Employee ID?",
        type: "input",
    },
    {
        //email
        name: "internEmail",
        message: "What is the Intern's email address?",
        type: "input",
    },
    {
        //school
        name: "internSchool",
        message: "What is the name of the Intern's school?",
        type: "input",
    },
];

const menuQuestions = [
    {
        //select from these options
        name: "menu",
        message: "Please select one of these options:",
        type: "list",
        choices: ["Add an Engineer", "Add an Intern", "Finish and exit"],
    },
];

//html stuff
const generateEngineerCards = () => {
    let cards = '';
    if (engineerArray.length > 0) {
        for (let i = 0; i < engineerArray.length; i++) {
            const engineer = engineerArray[i];
            console.log(engineer);
            cards += `<div class="tile is-4 is-parent">
        <div class="tile is-child box">
        <p class="title">${engineer.name}</p>
                <p class="subtitle">${engineer.getRole()}</p>
                <div class="content">
                <li>ID: ${engineer.id}</li>
                <li>Email: <a href="mailto:${engineer.email}" target="_blank">${engineer.email}</a></li>
                <li>GitHub: <a href="https://github.com/${engineer.gitHub}" target="_blank">${engineer.gitHub}</a></li>
                </div>
        </div>
        </div>`;
        }
        return cards;
    } else {
        return '';
    }
};

const generateInternCards = () => {
    let cards = '';
    if (internArray.length > 0) {
        for (let i = 0; i < internArray.length; i++) {
            const intern = internArray[i];
            console.log(intern);
            cards += `<!-- intern tile -->
            <div class="tile is-4 is-parent">
            <div class="tile is-child box">
            <p class="title">${intern.name}</p>
            <p class="subtitle">${intern.getRole()}</p>
            <div class="content">
            <li>ID: ${intern.id}</li>
            <li>Email: <a href="mailto:${intern.email}" target="_blank">${intern.email}</a></li>
            <li>School: ${intern.school}</li>
            </div>
        </div>
        </div>`;
        }
        return cards;
    } else {
        return '';
    }
}

const generateHTML = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${managerArray[0].name}'s Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="style.css" />
</head>
<body>
<section class="hero is-primary">
    <div class="hero-body">
    <p class="title">
    My Team
    </p>
    </div>
</section>


<div class="tile is-ancestor is-flex-wrap-wrap">
<!-- manager tile -->
    <div class="tile is-4 is-parent">
    <div class="tile is-child box">
    <p class="title">${managerArray[0].name}</p>
    <p class="subtitle">${managerArray[0].getRole()}</p>
    <div class="content">
    <li>ID: ${managerArray[0].id}</li>
    <li>Email: <a href="mailto:${managerArray[0].email}" target="_blank">${managerArray[0].email}</a></li>
    <li>Office Number: ${managerArray[0].officeNumber}</li>
    </div>
    </div>
    </div>
    

${generateEngineerCards()}
${generateInternCards()}


</div>

<!-- Added link to the jQuery library -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script type="text/javascript" src="/index.js"></script>
</body>
</html>`;
}



//start the app
function init() {
    inquirer.prompt(managerQuestions)
        .then((data) => {
            const manager = new Manager(data.managerName, data.managerEmployeeId, data.managerEmail, data.managerOfficeNum)
            managerArray.push(manager);
            menuPrompt();
        }
        )
}

//menu question logic
function menuPrompt() {
    inquirer.prompt(menuQuestions)
        .then((data) => {
            if (data.menu == 'Add an Engineer') {
                engineerPrompt();
            } else if (data.menu == 'Add an Intern') {
                internPrompt();
            } else if (data.menu == 'Finish and exit') {
                fs.writeFile('dist/index.html', generateHTML(managerArray, engineerArray, internArray), (error) =>
                    error ? console.log(error) : console.log('file write success'))
            } else {
                console.log('Oops! Something wrong happened!');
            }
        })
}

//engineer prompts
function engineerPrompt() {
    inquirer.prompt(engineerQuestions)
        .then((data) => {
            const engineer = new Engineer(data.engineerName, data.engineerEmployeeId, data.engineerEmail, data.engineerGitHub);
            engineerArray.push(engineer);
            menuPrompt();
        })
}

//intern prompts
function internPrompt() {
    inquirer.prompt(internQuestions)
        .then((data) => {
            const intern = new Intern(data.internName, data.internEmployeeId, data.internEmail, data.internSchool);
            internArray.push(intern);
            menuPrompt();
        })
}

init();