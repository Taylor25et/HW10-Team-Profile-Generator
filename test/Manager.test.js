const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')


test("Can get office number with getOffice()", () => {
    const testValue = 666;
    const e = new Manager("Taylor", 1000, "taylor25et@gmail.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });