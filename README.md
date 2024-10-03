# e-Commerce Website

A fully functional e-commerce website built with **Node.js**, **Express.js**, **Mongoose**, and **EJS**. It features **user authentication**, **admin product management**, and a **shopping cart**.

## Features
- User registration, login, and authentication (JWT, bcrypt).
- Admin functionality for adding and removing products.
- Image uploads with **Multer**.
- Shopping cart functionality.
- Session management and flash messages.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/fuyalasmit/e-Commerce-website.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the environment variables:
    - Create a `.env` file in the root directory and add the following variables:
    ```bash
    
    JWT_KEY=<Your JWT Secret>
    EXPRESS_SESSION_SECRET=<Your Express Session Secret>
    NODE_ENV=development
    ```
    Replace the placeholders with your actual values.

4. Set up the `development.json` file:
    - Navigate to `config/development.json` and add your local MongoDB URI:
    ```json
    {
        "MONGODB_URI": "<Your MongoDB URI>"
    }
    ```

5. Run the app:
    ```bash
    node app.js
    ```
    Or, if you have `nodemon` installed:
    ```bash
    nodemon app.js
    ```

6. Visit `http://localhost:3000` in your browser.

## Usage

1. **User Actions**:
    - Users can sign up and log in to the website.
    - Once logged in, users can browse products and add them to their shopping cart.

2. **Admin Actions**:
    - Admins can access the dashboard to manage products.
    - Admins can add new products, and remove or edit existing products.

3. **Cart and Checkout**:
    - The cart stores the products a user selects where users can view their cart.
    - Flash messages notify users about successful actions (like product addition).

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- EJS
- JWT for authentication
- Multer for file uploads
- bcrypt for password hashing

## License
This project is licensed under the ISC License.
