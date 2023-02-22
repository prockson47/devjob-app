// Fetch data from the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Get the job listings container element
    const jobListingsDiv = document.getElementById('job-listings');

    // Get the first 15 job listings from the data
    const jobListings = data.slice(0, 12);

    // Loop through each job listing and create a new div for it
    for (let i = 0; i < jobListings.length; i++) {
      const job = jobListings[i];

      // Create a new job div and set its ID
      const jobDiv = document.createElement('div');
      jobDiv.setAttribute('id', `job-${i + 1}`);

      // Set the HTML content of the job div with the job information
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

      // Add a click event listener to the job div
      jobDiv.addEventListener('click', () => {
        console.log(`Job ${i + 1} was clicked`);
        window.open('./detail.html', '_blank');
        populateJobDetails(job);
      });

      // Append the job div to the job listings container
      jobListingsDiv.appendChild(jobDiv);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  


  

  

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



  


