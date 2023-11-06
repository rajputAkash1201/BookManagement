# BookManagement
RESTful API using Node.js for managing books
# Project Setup
Run "npm install" to get the required libraries.
Create a .env file in the root folder and provide "MONGODB_URI" for database url. (datbase should be mongodb).
# Start Server
Run "npm run dev" to start the backend server.


# API Endpoints

Method POST and endpoint "/books" to save a book (Provide title, author, summary in request body).
Method GET and endpoint "/books" to get all books.
Method GET and endpoint "/books/:id" to get a book by id.
Method PUT and endpoint "/books/:id" to update a book.
Method DELETE and endpoint "/books/:id" to delete a book.
