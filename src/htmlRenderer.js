function generateHTML(team) {
  function managerHTML(manager) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${manager.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <p class="card-text">Manager ID: ${manager.getId()}</p>
                <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
                <a href="#" class="card-link">Email: ${manager.getEmail()}</a>
            </div>
        </div>
        `;
  }
  function engineerHTML(engineer) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${engineer.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                <p class="card-text">Manager ID: ${engineer.getId()}</p>
                <p class="card-text">Office Number: ${engineer.getGithub()}</p>
                <a href="#" class="card-link">Email: ${engineer.getEmail()}</a>
            </div>
        </div>
        `;
  }
  function internHTML(intern) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${intern.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <p class="card-text">Manager ID: ${intern.getId()}</p>
                <p class="card-text">Office Number: ${intern.getSchool()}</p>
                <a href="#" class="card-link">Email: ${intern.getEmail()}</a>
            </div>
        </div>
        `;
  }

  const html = [];
  html.push(team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerHTML(manager))
  );
  html.push(team
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => engineerHTML(engineer))
);
html.push(team
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
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>

      <main>
      ${generateHTML(team)}
      </main>
</body>
</html>
    `;
};
