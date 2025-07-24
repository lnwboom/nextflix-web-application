# Nextflix API Documentation

## Overview
This document provides an overview of the API endpoints available in the Nextflix application. The backend is built using NestJS and serves as an API gateway to interact with the Free Movie API.

## Base URL
```
http://localhost:3000/api
```

## Endpoints

### 1. Get Movies
- **Endpoint:** `/movies`
- **Method:** GET
- **Description:** Retrieve a list of movies.
- **Query Parameters:**
  - `page` (optional): The page number for pagination.
  - `limit` (optional): The number of movies to return per page.
- **Response:**
  - **200 OK**
    ```json
    {
      "data": [
        {
          "id": "1",
          "title": "Movie Title",
          "overview": "Movie overview",
          "release_date": "YYYY-MM-DD",
          "poster_path": "/path/to/poster.jpg"
        },
        ...
      ],
      "total": 100,
      "page": 1
    }
    ```

### 2. Get Movie Details
- **Endpoint:** `/movies/:id`
- **Method:** GET
- **Description:** Retrieve detailed information about a specific movie.
- **Path Parameters:**
  - `id`: The ID of the movie.
- **Response:**
  - **200 OK**
    ```json
    {
      "id": "1",
      "title": "Movie Title",
      "overview": "Detailed movie overview",
      "release_date": "YYYY-MM-DD",
      "genres": ["Genre1", "Genre2"],
      "rating": 8.5,
      "poster_path": "/path/to/poster.jpg"
    }
    ```

### 3. Search Movies
- **Endpoint:** `/movies/search`
- **Method:** GET
- **Description:** Search for movies by title.
- **Query Parameters:**
  - `query`: The title or keywords to search for.
- **Response:**
  - **200 OK**
    ```json
    {
      "data": [
        {
          "id": "1",
          "title": "Movie Title",
          "overview": "Movie overview",
          "release_date": "YYYY-MM-DD",
          "poster_path": "/path/to/poster.jpg"
        },
        ...
      ]
    }
    ```

## Error Handling
All endpoints will return appropriate HTTP status codes and error messages in case of failure. Common error responses include:
- **400 Bad Request:** Invalid parameters.
- **404 Not Found:** Resource not found.
- **500 Internal Server Error:** Unexpected server error.

## Testing the API
You can test the API endpoints using tools like Postman or directly through the provided API documentation link.

## Conclusion
This API documentation provides a comprehensive overview of the available endpoints for the Nextflix application. For further details, please refer to the source code and implementation in the backend directory.