# Nextflix Frontend Application

This is the frontend application for the Nextflix project, built using Next.js and styled with Tailwind CSS. The application provides a responsive interface for users to browse and view movie information.

## Project Structure

- **src/**: Contains the source code for the application.
  - **components/**: Reusable React components.
  - **pages/**: Next.js pages, including the home page.
  - **styles/**: Global styles and Tailwind CSS configurations.
  - **hooks/**: Custom React hooks for state management and side effects.
  - **state/**: State management logic, potentially using Redux or Context API.
  - **utils/**: Utility functions for various functionalities.

- **public/**: Static assets such as images and icons.

- **tailwind.config.js**: Configuration file for Tailwind CSS.

- **next.config.js**: Configuration file for Next.js.

- **package.json**: Lists dependencies and scripts for the frontend application.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```
   cd nextflix-app/apps/frontend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Features

- Responsive design for desktop, tablet, and mobile devices.
- Integration with a backend API developed using NestJS.
- State management to handle loading, error, and success states.
- Custom hooks for managing side effects and state.

## API Documentation

For API documentation, please refer to the backend README or the API documentation file located in the `docs` directory.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.