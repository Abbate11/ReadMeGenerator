// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'username',
    message: 'Enter your github username...'
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email...'
},
{
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project...'
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project...'
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project...',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
},
{
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions for your project...'
},
{
    type: 'input',
    name: 'usage',
    message: 'Enter usage information for your project...'
},
{
    type: 'input',
    name: 'contribution',
    message: 'Tell users how they can contribute to your project...'
},
{
    type: 'input',
    name: 'test',
    message: 'How can your project be tested?',
} 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   
    fs.writeFileSync(fileName, data, (err) => {
        if (err) throw err;
    })
};

// TODO: Create a function to initialize app
function init() {
    //ask the questions
    inquirer.prompt(questions).then((answers) => {
        // pass answers to big string
        const string = generateMarkdown(answers);
        //write file with big string
        console.log(answers)
        writeToFile('readme.md', string)
    })
};

// Function call to initialize app
init();
