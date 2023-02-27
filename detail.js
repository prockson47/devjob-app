// Extract the last parameter from the URL
const pageID = document.URL.substring(document.URL.lastIndexOf('=') + 1);

// Initialize an empty array to hold job listings
let jobListings = [];

// Fetch data from the JSON file and initialize the job listings
const fetchData = async () => {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    // Throw an error if the data is not an array
    if (!Array.isArray(data)) {
      throw new Error('Data is not an array');
    }
    // Update the jobListings array with the fetched data
    jobListings = data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Find the job object that matches the pageID
const findJobByID = async (pageID) => {
  try {
    const job = await jobListings.find(jobData => jobData.id === parseInt(pageID));
    return job;
  } catch (error) {
    console.error('Error finding job by ID:', error);
  }
};

// Display job details on the webpage
const displayJobDetails = (job) => {
  // Get references to HTML elements
  const companyLogo = document.getElementById('company-logo');
  const company = document.getElementById('company');
  const position = document.getElementById('position');
  const postedAt = document.getElementById('posted-at');
  const contract = document.getElementById('contract');
  const location = document.getElementById('location');
  const description = document.getElementById('description');
  const requirements = document.getElementById('requirements');
  const role = document.getElementById('role');
  const logoBackground = document.getElementById('logoBackground');
  const website = document.getElementById('website');
  const footerPosition = document.getElementById('footer-position');

  // Populate the HTML elements with job details
  companyLogo.src = `./assets/logos/${job.company}.svg`;
  companyLogo.alt = `${job.company} logo`;
  company.textContent = job.company;
  position.textContent = job.position;
  postedAt.textContent = job.postedAt;
  contract.textContent = job.contract;
  location.textContent = job.location;
  description.innerHTML = job.description;
  website.innerHTML = `<a href="${job.website}" target="_blank">${job.website}</a>`;
  
  // Populate the requirements section with an unordered list
  const requirementsList = job.requirements.items.map(item => `<li>${item}</li>`).join('');
  requirements.innerHTML = `
    <h3>Requirements</h3>
    <p>${job.requirements.content}</p>
    <ul>${requirementsList}</ul>
  `;
  
  // Populate the role section with an ordered list
  const roleList = job.role.items.map(item => `<li>${item}</li>`).join('');
  role.innerHTML = `
    <h3>About the role</h3>
    <p>${job.role.content}</p>
    <ol>${roleList}</ol>
  `;
  
  // Set the background color of the logoBackground element
  logoBackground.style.backgroundColor = job.logoBackground;

  // Set the footer position to the job position
  footerPosition.textContent = job.position;
};

// Fetch the job data, find the matching job, and display the details
fetchData().then(() => {
  findJobByID(pageID).then(job => {
    displayJobDetails(job);
  });
});
