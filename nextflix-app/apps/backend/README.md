# Nextflix Backend Application

## Overview
The Nextflix backend application is built using NestJS and serves as the API gateway for the Nextflix web application. It is responsible for handling incoming requests, processing business logic, and interacting with external movie APIs to provide data to the frontend.

## Project Structure
- **src/**: Contains the main source code for the backend application.
  - **modules/**: Encapsulates related functionality into modules.
  - **controllers/**: Handles incoming requests and returns responses.
  - **services/**: Contains business logic and interacts with data sources.
  - **domain/**: Contains domain models and business rules.
  - **data/**: Manages data access logic, including database interactions.
  - **main.ts**: The entry point for the NestJS application.

- **test/**: Contains test files for the backend application.

## Installation
To install the necessary dependencies, navigate to the backend directory and run:

```bash
npm install
```

## Running the Application
To start the backend server, use the following command:

```bash
npm run start
```

The application will be available at `http://localhost:3000`.

## API Documentation
API endpoints and their usage can be found in the [API Documentation](../../docs/api-docs.md).

## Features
- API Gateway for the Nextflix frontend application.
- Integration with external movie APIs for fetching movie data.
- Clean architecture following best practices for maintainability and scalability.

## Testing
To run the tests for the backend application, use:

```bash
npm run test
```

## License
This project is licensed under the MIT License.