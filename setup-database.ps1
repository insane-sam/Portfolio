# PowerShell script to set up PostgreSQL database for Portfolio application
# Run this script as Administrator or ensure you have PostgreSQL access

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Portfolio Database Setup Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Configuration
$DB_NAME = "portfolio"
$DB_USER = "postgres"
$DB_PASSWORD = "samarth39"
$PG_PORT = 5432

# Try to find PostgreSQL installation
Write-Host "Looking for PostgreSQL installation..." -ForegroundColor Yellow

$pgPaths = @(
    "C:\Program Files\PostgreSQL\15\bin\psql.exe",
    "C:\Program Files\PostgreSQL\16\bin\psql.exe",
    "C:\Program Files (x86)\PostgreSQL\15\bin\psql.exe",
    "C:\Program Files (x86)\PostgreSQL\16\bin\psql.exe"
)

$psqlPath = $null
foreach ($path in $pgPaths) {
    if (Test-Path $path) {
        $psqlPath = $path
        Write-Host "Found PostgreSQL at: $path" -ForegroundColor Green
        break
    }
}

# Check if psql is in PATH
if ($null -eq $psqlPath) {
    $psqlInPath = Get-Command psql -ErrorAction SilentlyContinue
    if ($psqlInPath) {
        $psqlPath = "psql"
        Write-Host "Found PostgreSQL in PATH" -ForegroundColor Green
    }
}

if ($null -eq $psqlPath) {
    Write-Host ""
    Write-Host "ERROR: PostgreSQL not found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install PostgreSQL from: https://www.postgresql.org/download/windows/" -ForegroundColor Yellow
    Write-Host "Or ensure PostgreSQL bin directory is in your PATH." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "After installation, you can run this script again." -ForegroundColor Yellow
    exit 1
}

# Check if PostgreSQL service is running
Write-Host ""
Write-Host "Checking PostgreSQL service..." -ForegroundColor Yellow
$pgService = Get-Service -Name "*postgres*" -ErrorAction SilentlyContinue | Where-Object { $_.Status -eq "Running" }

if ($null -eq $pgService) {
    Write-Host "WARNING: PostgreSQL service not running!" -ForegroundColor Red
    Write-Host "Attempting to start PostgreSQL service..." -ForegroundColor Yellow
    
    try {
        $service = Get-Service -Name "*postgres*" -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($service) {
            Start-Service -Name $service.Name
            Write-Host "PostgreSQL service started successfully!" -ForegroundColor Green
            Start-Sleep -Seconds 2
        } else {
            Write-Host "ERROR: Could not find PostgreSQL service. Please start it manually." -ForegroundColor Red
            exit 1
        }
    } catch {
        Write-Host "ERROR: Could not start PostgreSQL service. Please start it manually from Services." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "PostgreSQL service is running" -ForegroundColor Green
}

# Set PostgreSQL password environment variable
$env:PGPASSWORD = $DB_PASSWORD

# Check if database exists
Write-Host ""
Write-Host "Checking if database '$DB_NAME' exists..." -ForegroundColor Yellow

$checkDbQuery = "SELECT 1 FROM pg_database WHERE datname = '$DB_NAME';"
$dbExists = & $psqlPath -U $DB_USER -d postgres -tAc $checkDbQuery 2>$null

if ($dbExists -eq "1") {
    Write-Host "Database '$DB_NAME' already exists!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Database setup complete!" -ForegroundColor Green
} else {
    Write-Host "Database '$DB_NAME' does not exist. Creating..." -ForegroundColor Yellow
    
    $createDbQuery = "CREATE DATABASE $DB_NAME;"
    $result = & $psqlPath -U $DB_USER -d postgres -c $createDbQuery 2>&1
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Database '$DB_NAME' created successfully!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Database setup complete!" -ForegroundColor Green
    } else {
        Write-Host "ERROR: Failed to create database!" -ForegroundColor Red
        Write-Host $result -ForegroundColor Red
        Write-Host ""
        Write-Host "Please check:" -ForegroundColor Yellow
        Write-Host "  1. PostgreSQL is running" -ForegroundColor Yellow
        Write-Host "  2. Username and password are correct" -ForegroundColor Yellow
        Write-Host "  3. You have permission to create databases" -ForegroundColor Yellow
        exit 1
    }
}

# Verify database connection
Write-Host ""
Write-Host "Verifying database connection..." -ForegroundColor Yellow
$verifyQuery = "SELECT version();"
$version = & $psqlPath -U $DB_USER -d $DB_NAME -tAc $verifyQuery 2>$null

if ($LASTEXITCODE -eq 0) {
    Write-Host "Connection verified!" -ForegroundColor Green
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "Setup Summary" -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "Database Name: $DB_NAME" -ForegroundColor White
    Write-Host "Username: $DB_USER" -ForegroundColor White
    Write-Host "Host: localhost" -ForegroundColor White
    Write-Host "Port: $PG_PORT" -ForegroundColor White
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "  1. Start backend: mvn spring-boot:run" -ForegroundColor White
    Write-Host "  2. Start frontend: cd portfolio-frontend && npm run dev" -ForegroundColor White
    Write-Host ""
    Write-Host "The application will automatically create tables on first run." -ForegroundColor Green
} else {
    Write-Host "WARNING: Could not verify connection, but database was created." -ForegroundColor Yellow
}

# Clean up
Remove-Item Env:\PGPASSWORD

Write-Host ""
