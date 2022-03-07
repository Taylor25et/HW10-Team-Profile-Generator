// Pulling in my classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Pulling in my helpers
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Creating links to output
const folderPath = path.resolve(__dirname, "dist");
const filePath = path.join(folderPath, "index.html");

// Linking to my src
const render = require("./src/htmlRenderer");
const teamMembers = [];

function start() {
  managerInput();
}

// Array of questions for user input
// Inputs manager name, id, email, and office number
function managerInput() {
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
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      teamMembers.push(manager);
      employeeInput();
    });
}
// Selects the employee's role
function employeeInput() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please select Employee Role:",
        choices: ["Engineer", "Intern", "Finish Creating Team"],
      },
    ])
    .then((data) => {
      if (data.role === "Engineer") {
        engineerInput();
      } else if (data.role === "Intern") {
        internInput();
      } else {
        createTeam();
      }
    });
}
// Input Engineer info
function engineerInput() {
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
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      teamMembers.push(engineer);
      employeeInput();
    });
}
// Input Intern info
function internInput() {
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
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      teamMembers.push(intern);
      employeeInput();
    });
}
// Finishing Team creation & redirect to rendering
function createTeam() {
  fs.writeFileSync(filePath, render(teamMembers));
}

start();
