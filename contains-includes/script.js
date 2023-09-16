window.onload = function () {
  String.prototype.includes = function (searchElement) {
    return this.indexOf(searchElement) > -1;
  };
};
