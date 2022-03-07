const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});
test("Can get name via getName()", () => {
  const testValue = "Amanda";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});
