# Walmart issue browser

## To Run

```
node index.js
```

If `node` is not installed in your current machine. Go to https://nodejs.org/en/ to install globally. <br><br> After starting the server go to `localhost:3000`.
This will take you to the home page where the first 10 entry will be shown. Each page contains at most 10 entries using pagination.

```
/:page_number
```

Each entry is also a link to the detail of a github issue.

```
/issue/:id
```

Live App @ https://issue-browser-app.herokuapp.com/
