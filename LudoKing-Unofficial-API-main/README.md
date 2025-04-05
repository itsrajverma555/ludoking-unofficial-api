# LudoKing Unofficial API

This is an **Express.js** API for LudoKing Unofficial that handles various endpoints for checking room codes, results, and room types. The API serves data through routes and integrates middleware for logging, CORS, and parsing incoming requests.

---

## **Table of Contents**
- Getting Started
- Installation
- Environment Variables
- Project Structure
- Available Routes
- Usage
- Error Handling
- Middleware
- Contributing
- License

---

## **Getting Started**
To get started, clone this repository and set up the required dependencies.

---

## **Installation**

1. **Clone the repository:**
   git clone https://github.com/LudoKing-Unofficial/LudoKing-Unofficial-API.git
   cd LudoKing-Unofficial-API

2. **Install dependencies:**
   npm install

3. **Set up the .env file:**  
   Create a `.env` file in the root directory and add the following keys:
   PORT=3000
   API_KEY=abcd1234

4. **GET API KEY:**  
   [GET API KEY ](https://apihubs.in/)

---

## **Environment Variables**

Variable  | Description                      | Default Value
----------| --------------------------------- | -------------
`PORT`    | Port number the server runs on    | 3000
`API_KEY` | Your API key for external services | N/A

---

## **Project Structure**

/LudoKing-Unofficial-API
├── /routes
│   ├── roomcode.js      # Route for room code validation
│   ├── result.js        # Route for results endpoint
│   └── roomtype.js      # Route for room types
├── /public              # Static files (CSS, JS, etc.)
├── app.js               # Main entry point
├── package.json         # Dependencies and scripts
└── .env                 # Environment variables

---

## **Available Routes**

1. Default Route
   - URL: `/`
   - Method: `GET`
   - Description: Welcome message for the API.
   - Response: `{"message": "Welcome to Ludoking Unofficial!"}`

2. Room Code Validation & Result
   - URL: `/roomcode/classic`
   - URL: `/roomcode/popular`
   - URL: `/roomcode/quick`
   - Method: `GET`
   - Description: Fetches room code details using an external API.
   - Sample Request: `GET http://localhost:3000/roomcode/classic`
   - Sample Response: `{"error": "false", "code": "200", "message": "data found", "data": { ... }}`

   - URL: `/roomcode/result/0495959` 
   - Method: `GET`
   - Sample Request: `GET http://localhost:3000/roomcode/result/0495959`
   - Sample Response: `{"error": "false", "code": "200", "message": "data found", "data": { ... }}`


3. Result Endpoint ( User Input Roomcode)
   - URL: `/result/0807070`
   - Method: `GET`
   - Description: Fetches game results.
   - Sample Request: `GET http://localhost:3000/result/0807070`
   - Sample Response: `{"error": "false", "code": "200", "message": "data found", "data": { ... }}`


4. Room Type Endpoint
   - URL: `/roomtype`
   - Method: `GET`
   - Description: Fetches room type information.
   - Sample Request: `GET http://localhost:3000/roomtype/0807070`
   - Sample Response: `{"error": "false", "code": "200", "message": "data found", "data": { ... }}`


---

## **Usage**

1. Run the server: `npm start`
2. Access the API: `http://localhost:3000`

---

## **Error Handling**

- If a route does not exist, the server will return a 404 - Not Found:
  `{"error": "true", "message": "404 - Not Found"}`

---

## **Middleware**

Middleware       | Description
-----------------| --------------------------------------
`body-parser`    | Parses incoming request bodies.
`morgan`         | Logs requests for debugging purposes.
`cors`           | Enables Cross-Origin Resource Sharing.
`express.static` | Serves static files.

---

## **License**

This project is licensed under the MIT License. You are free to use, modify, and distribute the code.

---

## **Contact**

For any issues or suggestions, feel free to open an issue or reach out at:
- Email: simplehacker02@gmail.com
- GitHub: Simple Hacker
