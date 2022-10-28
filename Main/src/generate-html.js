
let combineEmployees = '';

const htmlPage = employeeInfo => {
    // console.log(employeeInfo);
    // employeeInfo.forEach(Employee => {
    //     console.log(Employee)
    // });
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

function generateEmployees(employeeInfo){
  console.log('generateEmployees function')
  console.log(employeeInfo)
  for (let i = 0; i < employeeInfo.length; i++){
    const currentEmp = employeeInfo[i];
    console.log(employeeInfo[i]);
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

      combineEmployees = combineEmployees + managerHtml;
      console.log(combineEmployees)

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

        combineEmployees = combineEmployees + engrHtml;
      console.log(combineEmployees)
        // combineEmployees.join(engrHtml);
        // combineEmployees.concat(engrHtml);
    


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

        //   combineEmployees.join(internHtml)
        combineEmployees = combineEmployees + internHtml;
        console.log(combineEmployees)
        } else if(i > employeeInfo.length){
            console.log(combineEmployees);
            return 
            
        }
  }
  return combineEmployees;
}


module.exports = htmlPage