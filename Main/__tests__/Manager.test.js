const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
// Testing that you can correctly set, the office number property, of a manager instance:  
  it('Should set office number via constructor arguments', () =>{
    const testValue = 415;
    const newMngr = new Manager('Niloufar', 5, 'niloufar@gmail.com', testValue);
    expect(newMngr.officeNumber).toEqual(testValue);
  });
//Testing, that you can get the correct output from the getOfficeNumber() method of a Manager instance:
  it('Should get office# via getOfficeNumber()', () => {
    const testValue = 415;
    const newMngr = new Manager('Niloufar', 5, 'niloufar@gmail.com', testValue);
    const mngNum = newMngr.getofficeNumber();
    expect(mngNum).toEqual(testValue);
  })  
//Testing, that you can get the correct output from the getRole() method of a Manager instance:
it('Should getRole() and return `Manager`', () => {
    const testValue = 'Manager';
    const newMngr = new Manager('Niloufar', 5, 'niloufar@gmail.com', 415);
    expect(newMngr.getRole()).toEqual(testValue);
  });
})