const jobListingsDiv = document.getElementById('job-listings');
const filterTitleInput = document.querySelector('.filter-input[placeholder="Filter by title, companies, expertise..."]');
const filterLocationInput = document.querySelector('.filter-input[placeholder="Filter by location"]');
const fullTimeCheckbox = document.getElementById('full-time-checkbox');
const TitleInput = document.getElementById('filter-input');
const loadMoreButton = document.querySelector('.footer');




let jobListings = [];
let displayedJobListings = [];
let currentDisplayIndex = 0;

// Fetch data from the JSON file and initialize the job listings
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    if (!Array.isArray(data)) {
      throw new Error('Data is not an array');
    }
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
TitleInput.addEventListener('change', updateDisplayedJobListings);

// Listen for load more button click and render the next set of job listings
loadMoreButton.addEventListener('click', () => {
  currentDisplayIndex += 12;
  displayedJobListings = displayedJobListings.concat(jobListings.slice(currentDisplayIndex, currentDisplayIndex + 12));
  renderJobListings();
});

// Render the currently displayed job listings
function renderJobListings() {
  if (!jobListingsDiv) {
    console.error('Job listings div not found');
    return;
  }

  jobListingsDiv.innerHTML = '';

  displayedJobListings.forEach((job, index) => {
    const jobDiv = document.createElement('div');
    jobDiv.setAttribute('id', `${index + 1}`);
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
      window.open(`./detail.html?id=${index +1}`, '_self');
      populateJobDetails(job);
    });
    jobListingsDiv.appendChild(jobDiv);
  });

  // Show or hide the load more button depending on whether there are more job listings to load
  if (!loadMoreButton) {
    console.error('Load more button not found');
  } else {
    loadMoreButton.style.display = currentDisplayIndex + 12 < jobListings.length ? 'block' : 'none';
  }
}

// Update the displayed job listings based on the current filter settings
function updateDisplayedJobListings() {
  if (!Array.isArray(jobListings) || jobListings.length === 0) {
    console.error('Job listings not found');
    return;
  }

  const titleFilter = filterTitleInput.value.toLowerCase();
  const locationFilter = filterLocationInput.value.toLowerCase();
  const fullTimeFilter = fullTimeCheckbox.checked;
  const titleFilter2 = TitleInput.value.toLowerCase();
  currentDisplayIndex = 0;

  displayedJobListings =jobListings.filter(job => {
    const titleMatch = job.position?.toLowerCase().includes(titleFilter) || job.company?.toLowerCase().includes(titleFilter) || job.expertise?.toLowerCase().includes(titleFilter);
    const locationMatch = job.location?.toLowerCase().includes(locationFilter);
    const fullTimeMatch = !fullTimeFilter || job.contract?.toLowerCase() === 'full time';
    const titleMatch2 = job.position?.toLowerCase().includes(titleFilter2) || job.company?.toLowerCase().includes(titleFilter2) || job.expertise?.toLowerCase().includes(titleFilter2);

    return titleMatch && locationMatch && fullTimeMatch && titleMatch2;
    }).slice(0, 12);
    
    renderJobListings();
    }
    
    
    
    
    
    
