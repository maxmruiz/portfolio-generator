// Importing modules
const inquirer = require('inquirer');
const fs = require('fs');

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?'
        },
        {
            type: 'input',
            name: 'place',
            message: 'Where are you from?'
        },
        {
            type: 'input',
            name: 'bio',
            message: 'Write a short description about yourself'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What languages do you know?',
            choices: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Python', 'React', 'C#']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub profile URL:'
        }
    ]);
}

function generateHTML(answers) {
    return `
    ${answers.name}
    ${answers.food}
    ${answers.place}
    ${answers.bio}
    ${answers.languages}
    ${answers.github}
    `;
    //HTML will go here
}

promptUser()
    .then(answers => {
        const htmlContent = generateHTML(answers);
        fs.writeFile('portfolio.html', htmlContent, err => {
            if (err) {
                console.error('Error writing file', err);
                return;
            }
            console.log('Portfolio generated');
        });
    })
    .catch(err => {
        console.error('Error', err);
    });
