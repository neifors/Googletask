# Google search API task

## Project description: 

- This is an imitation of a google search page. You can type a key word into the search bar (based on animals, try fluffy or pet for example) and it will look through our database and return results on a page for you. If you would like you can try the get lucky button which will take you straight to an external page based on your search. However, this is random and we cannot guarantee what you'll find. If your searchword isn't in our database, you will get an error.

- For this project we used express.js mostly for the server side and bootstrap and VanillaJS for the client side.

- Some of the challenges we had was trying to use a single form to submit the searchword for both the results page and the get lucky button but we fixed that relatively quickly. Also, a few server side issues to get random results using .filter and .some but also found solutions for those.

- Perhaps in the future we can add different logos depending on the day of the week / time of year / other parameters like google does sometimes.

## Table of contents:

- Client folder - HTML for user interface, scripts for event listeners, styling for user interface.
- Server folder - JS files for the server, controllers, model and database. Package files to see what we have run also.

## How to install and run:

- Clone the repo to your own device
- run npm install
- run npm install express
- run npm start from the server side to get the server running on localhost
- load HTML file and use

Credits:

Tom Grainger and Isabel Repetto

License:

Do what you want with it, can't go public because it looks like google and theirs is probably a bit better.

Requirements: 

express.js
