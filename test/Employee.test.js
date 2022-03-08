const Employee = require("../lib/Employee");

test("Can get name with getName()", () => {
  const testValue = "Taylor";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get Id with getId()", () => {
  const testValue = 9000;
  const e = new Employee("Taylor", testValue);
  expect(e.getId()).toBe(testValue);
});
