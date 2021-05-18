const generateProjects = projectsArr => {
  return `
    <section>
    <div class="padding name-title">
    ${projectsArr
      .filter(({ feature }) => feature)
      .map(({ memberClass, name, id, email, otherType, otherInput }) => {
        return `
          <h2>${name}</h2>
          <h3>${memberClass}</h3>
    </div>



    </div>

        `;
      })
      .join('')}

    ${projectsArr
      .filter(({ feature }) => !feature)
      .map(({ memberClass, name, id, email, otherType, otherInput }) => {
        return `
        <div>

        <div class="contact">

            <div class="card column is-12">
                <h3>ID:${id}</h3>
                <h3>Email:${email}</h3>
                <h3>${otherType} ${otherInput}</h3>
            </div>

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
  const { memberClass, name, id, email, otherType, otherInput, projects } = templateData;

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
              <h3>${memberClass}</h3>
              </div>
              
        
              ${generateProjects(projects)}

           
  
          </section>
  
      </main>
      <footer class="container text-center py-3">
          <h3 class="text-dark">&copy; ${new Date().getFullYear()} by David Crockett</h3>
        </footer>
  
  </body>
  
  </html>
  `;
};
