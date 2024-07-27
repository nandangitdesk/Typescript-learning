var addTwo = function (num) {
    return num + 2;
};
var sayHello = function (val) {
    return val;
};
var isChecked = function (val) { };
var signupUser = function (name, email, isChecked) { };
var loginUser = function (name, email, isChecked) {
    if (isChecked === void 0) { isChecked = false; }
};

addTwo(2);
sayHello("hello everyone");
isChecked(false);
signupUser("nandan", "n@p.com", false);
loginUser("nandanp", "nandan@.com");
