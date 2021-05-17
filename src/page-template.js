// Create the about section
const generateAbout = about => {
  if (!about) {
    return '';
  }

  return `
  <section class="my-3" id="about">
  <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
  <p>${about}</p>
  </section>
  `;
};

const generateProjects = projectsArr => {
  return `
    <section>
    <div class="padding name-title">
    ${projectsArr
      .filter(({ feature }) => feature)
      .map(({ name, description, languages, link }) => {
        return `
          <h2${name}</h2>
          <h3>Manager</h3>
         
          ${languages.join(', ')}
          </h5>
          <p>${description}</p>
          <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
        </div>
        `;
      })
      .join('')}

    ${projectsArr
      .filter(({ feature }) => !feature)
      .map(({ name, description, languages, link }) => {
        return `
        <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
          <h3 class="portfolio-item-title text-light">${name}</h3>
          <h5 class="portfolio-languages">
          Built With:
          ${languages.join(', ')}
          </h5>
          <p>${description}</p>
          <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
        </div>
      `;
      })
      .join('')}
    </div>
    </section>
  `;
};

module.exports = templateData => {
  // destructure page data by section
  const { name, id, email, projects, about, ...header } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
      <link rel="stylesheet" href="./style.css">
  </head>
  
  <body>
      <header class="header">
          <h1>My Team</h1>
      </header>
      <main class="flex-direction-row">
  
          <section>
              <div class="padding name-title">
                  <h2>${name}</h2>
                  <h3>Manager</h3>
              </div>
  
              <div>
  
                  <div class="contact">
                        
                      <div class="card column is-12">
                          <h3>ID:${id}</h3>
                          <h3>ID:${email}</h3>
                          <h3>ID: 1ddddddddddddddd</h3>

                          ${generateAbout(about)}
                          ${generateProjects(projects)}
                      </div>
  
                  </div>
  
              </div>
  
          </section>
  
      </main>
      <footer class="container text-center py-3">
          <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
        </footer>
  
  </body>
  
  </html>
  `;
};
