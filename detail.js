const pageID = document.URL.substring(document.URL.lastIndexOf('=') + 1);

let jobListings = [];

// Fetch data from the JSON file and initialize the job listings
const dataFetch = fetch('data.json')
  .then(response => response.json())
  .then(data => {
    if (!Array.isArray(data)) {
      throw new Error('Data is not an array');
    }
    jobListings = data;
    return data;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

const jobDetail = dataFetch.then(data => {
  const favJob = data.filter(jobData => {
    return jobData.id === parseInt(pageID);
  });
  return favJob;
});

jobDetail.then(job => {
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

  // Populate the elements with the job details
  companyLogo.src = `./assets/logos/${job[0].company}.svg`;
  companyLogo.alt = `${job[0].company} logo`;
  company.innerHTML = job[0].company;
  position.innerHTML = job[0].position;
  postedAt.innerHTML = job[0].postedAt;
  contract.innerHTML = job[0].contract;
  location.innerHTML = job[0].location;
  description.innerHTML = job[0].description;
  website.innerHTML = `<a href="${job[0].website}" target="_blank">${job[0].website}</a>`;  
  const requirementsList = job[0].requirements.items.map(item => `<li>${item}</li>`).join('');
  requirements.innerHTML = `
    <h3>Requirements</h3>
    <p>${job[0].requirements.content}</p>
    <ul>${requirementsList}</ul>
  `;
  
  const roleList = job[0].role.items.map(item => `<li>${item}</li>`).join('');
  role.innerHTML = `
    <h3>About the role</h3>
    <p>${job[0].role.content}</p>
    <ol>${roleList}</ol>
  `;
  
  // Set the background color of logoBackground
  logoBackground.style.backgroundColor = job[0].logoBackground;

  // Populate footer position
  footerPosition.innerHTML = job[0].position;
})
.catch(error => {
  console.error('Error fetching job detail:', error);
});