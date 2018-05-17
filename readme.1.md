## Write server side applications with Express

* [ ] Cover Node basics - turn and talk
* [ ] Describe what Express is, why we use it and how it works
* [ ] Walk through Node project setup to build and Express Server
* [ ] npm install rainbow colors npm package - add to dependencies
* [ ] Handle an HTTP request from a client
* [ ] Send an HTTP response from the server to a client
* [ ] Define routes and handler functions
    * [ ] Use Routes with exact matches
    * [ ] Extract data from requests using path params
    * [ ] Extract data from requests using path query params
    * [ ] Forward errors with next
### Resources
* [Intro to Node slides](https://docs.google.com/presentation/d/1HhAUwBwn0PhzqcYy77OcVyVsnOsNcL5Ffd8a28WO780/edit#slide=id.p)
* [Intro to Express slides](https://docs.google.com/presentation/d/1ycS4_k2h6ph6VHR_PH7eKj7b9k_8H-GjYDtwV-3WdvU/edit#slide=id.g144367c9c8_0_50)
* [Express Hello World from Express Docs](https://expressjs.com/en/starter/hello-world.html)
* [Dan Levy Express guide](https://github.com/justsml/guides/tree/master/express/setup-guide)
* [Intro to Node/Express pt.1 - Video with CJ](https://www.youtube.com/watch?v=C5JAM1eQQlY&feature=youtu.be)
* [Intro to Node/Express pt.2 - Video with CJ](https://www.youtube.com/watch?v=0jxFHnNVbbc&feature=youtu.be)


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
