# Graphql server side application

This app demonstrates a minimal server side implementation of express server and graphql

##Steps to deploy

- `heroku login`
- git add and commit
- `heroku create`
- `git push heroku master`
- `heroku ps:scale web=1`
- `heroku open`
- Note: A `procfile` is required if start script is not index.js
  - PORT nuber shouldnot be fixed , it should take its value from environment

### To test heroku app locally

- `heroku local`
-

https://devcenter.heroku.com/articles/getting-started-with-nodejs#prepare-the-app
