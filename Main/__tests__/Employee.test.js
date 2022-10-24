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
    const testValue = 'Pollux';
    // Act
    const newEmp = new Employee(testValue);
    // Assert
    expect(newEmp.name).toEqual(testValue);
  });

// Testing that you can correctly set, the id property, of an employee instance:
  it('Should set id via constructor arguments', () => {
    // Arrange
    const testValue = 5;
    // Act
    const newEmp = new Employee('Pollux', testValue);
    // Assert
    expect(newEmp.id).toEqual(testValue);
  });

// Testing that you can correctly set, the email property, of an employee instance:
  it('Should set email via constructor arguments', () => {
    // Arrange
    const testValue = 'jane@gmail.com';
    // Act
    const newEmp = new Employee('Pollux', 5, testValue);
    // Assert
    expect(newEmp.email).toEqual(testValue);
  });

//Testing, that you can get the correct output from the getName() method of an employee instance:
  it('Should get name via getName()', () => {
    // Arrange
    const testValue = 'Pollux';
    const newEmp = new Employee(testValue);
    // Act
    const empName = newEmp.getName()
    // Assert
    expect(empName).toEqual(testValue);
  });

//Testing, that you can get the correct output from the getId() method of an employee instance:
  it('Should get id via getId()', () => {
    // Arrange
    const testValue = 5;
    const newEmp = new Employee('Pollux', testValue);
    // Act
    const empId = newEmp.getId()
    // Assert
    expect(empId).toEqual(testValue);
  });
//Testing, that you can get the correct output from the getEmail() method of an employee instance:
  it('Should get email via getEmail()', () => {
    // Arrange
    const testValue = 'jane@gmail.com';
    const newEmp = new Employee('Pollux', 5, testValue);
    // Act
    const empEmail = newEmp.getEmail()
    // Assert
    expect(empEmail).toEqual(testValue);
  });

});