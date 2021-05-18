const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');


// Questions for project Manager
const teamBuilder = () => {
    return inquirer.prompt([

    ])
};

// Questions for project Manager
const promptTeamMates = teamMemberData => {


    // If there's no 'projects' array property, create one
    if (!teamMemberData.projects) {
        teamMemberData.projects = [];
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
                    console.log("Please enter Team Member's name!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'memberClass',
            message: "What is the Team Member's Class (Required)",
            choices: ['Manager', 'Supervisor', 'Engineer', 'Inter']
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Team Member's id (Required)",
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
            type: 'list',
            name: 'otherType',
            message: "Please select additional info for Member",
            choices: ['Office number:', 'GitHub:', 'School:']
        },
        {
            type: 'input',
            name: 'otherInput',
            message: "Please enter your office number, GitHub or School (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your office number, GitHub or School!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: "Would you like to add another Member to the Team?",
            default: false,
        },
    ])

        .then(projectData => {
            teamMemberData.projects.push(projectData);
            if (projectData.confirmAddMember) {
                console.log(`
========================
Adding a new Team Member
========================
`);
                return promptTeamMates(teamMemberData);
            } else {
                return teamMemberData;
            }
        });


};

teamBuilder()
    .then(promptTeamMates)
    .then(teamData => {
        return generatePage(teamData);
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