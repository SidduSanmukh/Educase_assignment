# Educase Assignment 🚀

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.2.1-blue.svg)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange.svg)](https://www.mysql.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)
[![Deployed on Render](https://img.shields.io/badge/Deployed%20on-Render-46e3b7.svg)](https://educase-assignment-q4ex.onrender.com/)

A robust backend API for managing schools, built with Node.js and Express.js. This project allows users to add schools and retrieve them sorted by proximity to a given location, making it ideal for location-based school discovery applications.

## 🌟 Features

- **Add Schools**: Seamlessly add new schools with location data (latitude and longitude).
- **Proximity-Based Sorting**: Retrieve schools sorted by distance from a user's current location.
- **Data Validation**: Robust input validation using Joi to ensure data integrity.
- **Security**: Enhanced security with Helmet for HTTP headers and CORS for cross-origin requests.
- **Logging**: Comprehensive request logging with Morgan for monitoring and debugging.
- **Error Handling**: Centralized error handling middleware for consistent API responses.
- **Database Integration**: MySQL database for persistent data storage.
- **RESTful API**: Clean, RESTful endpoints for easy integration.
- **Static File Serving**: Serves a simple web interface for API documentation.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Validation**: Joi
- **Security**: Helmet, CORS
- **Logging**: Morgan
- **Environment**: dotenv
- **Deployment**: Render

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SidduSanmukh/Educase_assignment.git
   cd Educase_assignment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5000
   DB_HOST=your_mysql_host
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=your_database_name
   ```

4. **Set up the database**:
   Ensure MySQL is running and create the necessary tables. The `initDB.js` script handles database initialization.

5. **Start the server**:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

## 🚀 Usage

### API Endpoints

#### 1. Add a School
- **Endpoint**: `POST /api/addSchool`
- **Description**: Adds a new school to the database.
- **Request Body**:
  ```json
  {
    "name": "Example School",
    "address": "123 Main St, City, State",
    "latitude": 40.7128,
    "longitude": -74.0060
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "School added successfully"
  }
  ```

#### 2. List Schools by Proximity
- **Endpoint**: `GET /api/listSchools?latitude={lat}&longitude={lon}`
- **Description**: Retrieves all schools sorted by distance from the provided coordinates.
- **Query Parameters**:
  - `latitude`: User's latitude (required)
  - `longitude`: User's longitude (required)
- **Response**:
  ```json
  {
    "success": true,
    "count": 2,
    "data": [
      {
        "id": 1,
        "name": "Nearby School",
        "address": "456 Elm St",
        "latitude": 40.7128,
        "longitude": -74.0060,
        "distance": 0.5
      },
      {
        "id": 2,
        "name": "Distant School",
        "address": "789 Oak St",
        "latitude": 40.7589,
        "longitude": -73.9851,
        "distance": 5.2
      }
    ]
  }
  ```

### Web Interface
Visit `http://localhost:5000` to access the API documentation page.

## 🏗️ Project Structure

```
Educase_assignment/
├── app.js                 # Main Express app setup
├── server.js              # Server entry point
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation
├── .env                   # Environment variables (not committed)
├── access.log             # Request logs
├── src/
│   ├── config/
│   │   ├── db.js          # Database connection
│   │   └── initDB.js      # Database initialization
│   ├── controllers/
│   │   └── schoolController.js  # API controllers
│   ├── middlewares/
│   │   ├── errorHandler.js      # Error handling middleware
│   │   └── validate.js          # Input validation
│   ├── models/
│   │   └── schoolModel.js       # Database models
│   ├── public/
│   │   └── index.html           # API documentation page
│   ├── routes/
│   │   └── schoolRoutes.js      # API routes
│   ├── services/
│   │   └── schoolService.js     # Business logic
│   └── utils/
│       └── distance.js          # Distance calculation utility
```

## 🌐 Deployment

This project is deployed on Render at: [https://educase-assignment-q4ex.onrender.com/](https://educase-assignment-q4ex.onrender.com/)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Author**: Siddu Sanmukh
- **GitHub**: [SidduSanmukh](https://github.com/SidduSanmukh)
- **Project Link**: [https://github.com/SidduSanmukh/Educase_assignment](https://github.com/SidduSanmukh/Educase_assignment)

---

⭐ If you find this project helpful, please give it a star!
