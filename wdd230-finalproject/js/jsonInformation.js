//const requestURL = 'https://simycodes.github.io/wdd230/chamber/json/companies.json';
const requestURL = 'https://simycodes.github.io/wdd230/chamber/json/temples.json';
const cards = document.querySelector('.cards');


fetch(requestURL).then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
});

function displayTemples(temple) {
  // Create the main element to add to the document
  let card = document.createElement('section');

  //creation of temple image, address , telephone, email, services, ordinanceSchedule, sessionScheduleHeading
  //and templeClosureSchedule elements and filling them with received json data 
  let templeName = document.createElement('h2')

  let templeImage = document.createElement('img');
  let ImageFigureElement = document.createElement('figure');
  //creating the image url element and giving it special attributes
  templeImage.setAttribute('src', temple.image);
  templeImage.setAttribute("alt",`Image of the ${temple.name}`);
  templeImage.setAttribute('loading', 'lazy');
  ImageFigureElement.appendChild(templeImage);

  let description = document.createElement('p');
  let address = document.createElement('p');
  let telephone = document.createElement('p');
  let email = document.createElement('p');
  let services = document.createElement('p');
  let ordinanceSchedule = document.createElement('p');
  let sessionSchedule = document.createElement('p');
  let templeClosureSchedule = document.createElement('p');

  templeName.textContent = `${temple.name}`;

  description.textContent = `${temple.description}`;
  description.setAttribute('class', 'temple-description');

  address.textContent = `${temple.address}`;
  telephone.textContent = `${temple.telephone}`;
  email.textContent = `${temple.email}`;
  services.textContent = `${temple.services}`;
  ordinanceSchedule.textContent = `${temple.ordinanceSchedule}`;
  sessionSchedule.textContent = `${temple.sessionSchedule}`;
  templeClosureSchedule.textContent = `${temple.templeClosureSchedule}`;

  //creating heading elements for the json temples details and filling them with actual heading text
  let addressHeading = document.createElement('h3');
  let telephoneHeading = document.createElement('h3');
  let emailHeading = document.createElement('h3');
  let servicesHeading = document.createElement('h3');
  let ordinanceScheduleHeading = document.createElement('h3');
  let sessionScheduleHeading = document.createElement('h3');
  let templeClosureScheduleHeading = document.createElement('h3');

  addressHeading.textContent = "Address";
  telephoneHeading.textContent = "Telephone";
  emailHeading.textContent = "Email";
  servicesHeading.textContent = "Temple Services";
  ordinanceScheduleHeading.textContent = "Ordinance Schedule";
  sessionScheduleHeading.textContent = "Session Schedule";
  templeClosureScheduleHeading.textContent = "Temple Closure Schedule";

   // Add/append the section(card) with all company elements
  card.appendChild(templeName);
  card.appendChild(ImageFigureElement); //ImageFigureElement contains an image inside it,that is displayed
  card.appendChild(description);

  card.appendChild(addressHeading);
  card.appendChild(address);

  card.appendChild(telephoneHeading);
  card.appendChild(telephone);

  card.appendChild(emailHeading);
  card.appendChild(email);

  card.appendChild(servicesHeading);
  card.appendChild(services);

  card.appendChild(ordinanceScheduleHeading);
  card.appendChild(ordinanceSchedule);

  card.appendChild(sessionScheduleHeading);
  card.appendChild(sessionSchedule);

  card.appendChild(templeClosureScheduleHeading);
  card.appendChild(templeClosureSchedule);

  // Add/append the the card element(section) to the div element having the class named cards
  document.querySelector('div.cards').appendChild(card);

}





