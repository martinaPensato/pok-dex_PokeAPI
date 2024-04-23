const inputElement = document.querySelector("#search-input");
const search_icon = document.querySelector("#search-close-icon");
const sort_wrapper = document.querySelector(".sort-wrapper");

inputElement.addEventListener("input", () => {
  handleInputChange(inputElement);
});
//click on the search close icon
search_icon.addEventListener("click", handleSearchCloseOnClick);
//click on the sort wrapper
sort_wrapper.addEventListener("click", handleSortIconOnClick);

function handleInputChange(inputElement) {
  const inputValue = inputElement.value;
  //if input has a value other than empty show search close icon
  if (inputValue !== "") {
    document
      .querySelector("#search-close-icon")
      .classList.add("search-close-icon-visible");
  } else {
    //if not, remove the search close icon
    document
      .querySelector("#search-close-icon")
      .classList.remove("search-close-icon-visible");
  }
}

//click search close icon
function handleSearchCloseOnClick() {
  //cancel input
  document.querySelector("#search-input").value = "";
  document
    .querySelector("#search-close-icon")
    .classList.remove("search-close-icon-visible");
}

//click on sort icon
function handleSortIconOnClick() {
  //change visibility of filter wrapper
  document
    .querySelector(".filter-wrapper")
    .classList.toggle("filter-wrapper-open");
  document.querySelector("body").classList.toggle("filter-wrapper-overlay");
}
