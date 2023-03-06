const filterIcon = document.getElementById("filter-icon");
const filterModal = document.getElementById("filter-modal");
const searchBtn = document.getElementById("pop-search");

filterIcon.onclick = function () {
  filterModal.style.display = "block";
};



searchBtn.onclick = function () {
  // Add code to apply filter here
  filterModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == filterModal) {
    filterModal.style.display = "none";
  }
};
