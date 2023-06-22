## Routes

http://localhost:3000/movies (GET) to get all movies

http://localhost:3000/movies?rating=ascending (GET) to get all movies sorted by rating in ascending order.

http://localhost:3000/movies?rating=descending (GET) to get all movies sorted by rating in descending order.

http://localhost:3000/movies/:id (GET) to get one movie by id.

http://localhost:3000/movies (POST) to add a movie. Takes name, description, rating.

http://localhost:3000/movies/:id (PUT) to update a movie by id. Can update name, description, rating.

http://localhost:3000/movies/:id (Delete) to delete a movie by id.

# Getting started

## This project uses npm

1. Clone repo
2. Create .env with DB_URL
3. npm i
4. npm run start:dev
