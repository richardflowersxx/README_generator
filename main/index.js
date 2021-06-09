const inquirer = require ('inquirer');
const fs = require('fs');

inquirer
    .prompt([
            {
                type: 'input',
                message: 'What is your GitHub username',
                name: 'github',
            },
            {
                type: 'input',
                message: 'What is your email address',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is your project\'s name',
                name: 'project',
            },
            {
                type: 'input',
                message: 'Please write a short description of your project',
                name: 'description',
            },
            {
                type: 'list',
                message: 'What kind of license should your project have',
                name: 'license',
                choices:[
                    "MIT",
                    "APACHE 2.0",
                    "GPL 3.0",
                    "BSD 3",
                    "None",
                ],
            },
            {
                type: 'input',
                message: 'What command should be run to install dependencies',
                name: 'installation',
                default:'nmp i'
            },
            {
                type: 'input',
                message: 'What command should be run to run test',
                name: 'test',
                default: ' npm run test'
            },
            {
                type: 'input',
                message: 'What does the user need to know about using the repo',
                name: 'usage',
            }, 
            {
                type: 'input',
                message: 'What does the user need to know about contributing to the repo',
                name: 'contributing',
            },
        ])
        .then((response) =>{
            console.log("making README")
            fs.writeFile('README.md',
            generateMarkdown(response), function (err){
                console.log(err)
            })
        })

        function generateMarkdown (response){
return `
# ${response.project}

## Description
${response.description}

## Table of contents
-[Installation](#installation)

-[Usage](#usage)

-[License](#license)

-[contributing](#license)

-[test](#test)

-[question](#question)

## Installation
to install necessary dependecies, run the following command:

**${response.installation}**

## Usage
${response.usage}

## License
${response.license}

## Contributing
${response.contributing}

## test
** ${response.test} **

# Question 
if you have any question about the repo, open an issue. You can find more of my work at [richardflowersxx](https://github.com/richardflowersxx)

 `
        }
