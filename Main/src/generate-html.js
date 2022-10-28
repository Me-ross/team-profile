
let combineEmployees = '';

//  generate html main page
const htmlPage = employeeInfo => {
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
    
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"/>
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    <body>
      <header>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 jumbotron">
              <h1 class="display-4">My Team</h1>
            </div>
          </div>
        </div>
      </header>

    <!-- Employee cards main container -->
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-center team">
        
        ${generateEmployees(employeeInfo)}
  
        </div>
      </div>
    </div>
   
  </body>
  </html>    
    `;
}
// generate the employee sections using the array of employees exported from index file
function generateEmployees(employeeInfo){
  // loop through the employee array to handle each type of employee differently
  for (let i = 0; i < employeeInfo.length; i++){
    const currentEmp = employeeInfo[i];
    // look for the employee with Manager as Role and build HTML
    if(currentEmp.getRole() === 'Manager'){
      const managerHtml = `<div class="card employee m-2">
      <div class="card-header">
        <h5 class="card-title">${currentEmp.name}</h5>
        <h5 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h5>
      </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item ">ID: ${currentEmp.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${currentEmp.email}">${currentEmp.email}</a></li>
            <li class="list-group-item">Office number: ${currentEmp.officeNumber}</li>
          </ul>
        </div>
      </div>`;

  // Start buidling the employee info section with Manager and add to it
      combineEmployees = combineEmployees + managerHtml;
  
// look for the employee with Engineer as Role and build HTML
    } else if(currentEmp.getRole() === 'Engineer'){
        const engrHtml = `<div class="card employee m-2">
          <div class="card-header">
          <h5 class="card-title">${currentEmp.name}</h5>
          <h5 class="card-title"><i class="fas fa-glasses mr-2"></i> Engineer</h5>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item ">ID: ${currentEmp.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${currentEmp.email}">${currentEmp.email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/sallyhub" target="_blank" >${currentEmp.github}</a></li>
            </ul>
          </div>
        </div> `;
// add engineers to the Managers string
        combineEmployees = combineEmployees + engrHtml;
   
// look for the employee with Intern as Role and build HTML
    } else if(currentEmp.getRole() === 'Intern'){
        const internHtml = `<div class="card employee m-2">
          <div class="card-header">
            <h5 class="card-title">${currentEmp.name}</h5>
            <h5 class="card-title"><i class="fas fa-user-graduate mr-2"></i> Intern</h5>
          </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item ">ID: ${currentEmp.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${currentEmp.email}">${currentEmp.email}</a></li>
                <li class="list-group-item">School: ${currentEmp.school}</li>
              </ul>
            </div>
          </div> `;

// Add Intern to the manager and engineer string
        combineEmployees = combineEmployees + internHtml;
        } else if(i > employeeInfo.length){
            return 
        }
  }
  return combineEmployees;
}

// export html page to create the HTML file
module.exports = htmlPage