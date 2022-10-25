const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

describe("Engineer", () => {
// Testing that you can correctly set, the GitHub username property, of an Engineer instance:
  it('Should set github username via constructor arguments', () => {
    const testValue = 'gituser';
    const newEngr = new Engineer('Niloufar', 5, 'niloufar@gmail.com', testValue);
    expect(newEngr.github).toEqual(testValue);
  });
//Testing, that you can get the correct output from the getGitHub() method of an engineer instance:  
it('Should get github username via getGitHub()', () => {
  const testValue = 'gituser';
  const newEngr = new Engineer('Niloufar', 5, 'niloufar@gmail.com', testValue);
  const engGit = newEngr.getGitHub();
  expect(engGit).toEqual(testValue);
})
//Testing, that you can get the correct output from the getRole() method of a Engineer instance:
it('Should getRole() and return `Engineer`', () => {
    const testValue = 'Engineer';
    const newEngr = new Engineer('Niloufar', 5, 'niloufar@gmail.com', 'gituser');
    expect(newEngr.getRole()).toEqual(testValue);
  });
})
