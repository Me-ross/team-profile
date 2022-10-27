
// console.log(teamMembers);
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
        <link rel="stylesheet" href="./Main/dist/style.css">
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
      currentEmp = employeeInfo[i];
    if(currentEmp.getRole() === 'Manager'){
      return`  <div class="card employee m-2">
      <div class="card-header">
        <h5 class="card-title">${currentEmp.name}</h5>
        <h5 class="card-title"><i class="fas fa-mug-hot -2"></i>Manager</h5>
      </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item ">ID:$urrentEmp.id}li>
            <li class="list-group-item">Email: <a ="mailto:${currentEmp.email}">$urrentEmp.email}</a></li>
            <li class="list-group-item">Office numr:$urrentEmp.officeNumber}</li>
          </ul>
        </div>
      </div>`;
    } else if(currentEmp.getRole() === 'Engineer'){
        console.log('Engineer')
        return` <div class="card employee m-2">
          <div class="card-header">
          <h5 class="card-title">${currentEmp.name}</h5>
          <h5 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h5>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item ">ID: ${currentEmp.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${currentEmp.email}">${currentEmp.email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/sallyhub" target="_blank" >${currentEmp.github}</a></li>
            </ul>
          </div>
        </div> `;
    } else if(currentEmp.getRole() === 'Intern'){
        console.log('Intern')
        return`<div class="card employee m-2">
          <div class="card-header">
            <h5 class="card-title">${currentEmp.name}</h5>
            <h5 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h5>
          </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item ">ID: ${currentEmp.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${currentEmp.email}">${currentEmp.email}</a></li>
                <li class="list-group-item">School: ${currentEmp.school}</li>
              </ul>
            </div>
          </div> `;
        } else {
            console.log('error')
        }
    }
}
    
//   const managerHtml = manager => {
//     console.log(manager);
//       return`
//       <div class="card employee m-2">
//       <div class="card-header">
//         <h5 class="card-title">${manager.getName()}</h5>
//         <h5 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h5>
//       </div>
//       <div class="card-body">
//         <ul class="list-group">
//           <li class="list-group-item ">ID: ${manager.getId()}</li>
//           <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
//           <li class="list-group-item">Office number: ${manager.getofficeNumber()}</li>
//         </ul>
//       </div>
//     </div>`;
//   };
  
//   const engineerProfile = engineer => {
//     return`
//     <div class="card employee m-2">
//     <div class="card-header">
//       <h5 class="card-title">${engineer.getName()}</h5>
//       <h5 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h5>
//     </div>
//     <div class="card-body">
//       <ul class="list-group">
//         <li class="list-group-item ">ID: ${engineer.getId()}</li>
//         <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
//         <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" >${engineer.getGithub()}</a></li>
//       </ul>
//     </div>
//   </div>`;
//   };

//   const internProfile = intern => {
//     return`
//     <div class="card employee m-2">
//     <div class="card-header">
//       <h5 class="card-title">${intern.getName()}</h5>
//       <h5 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h5>
//     </div>
//     <div class="card-body">
//       <ul class="list-group">
//         <li class="list-group-item ">ID: ${intern.getId()}</li>
//         <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
//         <li class="list-group-item">School: ${intern.getSchool()} </li>
//       </ul>
//     </div>
//   </div>`;
//   };


// const combineHtml = [];

// combineHtml.push(managerProfile);

// combineHtml.push(employeeInfo.filter())

// function engineers(teamMembers) {
//     let engineers = teamMembers.filter(getRole() === 'Engineer');
//     console.log(engineers);
// }
// engineers();
module.exports = htmlPage