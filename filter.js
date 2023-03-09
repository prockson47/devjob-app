
// Add event listener to the filter icon to toggle the filter modal
const filterIcon = document.getElementById("filter-icon");
const filterModal = document.getElementById("filter-modal");
filterIcon.addEventListener("click", function () {
  filterModal.style.display = "block";
});


// Add event listener to the search button to close the filter modal
const closeBtn = document.getElementById("pop-search");
closeBtn.addEventListener("click", function () {
  filterModal.style.display = "none";
});

