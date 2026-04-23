# WAD Homework: Social Media Dashboard

This repository contains a web application developed as part of a Web Application Development (WAD) course. The project focuses on creating a dynamic social media-style feed that retrieves data from JSON sources and features a structured, interactive user interface.

## Features

* **Dynamic Post Rendering**: Utilizes the Fetch API to retrieve post information from a local JSON file (`posts.json`) or a remote endpoint (e.g., JSONBin) and dynamically generates HTML elements for the feed.
* **JSON Data Management**: Includes a structured JSON file containing at least 10 post objects, each detailing an author's name, creation time, text content, and image paths.
* **Interactive Profile Dropdown**: A custom JavaScript-driven dropdown menu in the header that displays user information (Username, Email, and Log Out) and toggles visibility upon clicking the profile picture.
* **Multi-Page Navigation**: Includes a primary index page, a post creation page (`addPost.html`), and a login portal (`login.html`).
* **Structured Layout**: Implements a classic three-column layout with a scrollable central content area and sidebars for navigation and supplementary info.

## Project Structure

* **`index.html`**: The main entry point featuring the navigation bar, profile dropdown, and the container for dynamic content.
* **`posts.json`**: A data store containing a list of post objects with literals for usernames, dates, and media paths.
* **`posts.js`**: Contains the logic to fetch data, parse JSON, and execute DOM manipulation to display posts.
* **`userDropdown.js`**: Handles the UI events for the header's profile menu, including click-to-toggle and clicking outside to close.
* **`indexStyling.css`**: Defines the overall layout, including the scrollable main body and sidebar positioning.
* **`todo.md`**: Tracks the project's development progress and requirements for both Homework 1 and Homework 2.

## Getting Started

1.  **Installation**: Clone the repository to your local machine.
2.  **Running the Project**: Open `index.html` in any modern web browser.
3.  **Local Data**: By default, the application fetches data from the local `posts.json` file.
4.  **Remote Data (Optional)**: In `posts.js`, you can uncomment the code related to the external URI (e.g., `jsonbin.io`) to test remote fetching capabilities.

## Implementation Details

* **Photo Handling**: Since JSON only stores text, images are managed by storing relative file paths (e.g., `Images/eiffel.jpeg`) within the JSON objects.
* **Dropdown Logic**: The menu visibility is controlled via `display: block` and `display: none` styles toggled by JavaScript event listeners.
* **Fetching**: The app parses the JSON response and loops through the `posts` array to generate distinct "post" divs for each entry.
