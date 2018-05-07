## Write server side applications with Express

* [ ] Install express in a node project with npm
* [ ] Describe what Express is, why we use it and how it works
* [ ] Handle an HTTP request from a client
* [ ] Send an HTTP response from the server to a client
* [ ] Define routes and handler functions
    * [ ] Use Routes with exact matches
    * [ ] Extract data from requests using path params
    * [ ] Extract data from requests using path query params
    * [ ] Forward errors with next

* node allows you to write js on the server side
* setup node project
* npm init -y: creates package.json - every node project needs(description of the project)
 - node_modules(files that dependencies use)

* create index.js
* install dependencies
* require in dependencies
* check docs on dependency usage
* start script - node index.js
* gitignore: node_modules
* npm i gitignore (gitignore node)

* express is a lib/framework built for node.js to build server side apps that listen for client requests

* express deck
* npm i express -S/--save
* require in express
* use express as app
* listen on port - server side apps
* routing: based on a the request, run a specific function
* build route
* restart server/nodemon
* npm i -save-dev nodemon ()
* dev script: nodemon index.js
* HHTP requests: verbs to describe the request
* express - create handlers for verbs
* middleware:
