// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = '';
  if (data.license === "MIT") {
    licenseBadge = '[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://opensource.org/licenses/MIT)';
  }
  else if (data.license === "GPL_v3") {
    licenseBadge = '[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/LGPL-3.0/)';
  }
  else if (data.license === "AGPL") {
    licenseBadge = '[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)';
  }
  return `
<br />
<p align="center">
  <h1 align="center">${data.title}</h1>
</p>

${licenseBadge}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation

${data.install}

## Usage 

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.test}

## License

This project is covered under the ${data.license} license.

${licenseBadge}

## Questions

I can be contacted via email or on github at:

* E-mail: ${data.email}
* Github: https://github.com/${data.githubName}/


`;
}

module.exports = generateMarkdown;
