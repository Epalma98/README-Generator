const inquirer = require('inquirer')
const fs = require('fs');
const markdown = require('./generateMarkdown');

// Inquirer questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage information?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the testing instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to add?',
        choices: ['MIT','ISC','GNU GPL v3','None'],
        filter(val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email',
    },
    
]

//run query function
async function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const mark = markdown(answers)
        fs.writeFile('README.md', mark, function(err) {
            if(err) {
                console.log('Could not save file')
            }
        })
    })
    .catch((error) => {
        console.log(error)
    })
}

runQuery()