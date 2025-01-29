# Echos

Echos is a cutting-edge social media application where users can sign up, log in, and post content. Built with a powerful stack including Node.js, Express, MongoDB, and React, Echos offers a seamless and engaging user experience.

## 🚀 Features

- 🔒 **User Authentication**: Sign up and log in securely.
- 📝 **CRUD Operations**: Create, read, update, and delete posts effortlessly.
- 📱 **Responsive Design**: Enjoy a flawless experience on any device.
- 🎨 **Modern UI**: Built with Material-UI and custom CSS for a sleek look.

## 🛠️ Technologies Used

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **React**
- **Axios**
- **Material-UI**
- **Faker.js**

## 🏁 Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/theotsori/echos.git
    cd echos
    ```

2. **Install server dependencies:**

    ```sh
    cd server
    npm install
    ```

3. **Install client dependencies:**

    ```sh
    cd ../client
    npm install
    ```

4. **Create a .env file in the root of the server directory and add the following environment variables:**

    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application

1. **Start the server:**

    ```sh
    cd server
    npm start
    ```

2. **Start the client:**

    ```sh
    cd ../client
    npm start
    ```

3. **Open your browser and navigate to** `http://localhost:3000`.

### 📂 Project Structure

```
echos/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Feed.js
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   ├── Post.js
│   │   │   ├── Feed.css
│   │   │   ├── Login.css
│   │   │   ├── Signup.css
│   │   │   └── Post.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── package.json
│   └── ...
├── server/
│   ├── config/
│   │   └── keys.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── postRoutes.js
│   ├── index.js
│   ├── setup.js
│   ├── .env
│   ├── package.json
│   └── ...
├── .gitignore
└── README.md
```

### 🤝 Contribution

Contributions are welcome! Please open an issue or submit a pull request for any changes. Let's build something amazing together!
```/echos.git
```