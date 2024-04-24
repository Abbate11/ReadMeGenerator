// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
  return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'APACHE 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === 'GPL 3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'BSD 3') {
    return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
  } else {
    return '';
  };
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== 'None') {
    return '* [License](#License)';
    } else {
      return '';
    };  

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license !== 'None') {
  return `
  ## License 
  This project is licensed with ${license}`
} 
  return '';
}
 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description

  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)
  

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributions

  ${data.contribution}

  ## Testing

  ${data.test}

  `;
}

module.exports = generateMarkdown;
