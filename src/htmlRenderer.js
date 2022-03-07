function generateHTML(team) {
  function managerHTML(manager) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">${manager.getName()}</h4>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <p class="card-text">Manager ID: ${manager.getId()}</p>
                <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
                <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
            </div>
        </div>
        `;
  }
  function engineerHTML(engineer) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">${engineer.getName()}</h4>
                <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                <p class="card-text">Employee ID: ${engineer.getId()}</p>
                <ul>
                    <li>GitHub Account: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>
                    <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                </ul>
            </div>
        </div>
        `;
  }
  function internHTML(intern) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">${intern.getName()}</h4>
                <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                <p class="card-text">Employee ID: ${intern.getId()}</p>
                <p class="card-text">School: ${intern.getSchool()}</p>
                <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
            </div>
        </div>
        `;
  }

  const html = [];
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerHTML(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerHTML(engineer))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internHTML(intern))
  );
  return html.join("");
}

module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    <title>Employee Roster</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid" style="background-color: #2783c5;">
        <div class="container">
          <h1 class="display-4">Employee Roster</h1>
          <p class="lead"></p>
        </div>
    </div>
    <main>
      ${generateHTML(team)}
    </main>
</body>
</html>
    `;
};
