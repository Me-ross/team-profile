const Employee = require("../lib/Employee");

describe("Employee", () => {
// testing that you can correctly instantiate from the class Employee:
  it('Should create an instance of the class Employee', () => {
    // Act
    const newEmp = new Employee();
    // Assert
    expect(typeof newEmp).toEqual('object');
  });

// Testing that you can correctly set, the name property, of an employee instance:
  it('Should set name via constructor arguments', () => {
    // Arrange
    const testNameVal = 'Niloufar';
    // Act
    const newEmp = new Employee(testNameVal);
    // Assert
    expect(newEmp.name).toEqual(testNameVal);
  });

// Testing that you can correctly set, the id property, of an employee instance:
  it('Should set id via constructor arguments', () => {
    // Arrange
    const testIdVal = 5;
    // Act
    const newEmp = new Employee('Niloufar', testIdVal);
    // Assert
    expect(newEmp.id).toEqual(testIdVal);
  });

// Testing that you can correctly set, the email property, of an employee instance:
  it('Should set email via constructor arguments', () => {
    // Arrange
    const testEmailVal = 'niloufar@gmail.com';
    // Act
    const newEmp = new Employee('Niloufar', 5, testEmailVal);
    // Assert
    expect(newEmp.email).toEqual(testEmailVal);
  });

//Testing, that you can get the correct output from the getName() method of an employee instance:
  it('Should get name via getName()', () => {
    // Arrange
    const testNameVal = 'Jaleh';
    const newNameInput = new Employee(testNameVal);
    // Act
    const empName = newNameInput.getName()
    // Assert
    expect(empName).toEqual(testNameVal);
  });

//Testing, that you can get the correct output from the getId() method of an employee instance:
  it('Should get id via getId()', () => {
    // Arrange
    const testIdVal = 27;
    const newIdInput = new Employee('Jaleh', testIdVal);
    // Act
    const empId = newIdInput.getId()
    // Assert
    expect(empId).toEqual(testIdVal);
  });
//Testing, that you can get the correct output from the getEmail() method of an employee instance:
  it('Should get email via getEmail()', () => {
    // Arrange
    const testEmailVal = 'jaleh@gmail.com';
    const newEmailInput = new Employee('Jaleh', 27, testEmailVal);
    // Act
    const empEmail = newEmailInput.getEmail()
    // Assert
    expect(empEmail).toEqual(testEmailVal);
  });
//Testing, that you can get the correct output from the getRole() method of an employee instance:
  it('Should getRole() and return `Employee`', () => {
    const testValue = 'Employee';
    const employee = new Employee();
    expect(employee.getRole()).toEqual(testValue);
  })
});