const companyDiv = document.createElement('div');
companyDiv.classList.add('company');

const logoBackground = document.createElement('div');
logoBackground.classList.add('logo-background');
logoBackground.style.backgroundColor = job.companyBackground;
logoBackground.style.width = '50px';
logoBackground.style.height = '50px';

const logo = document.createElement('img');
logo.src = job.logo;
logo.alt = job.company;
logo.style.width = '100%';
logo.style.height = '100%';

const companyName = document.createElement('h2');
companyName.textContent = job.company;

const companySite = document.createElement('a');
companySite.href = job.companyUrl;
companySite.textContent = job.companyUrl;
companySite.target = '_blank';

const companyButton = document.createElement('button');
companyButton.textContent = 'Company Site';

companyDiv.appendChild(logoBackground);
companyDiv.appendChild(logo);
companyDiv.appendChild(companyName);
companyDiv.appendChild(companySite);
companyDiv.appendChild(companyButton);
