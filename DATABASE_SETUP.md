# Database Setup Guide

This guide will help you set up PostgreSQL database for the Portfolio application.

## Current Database Configuration

The application expects:
- **Database Name**: `portfolio`
- **Username**: `postgres`
- **Password**: `samarth39`
- **Host**: `localhost`
- **Port**: `5432`

## Option 1: Install PostgreSQL (Recommended)

### Windows Installation

1. **Download PostgreSQL:**
   - Visit: https://www.postgresql.org/download/windows/
   - Or use the installer: https://www.postgresql.org/download/windows/installer/
   - Download the latest version (15.x or higher)

2. **Run the Installer:**
   - Run the downloaded `.exe` file
   - During installation:
     - **Port**: Keep default `5432` (or note it if you change it)
     - **Password**: Set to `samarth39` (or update `application.properties` if different)
     - **Superuser**: `postgres` (default)
   - Complete the installation

3. **Verify Installation:**
   - PostgreSQL should start as a Windows service automatically
   - Check Services: Open Services (Win + R, type `services.msc`)
   - Look for "postgresql-x64-XX" service (should be Running)

### Mac Installation

```bash
# Using Homebrew
brew install postgresql@15
brew services start postgresql@15
```

### Linux (Ubuntu/Debian) Installation

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

## Option 2: Use Existing PostgreSQL Installation

If PostgreSQL is already installed but not in PATH:

1. **Find PostgreSQL Installation:**
   - Default Windows location: `C:\Program Files\PostgreSQL\[version]\bin\`
   - Add this to your PATH or use full path

2. **Start PostgreSQL Service:**
   ```powershell
   # Windows PowerShell (as Administrator)
   Start-Service postgresql-x64-15
   ```

## Create the Database

### Method 1: Using psql Command Line

1. **Open Command Prompt/PowerShell**

2. **Connect to PostgreSQL:**
   ```bash
   # Windows (if in PATH)
   psql -U postgres
   
   # Or use full path
   "C:\Program Files\PostgreSQL\15\bin\psql.exe" -U postgres
   ```

3. **Enter password when prompted:** `samarth39`

4. **Create the database:**
   ```sql
   CREATE DATABASE portfolio;
   ```

5. **Verify database creation:**
   ```sql
   \l
   ```
   You should see `portfolio` in the list.

6. **Exit psql:**
   ```sql
   \q
   ```

### Method 2: Using pgAdmin (GUI Tool)

1. **Open pgAdmin** (installed with PostgreSQL)

2. **Connect to Server:**
   - Right-click "Servers" → "Create" → "Server"
   - Or use existing connection
   - Enter password: `samarth39`

3. **Create Database:**
   - Right-click "Databases" → "Create" → "Database"
   - Name: `portfolio`
   - Click "Save"

### Method 3: Using SQL File

1. **Run the SQL script:**
   ```bash
   # Using psql
   psql -U postgres -f database-setup.sql
   
   # Or with full path
   "C:\Program Files\PostgreSQL\15\bin\psql.exe" -U postgres -f database-setup.sql
   ```

## Verify Database Setup

### Test Connection

Once the database is created, test the connection by starting the Spring Boot application:

```bash
mvn spring-boot:run
```

If the database connection is successful, you'll see:
- No database connection errors in the console
- Hibernate will automatically create tables on first run
- Application will start successfully

### Check Database Tables (After Running Application)

After the application runs once, you can verify tables were created:

```sql
-- Connect to portfolio database
psql -U postgres -d portfolio

-- List all tables
\dt

-- You should see tables like:
-- - blog
-- - user_profile
```

## Update Configuration (If Needed)

If your PostgreSQL setup differs, update `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/portfolio
spring.datasource.username=postgres
spring.datasource.password=your_password
```

## Troubleshooting

### Error: "Connection refused" or "Could not connect to server"

**Solutions:**
1. **Check if PostgreSQL is running:**
   ```powershell
   # Windows
   Get-Service -Name "*postgres*"
   ```
   If not running, start it:
   ```powershell
   Start-Service postgresql-x64-15
   ```

2. **Check port 5432:**
   ```powershell
   netstat -an | findstr 5432
   ```
   Should show PostgreSQL listening on 5432

3. **Check firewall:** Ensure PostgreSQL port 5432 is allowed

### Error: "Database does not exist"

- Make sure you created the `portfolio` database
- Verify database name matches in `application.properties`

### Error: "Password authentication failed"

- Verify password in `application.properties` matches your PostgreSQL password
- Default password might be different if set during installation

### Error: "Role does not exist"

- Make sure the user `postgres` exists
- Or update `application.properties` with a different username

### PostgreSQL Not in PATH

**Windows:**
1. Find PostgreSQL bin directory: `C:\Program Files\PostgreSQL\[version]\bin`
2. Add to PATH:
   - System Properties → Advanced → Environment Variables
   - Add to PATH variable
3. Restart terminal/command prompt

**Or use full path:**
```powershell
& "C:\Program Files\PostgreSQL\15\bin\psql.exe" -U postgres
```

## Alternative: Using Docker (Advanced)

If you prefer using Docker:

```bash
# Run PostgreSQL in Docker
docker run --name portfolio-postgres \
  -e POSTGRES_PASSWORD=samarth39 \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_DB=portfolio \
  -p 5432:5432 \
  -d postgres:15

# Verify it's running
docker ps
```

## Quick Setup Checklist

- [ ] PostgreSQL installed
- [ ] PostgreSQL service running
- [ ] Database `portfolio` created
- [ ] Password matches in `application.properties`
- [ ] Can connect to database
- [ ] Application starts without database errors

## Next Steps

After database setup is complete:
1. Start the backend: `mvn spring-boot:run`
2. Start the frontend: `cd portfolio-frontend && npm run dev`
3. Access the application at http://localhost:5173

The application will automatically create the required tables on first run thanks to Hibernate's `ddl-auto=update` configuration.
