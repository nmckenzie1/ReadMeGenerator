const fs = require("fs");
const inquirer = require("inquirer");
const readmegenerator = require("./readmegenerator");
const path = require("path");


content = [
    {
      type: "input",
      name: "username",
      message: "Whaz ur username on Github?"
    }, 
    {
      type: "input",
      name: "email",
      message: "Where can peeps e-mail u??"
    },
    {
      type: "input",
      name: "title",
      message: "What is the name o dis thing u made?"
    },
    {
      type: "input",
      name: "projectName",
      message: "What is name of the repo on Github (camelCased)?"
    },
    {
      type: "input",
      name: "description",
      message: "Gimme a description of dis app?"
    },
    {
      type: "input",
      name: "usage",
      message: "Why would someone use dis app??",
    },
    {
      type: "input",
      name: "contributing",
      message: "Would you like people to be able to contribute to your repo? If yes, then how?",
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies?",
      default: "npm i"
    },
    {
      type: "input",
      name: "future",
      message: "What would you like to do with this app in the future??",
     },
    {
        type: "list",
        name: "license",
        message: "You got a license for dat thing?",
        choices: ["MIT", "APACHE 2.0", "GPLV3", "BSD 3", "None"]
    },
    {
      type: "input",
      name: "thanks",
      message: "Who helped you with this project?",
      
  },

  ];
  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  function init() {
    inquirer.prompt(content)
    .then((inquirerResponses) => {
      console.log(inquirerResponses);
      writeToFile("README.md", readmegenerator({...inquirerResponses}));
    })};
  init()