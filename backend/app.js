// We require express because like angular you first need to import the file from
// somewhere else before gaining access to its abilities
const express = require('express');
const bodyParser = require("body-parser");

const app = express();

// app.use((req, res, next) => {
//   console.log('First Middleware');
//   // Next is like running a function that runs after this function runs, except this will run the next middleware after it
//   next();
// });

// use body parser before headers
// They are used to extract posts data
app.use(bodyParser.json());

// Side Note: Code used below is another use for bodyParser, where it parses url encoded data.
// app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POSTS, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully!'
  });
});

app.get('/api/posts', (req, res, next) => {
  // res.send('Hello from express!');
  const posts = [
    {
      id: 'dsbvuvb3252',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: 'bfr67842',
      title: 'Second server-side post',
      content: 'This is coming from the server!'
    },
  ];

  res.status(200).json({
    message: 'Posts fetched succesfully!',
    posts: posts
  });
});

// This will export all the express middleware attached to the const 'app'
module.exports = app;
