const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const htmlPage = require('./src/generate-html');

const teamMembers = [];

// Prompt for questions regarding Manager Information
function init(){
function createManager() {
  inquirer
    .prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is your team manager`s name?',
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'What is your team manager`s Employee ID?',
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'What is your team manager`s email?',
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: 'What is your team manager`s office number?',
    },
   ])
   .then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOfficeNumber,
    );
    teamMembers.push(manager);
    createTeam();
   })
}

// give choice of how to continue
function createTeam() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'choiceOfRole',
        message: 'What type of employee would you like to add?',
        choices:['Engineer', 'Intern', 'None'],
      },
    ])
    .then((choice) => {
      switch(choice.choiceOfRole) {
        case 'Engineer':
          createEngineer();
          break;
        case 'Intern':
          createIntern();
            break;
        case 'None':
          buildTeam();
            break;
        }
    })
}

// Prompt for questions regarding Engineer Information
function createEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: 'what is your Engineer`s name?',
      },
      {
        type: 'input',
        name: 'engineerId',
        message: 'What is your Engineer`s id?',
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'What isy our Engineer`s email address?',
        },
      {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is your Engineer`s GitHub userid ?',
      },
    ])
    .then ((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub,
      );
      teamMembers.push(engineer)
      createTeam();
    })
}

// Prompt for questions regarding Intern Information
function createIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'internName',
        message: 'what is your Intern`s name?',
      },
      {
        type: 'input',
        name: 'internId',
        message: 'What is your Intern`s id?',
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'What is your Intern`s Email address',
      },
      {
        type: 'input',
        name: 'internSchool',
        message: 'What school did you Intern attend?'
      }
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool,
      );
      teamMembers.push(intern)
      createTeam();
    })
}

// write HTML file
function buildTeam() {
  fs.writeFile('./dist/teamProfile.html', htmlPage(teamMembers), (err) => err ? console.log(err) : console.log ('teamProfile.html created!')
  );
}
 
createManager();
}
init();


