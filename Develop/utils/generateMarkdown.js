// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return ``
  }
    return '';
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
  return `[license title](license url)`
  }  
  return '';
  
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
  ${renderLicenseSection(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#isage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Installation

  ## Usage

  ## Contributions

  ## Testing
  

  `;
}

module.exports = generateMarkdown;
