const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message:
        "Provide a short description explaining the what, why, and how of your project.",
      name: "description",
    },
    {
      type: "input",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      name: "install",
    },
    {
      type: "input",
      message: "Provide instructions and examples for use.",
      name: "instruction",
    },
    {
      type: "input",
      message:
        "List your collaborators, if any, with links to their GitHub profiles.",
      name: "collaborators",
    },
    {
      type: "input",
      message:
        "If you would like other developers to contribute to your project, you can include guidelines for how to do so",
      name: "contribute",
    },
    {
      type: "input",
      message: "How would you like developers to report issues?",
      name: "report",
    },
    {
      type: "list",
      message: "Choose one of the following licenses to add to your README:",
      name: "list",
      choices: [
        "Apache 2.0 License",
        "BSD 3-Clause License",
        "BSD 2-Clause License",
      ],
    },
    {
      type: "input",
      message: "Enter your github username",
      name: "username",
    },
    {
      type: "input",
      message: "Enter your email username",
      name: "email",
    },
  ])
  .then((response) => {
    var licenseChosen;
    if (response.list === "Apache 2.0 License") {
      licenseChosen =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    if (response.list === "BSD 3-Clause License") {
      licenseChosen =
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }
    if (response.list === "BSD 2-Clause License") {
      licenseChosen =
        "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    }
    var readmeText = `# ${response.title} 

## Description
## ${response.description}

## Table of Contents
- [Installation](#install)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
### ${response.install}

## Usage 
### ${response.instruction}

## Credits
### ${response.collaborators}
### ${response.contribute}
### ${response.report}

## License
### ${licenseChosen}

### [Github Link](https://github.com/${response.username})
### [Gmail Link](https://gmail.com/${response.email})
    `;

    fs.writeFile("generatedREADME.md", readmeText, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
