// // Define the filterJobs function
// function filterJobs(jobListings, userInput, fullTimeChecked) {
//   const filteredJobs = jobListings.filter(function (job) {
//     const jobTitle = job.title.toLowerCase();
//     const jobCompany = job.company.toLowerCase();
//     const jobLocation = job.location.toLowerCase();
//     const jobType = job.type.toLowerCase();

//     // If fullTimeChecked is true, only return jobs with type "Full Time"
//     if (fullTimeChecked && jobType !== "full time") {
//       return false;
//     }

//     // Return jobs that match the user input
//     return (
//       jobTitle.includes(userInput) ||
//       jobCompany.includes(userInput) ||
//       jobLocation.includes(userInput)
//     );
//   });

//   return filteredJobs;
// }

// Add event listener to the filter icon to toggle the filter modal
const filterIcon = document.getElementById("filter-icon");
const filterModal = document.getElementById("filter-modal");
filterIcon.addEventListener("click", function () {
  filterModal.style.display = "block";
});

// // Add event listener to the search button to filter job listings
// const searchBtn = document.getElementById("pop-search");
// searchBtn.addEventListener("click", function () {
//   // Get the user input from the filter modal
//   const userInput = document.getElementById("modal-input").value.toLowerCase();
//   const fullTimeCheckbox = document.getElementById("pop-check");

//   // Call the filterJobs function with the jobs array and user input/full-time checkbox values
//   const filteredJobs = filterJobs(jobListings, userInput, fullTimeCheckbox.checked);

//   // Render the filtered job listings
//   renderJobs(filteredJobs);

//   // Close the filter modal
//   filterModal.style.display = "none";
// });

// Add event listener to the search button to close the filter modal
const closeBtn = document.getElementById("pop-search");
closeBtn.addEventListener("click", function () {
  filterModal.style.display = "none";
});

// // Add event listener to the window object to close the filter modal when the user clicks outside of it
// window.addEventListener("click", function (event) {
//   if (event.target === filterModal) {
//     filterModal.style.display = "none";
//   }
// });
