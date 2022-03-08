const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')


test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Taylor", 666, "taylor25et@gmail.com", "WSU");
    expect(e.getRole()).toBe(testValue);
});