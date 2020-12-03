# Walmart Issue Browser

Issue Browser gets issues from the github API in the form: `https://api.github.com/repos/${org}/${repo}/issues`

## Prerequisite

- [Node.js](https://nodejs.org/en/download/)

## Live Site

Live App @ https://issue-browser-app.herokuapp.com/

## To run on local machine

1. From the root of the repo, run `npm start`. This will run `npm install` to install necessary dependencies and `node index.js` to start the local server.
2. If `npm install` has been run before, simply run `node index.js` to start the server.
3. After starting the server, https://localhost:3000 will link to the application. Pages can be viewed at route `/page/{page_number}`. Issues can be viewed at rout `/issue/{num}`.

## Tech Stack

1.  `nodejs` and `express` for backend services.
2.  `ejs` for html templating.
3.  `Materialize` for frontend styling.
