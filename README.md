This is a React project bootstrapped with Vite, a fast and efficient development tool for modern web projects.

# Prerequisites
Before you begin, ensure you have the following installed:

Node.js (version 16 or higher)
Download and install it from Node.js official website.
Confirm the installation by running:
node -v
npm or yarn
npm comes with Node.js. Alternatively, install Yarn by following instructions at yarnpkg.com:


# Getting Started
Follow these steps to set up and run the project locally:

1. Clone the Repository
Clone the project repository to your local machine:
git clone <repository-url>
2. Navigate to the Project Directory
Change into the project's directory:
cd <project-directory>
3. Install Dependencies
Install the required dependencies using npm or yarn:
Using npm
npm install
4. Start the Development Server
Run the development server:
npm run dev

The server will start, and the project will be accessible at http://localhost:5173 by default.
Project Structure

├── public/          # Static files served as-is
├── src/             # Source files
│   ├── assets/      # Images, styles, etc.
|   ├── redux/       # store,reduxers.
│   ├── components/  # Reusable React components
│   ├── App.jsx      # Root component
│   └── main.jsx     # Entry point
├── index.html       # Main HTML file
├── package.json     # Dependency and script management
└── vite.config.js   # Vite configuration

# Flow of application

1. You will be directed to signup page which has basic authentication.
2. Now login using the same credentials.
3. You will be directed to dashboard.
4. Add tasks ,remove tasks, check weather .
