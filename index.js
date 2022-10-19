// Packages for this application
const inquirer = require('inquirer');
const fs = require('fs');


const questions = [];

// Licenses
const generateLicense = function(license){
	if (license === 'Apache License 2.0') {
		return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
	} 
	if (license === 'MIT License') {
		return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
	}
	if (license === 'GNU General Public License v3.0') {
		return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
	}
}

function init() {

// README Content	
const generateREADME = ({ title, overview, functionality, code, comments, repository, url, viewing, usage, license, contributing, questions }) => 

`# Project Title ${title}
## Overview 

${overview}

## Table of Contents 

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Functionality](#functionality)
- [Code](#code)
- [Comments](#comments)
- [Repository](#repository)
- [URL](#url)
- [Viewing](#viewing)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Functionality 

${functionality}

## Code 

${code}

##  Comments 

${comments}

##  Repository 

${repository}

## URL 

${url}

## Viewing 

${viewing}

## Usage 

${usage}

## License 

${generateLicense (license)}

## Contributing 

${contributing}

## Questions 

${questions}
`

// Inquirer Questions.
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Add a unique title for the application.',
    },
		{
      type: 'input',
      name: 'overview',
      message: 'Provide an overview of what the application does.',
    },
    {
      type: 'input',
      name: 'functionality',
      message: 'Explain the functionality and steps in how someone uses the application.',
    },
    {
      type: 'input',
      name: 'code',
      message: 'Which files are containted in the computer code?  For example, list if the code contain an html page, a css page, a Javascript page, etc.  List any third party APIs the project uses. ',
    },
    {
      type: 'input',
      name: 'comments',
      message: 'Explain how the project uses comments in the various pages of the code, such as in the HTML code, CSS code and JavaScript code.',
    },
    {
      type: 'input',
      name: 'repository',
      message: 'Provide a link to the github repository for the application.',
    },
    {
			type: 'input',
			name: 'url',
			message: 'Provide a link to the url of the deployed application.',
		},
		{
			type: 'input',
			name: 'viewing',
			message: 'Explain how a developer views the application when making coding changes?  For example, is there an index.html file?',
		},
		{
			type: 'input',
			name: 'usage',
			message: 'Add a link to an image that shows the web application appearance and functionality.',
		},
		{
			type: 'list',
			name: 'license',
			message: 'What type of license does the application have?  Choose one of the following licenses?',
			choices: ['Apache License 2.0', 'MIT License', 'GNU General Public License v3.0']
		},
		{
			type: 'input',
			name: 'contributing',
			message: 'Please list the names of any contributors to the application.',
		},
		{
			type: 'input',
			name: 'questions',
			message: 'Please type your email address for questions relating to the application.',
		},
  ])
	
.then((answers) => {
	const readmePageContent = generateREADME(answers);

	fs.writeFile('README.md', readmePageContent, (err) =>
		err ? console.log(err) : console.log('Successfully created README.md!')
	);
});

}

init();
