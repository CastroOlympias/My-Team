const generateTeam = teamArr => {
    return `

    ${teamArr
            .filter(({ teamMember }) => !teamMember)
            .map(({ name, memberClass, id, email, otherType, otherInput }) => {
                return `
        <div class="dynamic-column small-screen shadows padding-none">
        <div class="padding-small name-title">
            <h2>${name}</h2>
            <h3>${memberClass}</h3>
        </div>
        <div class="smoke-white padding-medium">
            <div class="white border">
                <div class="padding-small">
                    <h4>ID:${id}</h4>
                </div>
                <div class="padding-small border-top-bottom">
                    <h4>eMail:<a href="mailto:${email}">${email}</a></h4>
                </div>
                <div class="padding-small">
                    <h4>${otherType}${otherInput}">${otherInput}</a></h4>
                </div>
            </div>
        </div>
    </div>
      `;
            })
            .join('')}
  `;
};

module.exports = templateData => {
    // destructure page data by section
    const { teams } = templateData;

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
      <main>
          <section class="flex-direction-row">

            ${generateTeam(teams)}

          </section>
      </main>
      <footer>
      <h2 class="footer white">&copy; ${new Date().getFullYear()} by David Crockett</h2>
  </footer>
  </body>
  </html>
  `;
};
