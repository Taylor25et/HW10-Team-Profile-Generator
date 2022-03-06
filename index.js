const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

function start() {
  managerQuery();
}
// Array of questions for user input
// Inputs manager name, id, email, and office number
function managerQuery() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter team manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter team manager's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter team manager's email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter team manager's office number:",
      },
    ])
    .then(val => {
      const manager = newManager(val.name, val.id, val.email, val.officeNumber);
      console.log(manager);
      teamMembers.push(manager);
      employeeQuery();
    });
}
// Selects the employee's role
function employeeQuery() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please select Employee Role:",
        choices: ["Engineer", "Intern", "Finish Creating Team"],
      },
    ])
    //this part might cause errors
    .then(role => {
      if (role === "Engineer") {
        engineerQuery();
      } else if (role === "Intern") {
        internQuery();
      } else {
        createTeam();
      }
    });
}
// Input Engineer info
function engineerQuery() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter new Engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter new Engineer's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter new Engineer's email address:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter new Engineer's GitHub username:",
      },
    ])
    .then(val => {
      const engineer = newEngineer(val.name, val.id, val.email, val.github);
      console.log(engineer);
      teamMembers.push(engineer);
      employeeQuery();
    });
}
// Input Intern info
function internQuery() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter new Intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter new Intern's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter new Intern's email address:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter new Intern's school:",
      },
    ])
    .then(val => {
      const intern = newIntern(val.name, val.id, val.email, val.school);
      console.log(intern);
      teamMembers.push(intern);
      employeeQuery();
    });
}
// Finishing Team creation & redirect to rendering
function createTeam() {}

start();
