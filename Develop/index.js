// Packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');


const questions = [];

function init() {

const generateREADME = ({ title, overview, functionality, code, comments, repository, url, viewing, usage, license, contributing, questions }) => 

`
# Project Title ${title}
* Overview ${overview}
* Functionality ${functionality}
* Code ${code}
* Comments ${comments}
* Repository ${repository}
* URL ${url}
* Viewing ${viewing}
* Usage ${usage}
* License ${license}
* Contributing ${contributing}
* Questions ${questions}
`

// I need to put layout of readme here I believe, like miniproject example where they put layout of html page.

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
			type: 'choices',
			name: 'license',
			message: 'What type of license does the application have?  Choose one of the following licenses?',
			choices: ['Public', "Private"]
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


// Research write file more.

// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app