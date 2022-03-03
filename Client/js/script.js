const mainPage = document.getElementById("homepage-form")
const resultsNavbar = document.getElementById("results-navbar")
const line = document.querySelector("hr")
const resultsMain = document.getElementById("results-main")
const navbarInput = document.querySelector(".navbar-input")
let apiAddress;


/* If click on normal search google, we are going to scrap our results API 
in a differen address than if we press the lucky buttom */

document.getElementById("submit-search").addEventListener("click", event => {
   apiAddress = "http://localhost:3000/google/"
})

document.getElementById("lucky-search").addEventListener("click", event => {
   apiAddress = "http://localhost:3000/google/random/"
})


/* This is the listener for the homepage form. Will scratch the info from the API and
it will show the results page and hide the main form of the homepage*/
document.getElementById("main-form").addEventListener("submit", event => {

   console.log("It's detecting the submit event")
   // to avoid the page refresh after submit
   event.preventDefault()

   const searchValue = event.target["search"].value

   const arr = apiAddress.split("/")
   if (arr[arr.length - 2] === "random") {

      try{
         fetch(`${apiAddress}${searchValue}/`)
            .then( (response) => {
               return response.json() })
            .then( (data) => {
               document.getElementById("toBeFilled").innerHTML = ""
               window.open(`${data.url}`)
            })
            .catch( (err) => {
               document.getElementById("toBeFilled").innerHTML = ""
               displayError("Sorry your search has no results")
            });
      } catch(err) {
         console.log(err)
      }

   } else {

      /* Fetch the API to get the results */
      try{
         fetch(`${apiAddress}${searchValue}/`)
            .then( (response) => {
               return response.json() })
            .then( (data) => {
               document.getElementById("toBeFilled").innerHTML = ""
               fillResults(data);
            })
            .catch( (err) => {
               document.getElementById("toBeFilled").innerHTML = ""
               displayError("Sorry your search has no results")
            });
      } catch(err) {
         console.log(err)
      }
   
   /* Now we have to hide the main form and show everything was hide before */
   mainPage.classList.add("hide")
   resultsNavbar.classList.remove("hide")
   line.classList.remove("hide")
   resultsMain.classList.remove("hide")
   }
})


/* When click on the logo at top of the page, reset the "hide" class to show again the main page */
document.getElementById("navbar-logo").addEventListener("click", event => {

   window.location.reload()
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
            document.getElementById("toBeFilled").innerHTML = ""
            fillResults(data);
         })
         .catch( (err) => {
            document.getElementById("toBeFilled").innerHTML = ""
            displayError("Sorry your search has no results")
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
const displayError = message => {
   const ul = document.getElementById("toBeFilled");
   const li = document.createElement("li");
   const h2 = document.createElement("h2")
   const error = document.createTextNode(`${message}`);
   h2.appendChild(error)
   li.appendChild(h2);
   ul.appendChild(li);
}


