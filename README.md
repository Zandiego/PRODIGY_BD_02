# PRODIGY_BD_02

This project is a RESTful API built with Node.js, Express, and MongoDB (using Mongoose).

## Features
- CRUD operations for users
- MongoDB integration with Mongoose
- Input validation using express-validator
- Environment variable support using dotenv

## Setup Instructions

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file with your DB credentials
4. Run `npm run dev` to start the server

## Endpoints

- `POST /api/users` – Create user
- `GET /api/users` – Get all users
- `GET /api/users/:id` – Get user by ID
- `PUT /api/users/:id` – Update user
- `DELETE /api/users/:id` – Delete user
