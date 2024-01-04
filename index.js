// importing Packages
const express = require('express');
const dotenv=require('dotenv');
const connectToDB = require('./database/db');


// creating an express app
const app = express();
// configuring dotenv to use the .env file
dotenv.config();

// connecting to database
connectToDB();
// accepting json data
app.use(express.json());
// Defining routes
app.use('/api/user',require('./routes/userRoutes'));
app.use('/api/category',require('./routes/categoryRoutes'));
app.use('/api/product',require('./routes/productRoutes'));
app.use('/api/blog',require('./routes/blogRoutes'));



// Defining port
const PORT = process.env.PORT;
//running the server on port 5000
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

