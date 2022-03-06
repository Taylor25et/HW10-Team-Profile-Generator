const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { require } = require("yargs");

function managerQuery() {
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "Enter team manager's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter team manager's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter team manager's email address:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter team manager's office number:"
        },
    ]).then(val => {
        const manager = newManager(val.name, val.id, val.email, val.officeNumber);
        console.log(manager)
        teamMembers.push(manager);
        addTeamMember();
    })
};
