# Echos Server

This is the server-side application for Echos, a social media platform where users can sign up, log in, and post content. The server is built using Node.js, Express, and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Echos Server is designed to handle requests from the Echos client applications, manage data storage, and provide a robust API for various functionalities. It is built using modern web technologies to ensure scalability and performance.

## Features

- User authentication (sign up, log in)
- Create, read, update, and delete posts
- JWT-based authentication
- RESTful API

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JWT

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

### Installation

1. Clone the repository:

```sh
git clone https://github.com/theotsori/echos.git
cd echos/server
```

2. Install server dependencies:

```sh
npm install
```

3. Create a `.env` file in the root of the `server` directory and add the following environment variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
```

### Running the Application

1. Start the server:

```sh
npm start
```

2. The server will run on `http://localhost:5000`.

## Project Structure

```plaintext
server/
├── config/
│   └── keys.js
├── models/
│   ├── user.js
│   └── post.js
├── routes/
│   ├── userRoutes.js
│   └── postRoutes.js
├── middleware/
│   └── authMiddleware.js
├── index.js
├── .env
├── package.json
└── ...
```

## API Endpoints

### User Routes

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user

### Post Routes

- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
