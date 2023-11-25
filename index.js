const inquirer = require('inquirer');
const fs = require('fs');
const {generateHTML, questions} = require('./generate-html');


inquirer.prompt(questions).then((answers) => {
    const html = generateHTML(answers);

    createHtmlFile(html);
});

const createHtmlFile = (Content) => 
    fs.writeFile('index.html', Content, (err) =>
        err? console.log(err) : console.log('Successfully created profile card!'));


