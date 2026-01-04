-- Portfolio Database Setup Script
-- Run this script after PostgreSQL is installed

-- Create the database (run as postgres user or superuser)
CREATE DATABASE portfolio;

-- Connect to the portfolio database before running the following commands
-- \c portfolio

-- Note: The Spring Boot application will automatically create tables using Hibernate
-- (spring.jpa.hibernate.ddl-auto=update is configured in application.properties)
-- So you only need to create the database itself.

-- If you want to verify the database was created:
-- SELECT datname FROM pg_database WHERE datname = 'portfolio';
