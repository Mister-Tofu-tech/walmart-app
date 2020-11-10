# Walmart issue browser

## To Run
```
nodemon index.js
```
If `nodemon` not installed in your current machine. Run `npm install -g nodemon` to install globally or `npm install --save-dev nodemon` to install in your project repository. <br><br> After starting the server go to `localhost:5000`.
This will take you to the home page where the first 10 entry will be shown. Each page contains at most 10 entries using pagination.
```
/:page_number
```
Each entry is also a link to the detail of a github issue.
```
/issue/:id
```