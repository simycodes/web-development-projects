// initialize display elements
const visitsDisplay = document.querySelector(".number-of-visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
console.log(numVisits)


// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	document.querySelector(".how-many-days-ago").textContent = 0;
	localStorage.setItem("last-date-visit", Date.now());
	visitsDisplay.textContent = `This is your first visit!`;
}


// increment the number of visits.
numVisits++;

// store the new number of visits value
//the setItem function can also update this clients number of clients as shown below
localStorage.setItem("visits-ls", numVisits);


// Using localStorage to display how many days it has been since the user's last visit to your site. 

// get the last visit date value stored in localStorage
let lastVisitDate = window.localStorage.getItem("last-date-visit");
console.log(lastVisitDate);
console.log("Last visit was on:" + new Date(parseInt(lastVisitDate)));


// get todays date - leave the variable todayy with double yy's its not an error,changing it it will cause errors
let todayy = Date.now();

//Using JS calculate how many milliseconds are in a day. 
const msInDay = 1000 * 60 * 60 * 24;

// Creating a variable for today and another variable for the last visit and then subtract and divide by the number of milliseconds. 
// Then use Math.round() to make it a whole number.
let difference = Math.round((todayy - lastVisitDate)/msInDay);
console.log("Last visit difference in days is:" + parseInt(difference));

//Displaying a message about how many days it's been or if this is the first visit.
if (numVisits !== 0) {
	//Displaying a message about how many days it's been
	document.querySelector(".how-many-days-ago").textContent = 0;
} else {
	document.querySelector(".how-many-days-ago").textContent = difference;
}

// update the lastVisitDate
localStorage.setItem("last-date-visit",Date.now());
lastVisitDate = window.localStorage.getItem("last-date-visit");
console.log(lastVisitDate);
console.log("Last visit was on:" + new Date(parseInt(lastVisitDate)));

