let inputText = undefined;
let searchText = undefined;
let result = "NO";

document.onload = () => {
  Array.prototype.includes = function (searchElement) {
    return this.indexOf(searchElement) > -1;
  };
};

changeInputText = () => {
  inputText = document.getElementById("input-text").value;
};

search = () => {
  searchText = document.getElementById("search-text").value;

  try {
    if (inputText.includes(searchText)) result = "YES!";
    else result = "NO";
    document.getElementById("result-heading").innerHTML = result;
  } catch (e) {
    document.getElementById("result-heading").innerHTML = "Error - " + e;
  }
};
