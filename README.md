# BookwormSE

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

A fully functioning Google Books API search engine with a GraphQL API built with Apollo Server and deployed to Heroku.

## Table of Contents
- [Screenshots](#screenshots)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing) 
- [Questions](#questions)
- [License](#license)

## Screenshots 
![]()
![]()

## Description

BookwormSE is a book search engine built for avid readers. With an easy-to-navigate interface, users can search for books, view detailed information, and access links to the books on Google Books. It features a Login/Signup option to provide users with the ability to save their favorite books for later reference. A user-friendly tool, it serves as an excellent companion for those who want to keep an updated list of books to purchase.

The deployed application can be visited [here](https://obscure-hamlet-34414-e7163f57d6e6.herokuapp.com/).

## Installation

BookwormSE is deployed on Heroku and may be accessed at the link above. Users who want to install and use BookwormSE on their local machine may follow these steps:

1. Clone the repository from GitHub using the following command: `git clone https://github.com/<your_username>/BookFinder.git`

2. Navigate to the newly created directory, and install the necessary dependencies using `npm run install` in the application's root directory.

3. From the project's root directory run `npm run develop`

Following these steps, BookwormSE should be accessible by navigating to `http://localhost:3000` from your browser of choice.

## Usage

Usage of this application varies somewhat depending on whether you are a guest user or logged in as a registered user.

### As a Guest User

- On the landing page, you will see the options 'Search for Books' and 'Login/Signup'.
- Enter a book name or author in the search field and click 'Submit' to retrieve search results. Each result will provide the book’s title, author, description, image, and a link to the book on the Google Books site.

### As a Registered User 

- Click 'Login/Signup' to access the login/signup modal.
If you're a new user, toggle to 'Signup', input your username, email address, and password, and click 'Signup'. You will be automatically logged in.
- If you're a returning user, toggle to 'Login', input your email address and password, and click 'Login'. You will be redirected to the search page.
- When logged in, you will have additional options to 'View Saved Books' and 'Logout'.
- When you search for books, each result will also include a 'Save' button. Click this to save a book to your account.
- You can view your saved books by clicking 'View Saved Books'. This will present you with your list of saved books, each with a 'Remove' button. Click this to remove a book from your saved list.
- Click 'Logout' to log out from the site.

## Contributing
Users interested in contributing to this project may fork the GitHub repository, make their intended alterations, and submit these changes to the original repository as a pull request. Pull requests will be reviewed by the project author. If accepted, the changes will be merged and added to the project's main branch to create the new starting point for future development!

## Questions
If you have any questions concerning this application, do not hesitate to reach me at jaredryan1997@hotmail.com. You may also view my GitHub profile at http://github.com/Pilotguide9897.

## License
This project is licensed under the ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg). See the [license](https://opensource.org/licenses/MIT) documentation for more information.
