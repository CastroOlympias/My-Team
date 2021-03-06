const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');


// This prompt from html generator module is some how tied to this success of this app, I've done some testing with my tutor to get removed, but once it can run while being removed, it doesn't populate the whole team, it will only show the last asked for team member on the webpage
const teamBuilder = () => {
    return inquirer.prompt([
        // {
        //     type: 'input',
        //     name: 'mgrName',
        //     message: "What is the Team Manager's name (Required)",
        //     validate: nameInput => {
        //         if (nameInput) {
        //             return true;
        //         } else {
        //             console.log("Please enter Team Managers's name!");
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'mgrId',
        //     message: "What is the Team Manager's ID (Required)",
        //     validate: nameInput => {
        //         if (nameInput) {
        //             return true;
        //         } else {
        //             console.log("Please enter Team Managers's ID!");
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'mgrEmail',
        //     message: "What is the Team Manager's eMail (Required)",
        //     validate: nameInput => {
        //         if (nameInput) {
        //             return true;
        //         } else {
        //             console.log("Please enter Team Managers's eMail!");
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'mgrPhone',
        //     message: "What is the Team Manager's office phone number (Required)",
        //     validate: nameInput => {
        //         if (nameInput) {
        //             return true;
        //         } else {
        //             console.log("Please enter Team Managers's office phone number!");
        //             return false;
        //         }
        //     }
        // },
    ])
};

// Questions for project Manager
const promptTeamMates = (teamMemberData) => {


    // If there's no 'teams' array property, create one
    if (!teamMemberData.teams) {
        teamMemberData.teams = [];
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
            choices: ['??? Manager', '??????????? Supervisor', '??????????????? Engineer', '??????????? Intern']
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
            choices: ['Office number: <a href="tel:', 'GitHub user name: <a href="https://github.com/', 'School: <a href="https://www.google.com/search?q=']
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
            teamMemberData.teams.push(projectData);
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