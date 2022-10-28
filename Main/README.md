# team-profile
Generate Employees Team Profile

UCLA Bootcamp Challenge  - Module 6

Due Date 10/25/2022

## Challenge Tasks

Build a command line application that takes information about employees and generates an HTML webpage that displays a summary for each person. Your application needs to ensure that every part of your code passes testing.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Requirements

- Use command line to accept user inputs
- Generate an HTML file based on the user's inputs
- Prompts for a employees and their information to include:
- Start the application with prompts to enter Manager's name, id, email address and office number
- Present a menu of choices to add an Engineer, Intern or finished building team
- If Engineer is selected then prompt for Engineer's name, id, email address and GitHub username
- your HTML file should open their GitHub profile once their link is selected
- If Intern is selected then prompt for Intern's name, id, email address and School
- Email addresses needed to open and populate the TO field of the email once it is clicked
- If finsihed building team is selected then exit the application and generate the HTML file.

The following image shows a mockup of the generated HTML appearance and functionality.
![Text page with 3 sections showing employee information](./dist/Img/My%20Team.png))

- Must include Employee, Manager, Engineer, Intern classes
- Test for each class properties, name, id, email, getName, getId, getEmail, getRole
- for Mangaer also test for officeNumber, getofficeNumber and getRole
- for Engineer also test for github, getGithub and getRole
- for Intern also test for school, getSchool and getRole

## Video
You can see a video demonstration for this app [here](https://app.castify.com/view/662a9635-d4c9-4ba1-b040-c6e1c93a1d95)

## GitHub 
ReRepository for Team Profile application can be found at: [GitHub](https://github.com/Me-ross/team-profile/tree/main/Main)