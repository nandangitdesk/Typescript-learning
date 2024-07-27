var myObject = {
    name: "nandan",
    email: "n@p.com",
    isActive: true,
};
function newObject(_a) {
    var name = _a.name, isChecked = _a.isChecked;
    console.log(name, isChecked);
}
var obj = { name: "nandan", isChecked: false };
newObject(obj);
function createCourse() {
    return { name: "Reactjs", price: 500 };
}
function createUser(user) {
    return { name: "nandan", email: "n@n.com", isActive: true };
}
createUser({ name: "nandan", email: "n@n.com", isActive: true });
function printEmployee(emp) {
    console.log(emp.name + " lives in " + emp.address.city);
}
var emp1 = {
    id: 1,
    name: "John Doe",
    address: {
        street: "123 Main St",
        city: "Mumbai",
        country: "India"
    }
};
printEmployee(emp1); // Output: John Doe lives in Mumbai
var newUser = {
    _id: 1234,
    name: "nandan",
    email: "n@np.com",
    isActive: true
};
//cardNumber & cardDate is good practice 
