
// Add event listener to the filter icon to toggle the filter modal
const filterIcon = document.getElementById("filter-icon");
const filterModal = document.getElementById("filter-modal");
filterIcon.addEventListener("click", function () {
  filterModal.style.display = "block";
});