const filterIcon = document.getElementById("filter-icon");
const filterModal = document.getElementById("filter-modal");
const searchBtns = document.querySelectorAll(".pop-search");
const job_listings = document.querySelectorAll(".job-listing");

// Add event listener to the filter icon to toggle the filter modal
filterIcon.addEventListener("click", function () {
  filterModal.style.display = "block";
});

// Add event listener to the search buttons to filter job listings
searchBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // Get the user input for location filtering
    const locationFilterInput = document.getElementById("modal-input");
    const locationFilter = locationFilterInput ? locationFilterInput.value.toLowerCase() : "";

    // Get the value of the full time only checkbox
    const fullTimeOnlyCheckbox = document.getElementById("pop-check");
    const fullTimeOnly = fullTimeOnlyCheckbox ? fullTimeOnlyCheckbox.checked : false;

    try {
      // Loop over each job listing element
      job_listings.forEach(function (jobListing) {
        // Get the job location and job type from the data attributes
        const jobLocation = jobListing.getAttribute("data-location").toLowerCase();
        const jobType = jobListing.getAttribute("data-type").toLowerCase();

        // Check if the job location matches the user input
        const locationMatch = jobLocation.includes(locationFilter);

        // Check if the job is full time if the user selected that option
        const typeMatch = !fullTimeOnly || (fullTimeOnly && jobType === "full time");

        // If the job listing matches the user's search criteria, display it
        if (locationMatch && typeMatch) {
          jobListing.style.display = "block";
        } else {
          jobListing.style.display = "none";
        }
      });
    } catch (error) {
      console.error(error);
      alert("An error occurred while filtering job listings.");
    }

    // Close the filter modal
    filterModal.style.display = "none";
  });
});
