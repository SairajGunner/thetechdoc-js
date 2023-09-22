import "./new-class";
import { NewClass } from "./new-class";

console.log("global scope - ", this);

window.onload = function () {
  console.log("inside window.onload - ", this);
  notMagic();
  notMagicArrow();

  String.prototype.log = function () {
    console.log(this);
  };

  //   String.prototype.log = () => {
  //     console.log(this);
  //   };

  stringLogImplementation();

  let newClass = NewClass("name");
  newClass.printName();
  newClass.printNameArrow();
};

notMagic = function () {
  console.log("inside notMagic - ", this);
};

stringLogImplementation = function () {
  "string".log();
};
