# Auth api


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## [PR](https://github.com/Laith-Vlad/auth-api/pull/3)
## [Actions](https://github.com/Laith-Vlad/auth-api/actions)
## [Deployed link ](https://authintication.onrender.com/)

## Project Description

basic sing in sign up repo for tranning it can sign in and login and has authintication abilities 
## Installation Instructions
Installation:

    Make sure you have Node.js and npm (Node Package Manager) installed on your system.
    Clone the repository from GitHub to your local machine.
    Open a terminal and navigate to the project's root directory.
    Run the command npm install to install the dependencies required for the application.

Testing:

    To run the tests for the application, use the command npm test.
    The tests will be executed, and the results will be displayed in the terminal.
    Ensure that all tests pass successfully before proceeding.

Running the Application:

    To run the application, use the command nodemon in the terminal.
    The application will start, and you should see a message indicating that it's running.
    You can access the application by opening a web browser and navigating to the appropriate URL (e.g., http://localhost:3000).

Setting Up the Application:

    Before running the application, make sure to set up the necessary environment variables, such as the database connection details or any API keys required.
    Create a .env file in the project's root directory and define the required environment variables in the format VARIABLE_NAME=VALUE.
    Refer to the application's documentation or configuration files to determine which environment variables need to be set.
  




## API Documentation





## procces
    User Sign-up Process:
        User fills out a sign-up form with their desired username and password.
        The form data is sent to the server.
        The server receives the sign-up request and validates the data.
        If the data is valid, the server creates a new user record in the database with the provided username and encrypted password.
        The server sends a response to the client indicating successful sign-up.

    User Sign-in Process:
        User fills out a sign-in form with their username and password.
        The form data is sent to the server.
        The server receives the sign-in request and extracts the username and password.
        The server verifies the provided username and password by comparing them with the stored user credentials in the database.
        If the credentials match, the server generates a token or session for the user to maintain their authenticated state.
        The server sends a response to the client indicating successful sign-in.

    Authentication Middleware:
        Incoming requests to protected routes are intercepted by the authentication middleware.
        The middleware checks for the presence of a valid authentication token or session in the request headers.
        If the authentication token or session is valid, the middleware allows the request to proceed to the protected route.
        If the authentication token or session is invalid or missing, the middleware sends an error response indicating unauthorized access.
        

## How to use 


- **post /signup**: signing up. [local host link](https://authintication.onrender.com/signup)
you can use the rest of it by adding a / and writing the id  while changing the method

### login Resource

- **post /login**: Retrieve a list of clothes records. [local host link](https://authintication.onrender.com/login)
you can use the rest of it by adding a / and writing the id   

## Usage Guide
you can add stuff using the body cause i used body parser regarding the food you shoud write it like that 
### signup endpoint it should be in the body
```json
{
  "username": "rice",
  "password": "123"
}
```
### login should be in the header so basic authentication 
```json
{
  "username": "rice",
  "password": "123"
  
}

```
