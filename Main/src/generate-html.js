function generateHtml(data){
console.log(data);
return `<!DOCTYPE html>
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
  </header>`
}
const managerHtml = manager => {
    
}

module.exports = generate-html;
