"use strict";
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456;
let course = "IT";
let is_pblished = true;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let numbers_ = [];
let user = [1, 'Jones'];
let user_ = [1, "Alex", true, 0];
const Small = 1;
const Middle = 2;
const Large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Middel"] = 1] = "Middel";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
var Size_;
(function (Size_) {
    Size_["Small_"] = "s";
    Size_["Middle_"] = "m";
    Size_["Large_"] = "l";
})(Size_ || (Size_ = {}));
let mySize = Size_.Middle_;
console.log(mySize);
//# sourceMappingURL=index.js.map