// Import dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Use Inquirer to gather information from user
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please describe, step by step, how to install your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe step by step, how to use this project.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'If someone was to contribute to this project, what guidelines would you like them to follow?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Are there any special tests for this project or intructions for others to do so?  If so include them here or enter None.'
    },
    {
        type: 'list',
        message: 'Which license would you like to include with this project?',
        name: 'license',
        choices: ['MIT', 'GPL_v3', 'AGPL']
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
  ]) // Write the user response to a file by chaining the below callback method to the prompt above.
  .then(function(data) {
    fs.writeFile('./myReadme/README.md', generateMarkdown(data), function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('Success!  Your readme is now in the myReadme folder.');
    });
  });