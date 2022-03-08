const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')


test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Maddie", 1000, "maddie@gmail.com", "maddie45tr");
    expect(e.getRole()).toBe(testValue);
});

