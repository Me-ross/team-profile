const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");


describe("Intern", () => {
// Testing that you can correctly set, the school property, of an Intern instance:
it('Should set school via constructor arguments', () => {
    const testValue = 'ucla';
    const newIntrn = new Intern('Niloufar', 5, 'niloufar@gmail.com', testValue);
    expect(newIntrn.school).toEqual(testValue);
  });
  
  it('Should get school via getSchool()', () => {
    const testValue = 'ucla';
    const newIntrn = new Intern('Niloufar', 5, 'niloufar@gmail.com', testValue);
    const intSchool = newIntrn.getSchool();
    expect(intSchool).toEqual(testValue);
  });
  it('Should getRole() and return `Intern`', () => {
    const testValue = 'Intern';
    const newIntrn = new Intern('Niloufar', 5, 'niloufar@gmail.com', 'ucla');
    expect(newIntrn.getRole()).toEqual(testValue);
  });
})
