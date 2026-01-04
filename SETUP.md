# Portfolio Application - Setup Guide

This is a full-stack portfolio application with a React frontend and Spring Boot backend.

## Prerequisites

Before running the application, ensure you have the following installed:

1. **Java JDK 17 or higher** (Java 21 recommended)
   - Check installation: `java -version`
   - Download from: https://adoptium.net/

2. **Node.js (v16 or higher)** and npm
   - Check installation: `node --version` and `npm --version`
   - Download from: https://nodejs.org/

3. **Maven 3.6+**
   - Check installation: `mvn --version`
   - Download from: https://maven.apache.org/

4. **PostgreSQL Database**
   - Install PostgreSQL from: https://www.postgresql.org/download/
   - Default port: 5432

## Database Setup

1. **Install and start PostgreSQL** (if not already running)

2. **Create the database:**
   ```sql
   CREATE DATABASE portfolio;
   ```

3. **Verify database connection:**
   - Update `src/main/resources/application.properties` if your PostgreSQL:
     - Runs on a different port (default: 5432)
     - Uses different username/password (default: postgres/samarth39)
     - Is on a different host (default: localhost)

## Installation

All dependencies have been installed. If you need to reinstall:

### Frontend Dependencies
```bash
cd portfolio-frontend
npm install
```

### Backend Dependencies
```bash
# From the root directory
mvn clean install -DskipTests
```

## Running the Application

### 1. Start the Backend (Spring Boot)

From the root directory:
```bash
# Using Maven
mvn spring-boot:run

# OR using the compiled JAR
java -jar target/portfolio-0.0.1-SNAPSHOT.jar
```

The backend will start on **http://localhost:8080**

### 2. Start the Frontend (React + Vite)

Open a new terminal window and run:
```bash
cd portfolio-frontend
npm run dev
```

The frontend will start on **http://localhost:5173** (or another port if 5173 is taken)

## Access the Application

Once both servers are running:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8080/api

## Project Structure

```
portfolio/
├── portfolio-frontend/     # React frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service calls
│   │   └── styles/        # CSS styles
│   └── package.json
├── src/main/java/         # Spring Boot backend
│   └── com/samarth/portfolio/
│       ├── controller/    # REST controllers
│       ├── service/       # Business logic
│       ├── repository/    # Data access layer
│       └── entity/        # JPA entities
└── pom.xml               # Maven configuration
```

## Troubleshooting

### Backend Issues

1. **Port 8080 already in use:**
   - Change the port in `src/main/resources/application.properties`:
     ```
     server.port=8081
     ```
   - Update frontend API base URL in `portfolio-frontend/src/services/api.js`

2. **Database connection error:**
   - Ensure PostgreSQL is running
   - Verify database credentials in `application.properties`
   - Check if the `portfolio` database exists

3. **Maven build fails:**
   - Clean and rebuild: `mvn clean install -DskipTests`
   - Check Java version: `java -version` (should be 17+)

### Frontend Issues

1. **Port conflict:**
   - Vite will automatically use the next available port
   - Or specify a port in `vite.config.js`

2. **API connection errors:**
   - Ensure backend is running on port 8080
   - Check `portfolio-frontend/src/services/api.js` baseURL

3. **npm install fails:**
   - Clear cache: `npm cache clean --force`
   - Delete `node_modules` and `package-lock.json`, then reinstall

## Development

### Build for Production

**Frontend:**
```bash
cd portfolio-frontend
npm run build
```

**Backend:**
```bash
mvn clean package -DskipTests
```

The compiled frontend will be in `portfolio-frontend/dist/`
The backend JAR will be in `target/portfolio-0.0.1-SNAPSHOT.jar`

## Environment Variables

You can override the backend port using an environment variable:
```bash
# Windows PowerShell
$env:PORT=8081; mvn spring-boot:run

# Linux/Mac
PORT=8081 mvn spring-boot:run
```

## API Endpoints

- `GET /api/blogs` - Get all blogs
- `POST /api/blogs` - Create a new blog
- `GET /api/profile` - Get user profile

## Notes

- The application uses Hibernate's `ddl-auto=update`, which will automatically create/update database tables
- The frontend expects the backend to be running on `http://localhost:8080/api`
- Make sure PostgreSQL is running before starting the backend
