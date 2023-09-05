# Oasis Hotel app documentation

This repository contains the code of the Oasis Hotel app which is a backoffice app used by hotel employees to manage hotel cabins and bookings

## Tech stack:

In this project we used React for the front-end and Supabase for the backend (authentication, database, file storage)

We also used many packages and libraries along side with React for diffrent purpouses:

- **react-query**: to manage remote state in our app (fetching, mutating, caching)
- **react-query-devtools**: for debugging and inspecting the state and behavior of React Query in our application.
- **date-fns**: provides a wide range of functions to parse, format, manipulate, and calculate dates and times in a flexible and easy-to-use manner
- **dotenv**: used for loading environment variables from a .env file into our application
- **react-error-boundary**: used for handling and displaying errors that occur within React components, helping prevent the entire application from crashing due to unhandled errors.
- **react-hook-form**: for managing and validating form state and input handling in a simple and efficient way using React hooks
- **react-hot-toast**: used for displaying toast notifications our application. It provides a simple way to show temporary messages or alerts to users, typically for success messages, errors, or other important updates.
- **react-router-dom**: used for adding client-side routing to our web applications. It allows you to create navigation and define routes within our React application, making it possible to build single-page applications with multiple views or pages that can be dynamically loaded without full page refreshes
- **recharts**: used to create interactive and customizable charts and graphs like the ones we have in the dashboard page.
- **devtools**: allows us to write CSS styles for our components inside using JS code inside the component file.
- **eslint**: popular JavaScript linting tool used to analyze and enforce coding style and potential programming errors in our code.

## Project structure:

We used a feature based structure:

- **features** folder contains folders for diffrent features of our application
- **Services** is for reusable code for interacting with Supabase API
- **UI** is for reusable components that don’t belong to the features
- **Services** contain some stateless helper functions that don’t create side effects used in multiple places in the application
- **pages** in this folder we have diffrent pages of our app, each page is associated with a Route.  
  ![project structure](https://github.com/ayoub-oufqir/Oasis_Hotel/assets/76181917/759fd90d-c318-4f03-8425-8084364084a5)

## Diffrent pages of our app:

- **Dashboard**: this dashboard gives us diffrent statistics about our hotel in numbers and charts, we can choose which period of time as well (last 7/30/90 days)
  ![dashboard](https://github.com/ayoub-oufqir/Oasis_Hotel/assets/76181917/e3967b2e-5717-4f52-8354-8b581e93ae34)

- **Bookings**: in this page we can visualise all the bookings filter them based on the status and sort them
  ![bookings](https://github.com/ayoub-oufqir/Oasis_Hotel/assets/76181917/3fb7af7d-50b4-4347-ac86-3b570586af9b)

- **Cabins**: here we can see all the cabins we have in the hotel and we can add new cabins, filter and sort existing cabins.
  ![cabins](https://github.com/ayoub-oufqir/Oasis_Hotel/assets/76181917/962c65ef-b503-45f1-9e68-19008b753111)

- **Users**: in this page the admin can create accounts for new users (users are the hotel employees)
  ![users](https://github.com/ayoub-oufqir/Oasis_Hotel/assets/76181917/db326d56-bfb0-4167-a248-a3e5762c2f35)

- **Settings**: in this page we can update the settings of our hotel (price of breakfast, maximum of guests per booking, maximum of nights per booking & minimum nights per booking)
  ![settings](https://github.com/ayoub-oufqir/Oasis_Hotel/assets/76181917/06b476ec-0e98-4b0c-9130-8cebf77deeae)

- **Account**: here users can update their email, full name, avatar image and password (disabled for the public so that the app can function for all public visitors)
  ![account](https://github.com/ayoub-oufqir/Oasis_Hotel/assets/76181917/33efbc0f-ce67-4dfc-ae60-404633b92435)

- **Checkin**: this page allows hotel employees to check in clients
  ![checkin](https://github.com/ayoub-oufqir/Oasis_Hotel/assets/76181917/b9476524-97d8-4a9d-bd7b-2292c141ad0d)

On top of all these pages users can:

- upload sample data (new bookings)
- update, duplicate and delete a cabin
- view details of a booking
- delete a booking
- login/logout with email and password
- turn on/off dark mode
