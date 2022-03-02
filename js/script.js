const mainPage = document.getElementById("homepage-form")
const resultsNavbar = document.getElementById("results-navbar")
const line = document.querySelector("hr")
const resultsMain = document.getElementById("results-main")
const navbarInput = document.querySelector(".navbar-input")


/* If click on normal search google, we are going to scrap our results API 
in a differen address than if we press the lucky buttom */

document.getElementById("submit-search").addEventListener("click", event => {
   const apiAddress = "http://localhost:3000/google/"
})

document.getElementById("lucky-search").addEventListener("click", event => {
   const apiAddress = "http://localhost:3000/google/random/"
})


/* This is the listener for the homepage form. Will scratch the info from the API and
it will show the results page and hide the main form of the homepage*/
document.getElementById("main-form").addEventListener("submit", event => {

   console.log("It's detecting the submit event")
   // to avoid the page refresh after submit
   event.preventDefault()

   const searchValue = event.target["search"].value
   console.log(searchValue)

   /* Fetch the API to get the results */
   try{
      fetch(`${apiAddress}${searchValue}/`)
         .then( (response) => {
            return response.json() })
         .then( (data) => {
            console.log(data)
            fillResults(data);
         })
         .catch( (err) => {
            console.log(err);
         });
   } catch(err) {
      console.log(err)
   }
   /* Now we have to hide the main form and show everything was hide before */
   mainPage.classList.add("hide")
   resultsNavbar.classList.remove("hide")
   line.classList.remove("hide")
   resultsMain.classList.remove("hide")
})


/* When click on the logo at top of the page, reset the "hide" class to show again the main page */
document.getElementById("navbar-logo").addEventListener("click", event => {

   mainPage.classList.remove("hide")
   resultsNavbar.classList.add("hide")
   line.classList.add("hide")
   resultsMain.classList.add("hide")

})


/* This is a listener for the form at the navbar so we could search again from the same results view
with no need to come back to the homepage */
document.getElementById("secondary-form").addEventListener( "submit", event => {

   console.log("It's detecting the submit event");
   // to avoid the page refresh after submit
   event.preventDefault();

   const searchValue = event.target["navbar-search"].value;
   console.log(searchValue);

   /* Fetch the API to get the results */
   try{
      fetch(`${apiAddress}${searchValue}/`)
         .then( (response) => {
            return response.json() })
         .then( (data) => {
            console.log(data)
            fillResults(data);
         })
         .catch( (err) => {
            console.log(err);
         });
   } catch(err) {
      console.log(err)
   }
})

/* A litle bit of special effects on the search bar */
navbarInput.addEventListener("mouseover", event => {
   navbarInput.classList.add("shadow")
})

navbarInput.addEventListener("mouseout", event => {
   navbarInput.classList.remove("shadow")
})


const fillResults = data => {
/* Function to place the results fetched from the API into our html results view */

   for (let result of data){
   /* INSIDE #toBeFilled */
   // Create a <li>
      // Create 1 child <h4>
         // Create an anchor tag inside the <h4>
         // Fill it up with the "title"
      // Create another child <p>
      //Fill it up with the "information" or "header" of the result
      const ul = document.getElementById("toBeFilled");
      const li = document.createElement("li");
      const h4 = document.createElement("h4");
      const a = document.createElement("a");
      const p = document.createElement("p")
      const title = document.createTextNode(`${result.title}`);
      const description = document.createTextNode(`${result.description}`)
      p.appendChild(description)
      a.appendChild(title);
      a.href = `${result.url}`
      h4.appendChild(a);
      li.appendChild(h4);
      li.appendChild(p);
      ul. appendChild(li);
   }
}

