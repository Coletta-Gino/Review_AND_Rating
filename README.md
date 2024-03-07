# Review & Rating System
This repository contains a web application for managing reviews and ratings. The application is built using HTML, CSS (with Bulma framework), JavaScript (with jQuery), PHP, and MySQL.

## Features
- **Dynamic Rating Display**: Users can view average ratings, total reviews, and distribution of ratings.
- **Interactive Rating System**: Users can rate items using star icons and submit reviews.
- **Modal Interaction**: The application utilizes modals for adding reviews, providing a user-friendly interface.
- **AJAX Requests**: Client-side interactions are handled using AJAX requests, enabling seamless updates without page reloads.
- **Responsive Design**: The application is responsive, ensuring compatibility across various devices and screen sizes.

## Getting Started
To run this application locally:

1. Clone this repository to your local machine.
2. Set up a local development environment with PHP and MySQL support.
3. Import the provided database schema (`database.sql`) to create the necessary database table.
4. Configure the database connection details in the `config.php` file.
5. Start a PHP server and navigate to the application's directory in your web browser.

## Usage
Once the application is running, users can:
- View average ratings, total reviews, and distribution of ratings.
- Add reviews and ratings using the modal interface.
- See dynamically updated review content without page reloads.

## File Structure
The repository consists of the following files:

- `index.php`: The main HTML file containing the structure of the webpage, including the review section and modal for adding reviews.
- `style.css`: CSS file for global styles, including reset styles, typography, and layout.
- `modal.html`: HTML file defining the structure of the modal for adding reviews.
- `app.js`: JavaScript file responsible for handling client-side interactions, such as opening/closing modals, rating functionality, and AJAX requests.
- `submit_rating.php`: PHP script for handling review submission and data retrieval from the database.
- `config.php`: PHP script for establishing a database connection.
- `database.sql`: SQL file containing the database schema for creating the `review_table` table.

## Credits
This Review & Rating System was created and maintained by XiaoDev.

---

We hope you find this Review & Rating System beneficial for enhancing product evaluation and fosters valuable feedback on your platform. If you have any questions or feedback, please don't hesitate to [reach out](mailto:&#99;o&#110;&#116;%61%63t&#64;&#120;&#105;a&#111;&#100;%65%76%2e&#102;%72).