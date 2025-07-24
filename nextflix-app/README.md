# Nextflix Web Application

## Project Overview
Nextflix is a web application designed for viewing movie information. It is built using Next.js for the frontend and NestJS for the backend, providing a seamless experience for users to explore and discover movies.

## Architecture
The project follows a Clean Architecture approach, separating concerns into distinct layers:
- **Presentation Layer**: Handled by Next.js, responsible for rendering the user interface.
- **Domain Layer**: Contains business logic and rules, implemented in the NestJS backend.
- **Data Layer**: Manages data access and transformations, ensuring that the frontend communicates with the backend API.

## Features
- **Responsive Design**: The application is designed to work on various devices, including desktops, tablets, and mobile phones.
- **API Gateway**: The backend serves as an API gateway, connecting to a free movie API to fetch movie data.
- **State Management**: The frontend utilizes a suitable state management solution to handle different application states (loading, error, success).

## Setup Instructions
### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd nextflix-app
   ```

2. Install dependencies for the frontend:
   ```
   cd apps/frontend
   npm install
   ```

3. Install dependencies for the backend:
   ```
   cd ../backend
   npm install
   ```

### Running the Application
1. Start the backend server:
   ```
   cd apps/backend
   npm run start:dev
   ```

2. Start the frontend application:
   ```
   cd apps/frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Documentation
API endpoints and usage can be found in the [API Documentation](docs/api-docs.md).

## Bonus Features
- Movie detail page
- Animations and transitions
- Localization support
- CI/CD setup

## Evaluation Criteria
The project will be evaluated based on code quality, functionality, documentation, and any extra features implemented.

## License
This project is licensed under the MIT License.