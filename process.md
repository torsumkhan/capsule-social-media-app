# Capsule - The digital album - Project for Lighthouse Labs final project

## Step 1

Create a folder structure for client and server
Install dependencies in Index.js
Get the Express app middlewares

## Step 2

Connect to Mongo DB with Atlas and Mongoose

## Step 3

Create routes
create a posts routes which will have all the post routes. Create a router using express.router. First paramater is the path and the second is a callback function(req, res) which will be executed once the users go to that path.
Import tit in the index.js and use express middleware to connect it with the router. Add 'posts' to the path

## Step 4

Create folder structure for the backend
Create a folder in server called controllers which will have handlers for the routes to create a cleaner structure

## Step 5

Create models:
Inside the server folders, create a new folder called models
Create a mongoose schema
Then, create a model
export the model which will be later used to update, find, delete etc

## Step 6

Create more routes
All callback functions with have the try and catch blocks
to get all posts, use find.all
to create a post, use the req.body to get the data

## Step 7

Create folder structure for JSX

Step

 <!-- let edits;
  if (user._id === capsule.creator) {
    edits = <EditIcon />
  } -->
