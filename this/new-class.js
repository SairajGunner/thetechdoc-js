export class NewClass {
  name = undefined;

  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }

  printNameArrow = () => {
    console.log(this.name);
  };
}
