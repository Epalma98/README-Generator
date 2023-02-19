
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    wtfpl: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    mit: '[MIT](https://choosealicense.com/licenses/mit/)',
    isc: '[ISC](https://choosealicense.com/licenses/isc/)',
    wtfpl: '[WTFPL](https://choosealicense.com/licenses/wtfpl/)'
  }
  return licenseLinks[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `Licensed under the ${renderLicenseLink(license)} license`
  } else {
    return ' '
  }
}

// TODO: Create a function to generate markdown for README
// README template
function generateMarkdown(answers) {
  return `
# ${answers.title}

${renderLicenseBadge(answers.license)}

## Table of Content
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Test
${answers.test}

## License
${renderLicenseSection(answers.license)}

## Questions
How to get in contact with me:
* Github: https://github.com/${answers.github}
* Email: ${answers.email}
`;
}

module.exports = generateMarkdown;