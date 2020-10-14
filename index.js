// const fs = require("fs");

const inquirer = require("inquirer");


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
      name: "description",
      message: "What in the heck duz this thing do?"
    },
    {
      type: "input",
      name: "usage",
      message: "What duz user need to know about da usage of dis thang??",
    },
    {
      type: "input",
      name: "contributing",
      message: "Who helped u maek dis thing?",
    },
    {
        type: "list",
        name: "license",
        message: "You got a license for dat thing?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
  ];
  function init() {
    inquirer.prompt(content)
    .then((inquirerResponses) => {
      console.log(inquirerResponses);
    })};
  init()