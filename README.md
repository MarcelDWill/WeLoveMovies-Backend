WeLoveMovies

The WeLoveMovies project is a backend application designed to support a movie enthusiast platform. Users can access data about movies, theaters, and reviews, making it a central repository for movie-related information. As the backend developer for this startup, your primary focus is to set up the database and implement routes that allow smooth interaction with the stored data. This project was developed as part of the Thinkful curriculum to demonstrate proficiency in building robust backend systems and APIs.
Features

    Movies Data Access: Retrieve comprehensive information on all movies, including details like runtime, rating, and descriptions.
    Theater Listings: Access a list of theaters showing each movie, complete with location and showtime information.
    Review Management: Create, update, and delete reviews for movies, allowing users to share their opinions.
    RESTful Design: Structured API endpoints with clear and concise data responses, following best RESTful practices.
    Error Handling: Custom error handling middleware for scenarios like invalid routes or incorrect HTTP methods.

Technology Stack

This application was built using:

    JavaScript: Core language for server-side logic.
    Node.js: JavaScript runtime for building the backend server.
    Express: Framework used to manage the routes, middleware, and request handling.
    Knex.js: SQL query builder for database interaction.
    PostgreSQL: Relational database used for storing movie, theater, and review information.

Installation & Setup

To get started with the WeLoveMovies backend on your local machine, follow the instructions below:
Clone the repository

git clone https://github.com/zepedika/welovemovies.git

Install dependencies

Navigate into the project directory and run the following command to install all necessary dependencies.

npm install

Configure the database

Ensure you have PostgreSQL installed and running. Create a new database for the project, and set up the environment variables in a .env file at the root of the project.

DATABASE_URL=postgresql://<user>:<password>@localhost:5432/<database_name>

Run migrations and seed data

Set up the database schema and insert sample data.

npx knex migrate:latest
npx knex seed:run

Start the development server

npm start

