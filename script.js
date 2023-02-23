const jobListingsDiv = document.getElementById('job-listings');
const filterTitleInput = document.querySelector('.filter-input[placeholder="Filter by title, companies, expertise..."]');
const filterLocationInput = document.querySelector('.filter-input[placeholder="Filter by location"]');
const fullTimeCheckbox = document.getElementById('full-time-checkbox');
const loadMoreButton = document.querySelector('.footer');

let jobListings = [];
let displayedJobListings = [];
let currentDisplayIndex = 0;

// Fetch data from the JSON file and initialize the job listings
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    jobListings = data;
    displayedJobListings = jobListings.slice(0, 12);
    renderJobListings();
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Listen for filter changes and update the displayed job listings
filterTitleInput.addEventListener('input', updateDisplayedJobListings);
filterLocationInput.addEventListener('input', updateDisplayedJobListings);
fullTimeCheckbox.addEventListener('change', updateDisplayedJobListings);

// Listen for load more button click and render the next set of job listings
loadMoreButton.addEventListener('click', () => {
  currentDisplayIndex += 12;
  displayedJobListings = displayedJobListings.concat(jobListings.slice(currentDisplayIndex, currentDisplayIndex + 12));
  renderJobListings();
});

// Render the currently displayed job listings
function renderJobListings() {
  jobListingsDiv.innerHTML = '';

  displayedJobListings.forEach((job, index) => {
    const jobDiv = document.createElement('div');
    jobDiv.setAttribute('id', `job-${index + 1}`);
    jobDiv.innerHTML = `
      <div class="logo-background" style="background-color: ${job.logoBackground}">
        <a href="${job.apply}">
          <div class="logo-container">
            <img src="${job.logo}" alt="${job.company} logo">
          </div>
        </a>
      </div>
      <div class="job-info">
        <p>${job.postedAt}  . ${job.contract}</p>
        <h2>${job.position}</h2>
        <p>${job.company}</p>
        <h3>${job.location}</h3>
      </div>
    `;
    jobDiv.addEventListener('click', () => {
      console.log(`Job ${index + 1} was clicked`);
      window.open('./detail.html', '_blank');
      populateJobDetails(job);
    });
    jobListingsDiv.appendChild(jobDiv);
  });

  // Show or hide the load more button depending on whether there are more job listings to load
  loadMoreButton.style.display = currentDisplayIndex + 12 < jobListings.length ? 'block' : 'none';
}

// Update the displayed job listings based on the current filter settings
function updateDisplayedJobListings() {
  const titleFilter = filterTitleInput.value.toLowerCase();
  const locationFilter = filterLocationInput.value.toLowerCase();
  const fullTimeFilter = fullTimeCheckbox.checked;
  currentDisplayIndex = 0;

  displayedJobListings = jobListings.filter(job => {
    const titleMatch = job.position.toLowerCase().includes(titleFilter) || job.company.toLowerCase().includes(titleFilter) || job.expertise.toLowerCase().includes(titleFilter);
    const locationMatch = job.location.toLowerCase().includes(locationFilter);
    const fullTimeMatch = !fullTimeFilter || job.contract.toLowerCase() === 'full time';
    return titleMatch && locationMatch && fullTimeMatch;
  }).slice(0, 12);

  renderJobListings();
}

  


  

  

  // toggling light and dark theme
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const html = document.querySelector('html');

function toggleTheme() {
  if (toggleSwitch.checked) {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', toggleTheme);



  


