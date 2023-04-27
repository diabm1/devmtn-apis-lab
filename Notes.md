APIs

For Part 1 and Part 2 of this lab, keep track of your answers in a regular document (Word, Google Doc, Pages).
Part 1: SWAPI
Instructions

For each of the following use the SWAPI docs, to figure out the complete URL(s) (including params or queries) that you need to go to in order to reach the following data:

✅ the height of Darth Vader: https://swapi.dev/api/people/4

✅ the population of the planet Alderaan: https://swapi.dev/api/planets/2

✅ the name of the manufacturer of the Millennium Falcon: https://swapi.dev/api/starships/10/

✅ the name of the species that C-3PO belongs to (multiple URLs): https://swapi.dev/api/species/2/

✅ the title of each film that Obi-Wan Kenobi is in (multiple URLs): https://swapi.dev/api/people/10/

✅ use the search query (the how to on the search query is at the bottom of the Getting Started section of the documentation) to get the information about the Millennium Falcon, it’s a starship: https://swapi.dev/api/starships/10/

Part 2: Social Mountain
Summary

In this section, you’ll be looking through the documentation for the Social Mountain API and answering questions. You’ll also be making requests and recording the URLs and some information about the responses. Run the requests in Postman. Note: this API is live and viewable by your classmates and staff. Keep things appropriate for class.

You can view the documentation for the Social Mountain API here

The base URL of your requests is: https://practiceapi.devmountain.com/api (make sure to have the “s” in “https”)

✅ Check if the POST request accept params, queries, and/or a body. Which one(s) and what information is it expecting to be sent? - Yes it accepts a body that includes a title (a string representing the title of the post) and the body (a string representing the content of the post)

✅ What data type does the GET request return? an array of all posts which are stored in as objects

✅ What would the URL look like for deleting the post with the id 555? (This post does not exist anymore, but the syntax is the same for existing posts, ): https://practiceapi.devmountain.com/api/posts?id=555

✅ List the possible response codes from the GET request at ‘/posts/filter’: 200, 409

✅ Create a post whose text is your name, record the URL and body here:
https://practiceapi.devmountain.com/api/posts
{
"id": 1679,
"text": "The text used here will appear in the new post object",
"date": "26 Apr 2023"
}

✅ What would the URL and body object be to update the post you just made to contain your faovrite color instead of your name?
https://practiceapi.devmountain.com/api/posts?id=1679
{
"id": 1679,
"text": "Updated",
"date": "26 Apr 2023"
},

✅ What is the URL to get posts that contain the text “blue”? https://practiceapi.devmountain.com/api/posts/filter?text=blue

✅ Make a request to GET all the posts. What are the content type and charset of the response? (Hint: look on the Headers) - content-type: application/json; charset=utf-8

✅ What would cause a PUT request to return a 409 status? - If 409 is missing req.query.id or req.body.text

✅ What happens if you try to send a query in the GET request URL? Why do you get that response? The server just ignores it and sends back a 200 OK response. Why do I get that response? Maybe because the server wasn't designed to handle queries.

Part 3: Front End (Advanced)

In this section, you’ll be making a front end that uses data from SWAPI. The goal is to be able to click a button and get all of the residents of the planet Alderaan listed out on the page.
Setup

✅ Create a folder called “swapi” and three files inside - index.html, styles.css, and main.js

✅ Open the folder up in VS Code

✅ Run npm init -y which will create a package.json file

✅ Install axios using npm

index.html

✅ Create a basic HTML layout (doctype, html, head, body)

✅ Connect the CSS file (using a link) and the JS file (script tag)

✅ Add another script tag, above the main.js script, to import axios (since axios is in our node modules folder, the src of the script can just use the file path to get to axios, which is “./node_modules/axios/dist/axios.min.js”)

✅ In the body tag create a button that says “get residents” on it

main.js

✅ Select the button using querySelector and save it to a variable

✅ Write a function that just console logs a string like ‘button clicked’

✅ Use addEventListener to attach the function you just wrote to a click event on the button

✅ Open index.html in the browser (right click and copy path)

✅ Click the button and check the console, if it’s working, move on to the next section

making a request

✅ As you complete this section, be sure to test along the way using Postman and console.logs

✅ Now you’ll modify the function to make an axios call to SWAPI

✅ Make an axios request that gets the information about the planet Alderaan (use the search query to request it, the how to on the search query is at the bottom of the Getting Started section of the documentation)

✅ Inside the callback passed to the .then, loop over the residents array returned on the results. It’s full of URLs.

✅ In the loop, make another get request for each URL in the array.

✅ You’ll have another .then that has its own callback, inside which you should create an h2 element whose content is the name of the resident that you just requested. Append the h2 to your HTML document.

styles.css

add any styles you’d like to your page

Submit

✅ Create a repo on GitHub and upload your text document (and swapi folder) to it
