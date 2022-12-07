const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');

let managerObject = [];
let engineerObject = [];
let internObject = [];

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
const generateEngineerCard = (engineerData) => {
    if (Object.keys(engineerData).length !== 0) {
    return `<div class="tile is-4 is-parent">
    <div class="tile is-child box">
    <p class="title">${engineerData.name}</p>
            <p class="subtitle">${engineerData.role}</p>
            <div class="content">
            <li>ID: ${engineerData.id}</li>
            <li>Email: <a href="mailto:${engineerData.email}" target="_blank">${engineerData.email}</a></li>
            <li>GitHub: <a href="https://github.com/${engineerData.gitHub}" target="_blank">${engineerData.gitHub}</a></li>
            </div>
    </div>
    </div>`} else {
    return '';
    }
};

const generateInternCard = (internData) => {
    if (Object.keys(internData).length != 0) {
    return `<div class="tile is-4 is-parent">
        <div class="tile is-child box">
            <p class="title">${internData.name}</p>
            <p class="subtitle">${internData.role}</p>
            <div class="content">
            <li>ID: ${internData.id}</li>
            <li>Email: <a href="mailto:${internData.email}" target="_blank">${internData.email}</a></li>
            <li>School: ${internData.school}</li>
            </div>
        </div>
        </div>`} else {
    return '';
    }
}

const generateHTML = (managerData, engineerData, internData) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${managerData.name}'s Team</title>
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

<!-- manager tile -->
<div class="tile is-ancestor">
    <div class="tile is-4 is-parent">
    <div class="tile is-child box">
    <p class="title">${managerData.name}</p>
    <p class="subtitle">${managerData.role}</p>
    <div class="content">
    <li>ID: ${managerData.id}</li>
    <li>Email: <a href="mailto:${managerData.email}" target="_blank">${managerData.email}</a></li>
    <li>Office Number: ${managerData.officeNumber}</li>
    </div>
    </div>
    </div>
    

${generateEngineerCard(engineerData)}
${generateInternCard(internData)}


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
        managerObject = {
            name: manager.name,
            id: manager.id,
            email: manager.email,
            officeNumber: manager.officeNumber,
            role: manager.getRole()
        }
        menuPrompt();
    }
    )
}

//menu question logic
function menuPrompt() {
    inquirer.prompt(menuQuestions)
    .then((data) => {
        if (data.menu =='Add an Engineer') {
            engineerPrompt();
        } else if (data.menu == 'Add an Intern') {
            internPrompt();
        } else if (data.menu == 'Finish and exit') {
            fs.writeFile('dist/index.html', generateHTML(managerObject, engineerObject, internObject), (error) =>
                error ? console.log(error): console.log('file write success'))
        } else {
            console.log('Oops! Something wrong happened!');
        }
    })
}

//engineer prompts
function engineerPrompt() {
    //limit to 3 engineers
 
        inquirer.prompt(engineerQuestions)
        .then((data) => {
            console.log(engineerObject.length);
            const engineer = new Engineer(data.engineerName, data.engineerEmployeeId, data.engineerEmail, data.engineerGitHub);
            engineerObject = {
                name: engineer.name,
                id: engineer.id,
                email: engineer.email,
                gitHub: engineer.getGitHub(),
                role: engineer.getRole()
            };
            //console.log(engineerObject);
            //engineer.getGitHub();
            //engineer.getRole();
            menuPrompt();
    })
}

//intern prompts
function internPrompt() {
    inquirer.prompt(internQuestions)
    .then((data) => {
        const intern = new Intern(data.internName, data.internEmployeeId, data.internEmail, data.internSchool);
        //intern.getSchool();
        internObject = {
            name: intern.name,
            id: intern.id,
            email: intern.email,
            school: intern.getSchool(),
            role: intern.getRole()
        }
        menuPrompt();
    })
}

init();