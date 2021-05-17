const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');


// Questions for project Manager
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Team Manager's name (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter Team Manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Team Manager's id (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's id");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "what is the Team Manager's email: (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter Team Manager's email!");
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "what is the Team Manager's office number? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter Team Manager's office number!");
                    return false;
                }
            }

        },
        {
            type: 'confirm',
            name: 'confirmMember',
            message: 'Would you like to add another Member to the Team?',
            default: false
        },
        {
            type: 'list',
            name: 'member',
            message: 'Please select a type of Memeber:',
            choices: ['Engineer', 'Intern'],
            when: ({ confirmMember }) => confirmMember
        }
    ]);
};


const promptProject = (portfolioData) => {
    console.log(`
=====================
Add a New Team Member
=====================
`);

    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Team Member's name (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Member's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Team Memember's id (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Member's id");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "what is the Team Member's email: (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter Team Member's email!");
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'github',
            message: "what is the Team Memmbers GitHub name? (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter Team Mmember's GitHub name!");
                    return false;
                }
            }

        },
        {
            type: 'confirm',
            name: 'confirmMember',
            message: 'Would you like to add another Member to the Team?',
            default: false
        },
        {
            type: 'list',
            name: 'member',
            message: 'Please select a type of Memeber:',
            choices: ['Engineer', 'Intern'],
            when: ({ confirmMember }) => confirmMember
        },
    ])

        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        });

};
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        return generatePage(portfolioData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });