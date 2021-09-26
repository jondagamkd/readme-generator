// Import dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Use Inquirer to gather information from user
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'Slack', 'smoke signal']
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'SQL']
    }
  ]) // Write the user response to a file by chaining the below callback method to the prompt above.
  .then(function(data) {
    fs.writeFile('README2.md', generateMarkdown(data), function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('Success!');
    });
  });