Dacby Assigment => MERN News App

This is a full stack MERN application that scrapes the top stories from Hacker News and displays them in an interface.

Users can:
- Register and login
- View top Hacker News stories
- Bookmark stories
- View bookmarked stories

_____________________________________________
Tech Stack

Frontend:
- React
- Vite
- Tailwind CSS

Backend:
- Node.js
- Express.js
- MongoDB
- JWT Authentication

Scraping:
- Axios
- Cheerio

______________________________________________

Features

- Scrapes top 10 stories from Hacker News
- Stores stories in MongoDB
- JWT based authentication
- Bookmark functionality
- Protected bookmarks page
- Responsive frontend UI

______________________________________________

Project Structure

mern-news-app/
    backend/
    frontend/
    README.md


Environment Variables

Create a .env file inside the backend folder and add:

env
PORT=5000 // Not Anymore because of Render facing bugs
MONGO_URI=Your_MongoDb_ConnectionString
JWT_SECRET=Your_key




# How to Run the Project Locally

Step 1. Clone the Repository


Step 2. Install Backend Dependencies

Go to backend folder:

bash
cd backend

Install packages:

bash
npm install

Step 3. Start Backend Server

bash
npm run dev


Backend will run on:

http://localhost:5000


Step 4. Install Frontend Dependencies

Open a new terminal.

Go to frontend folder:

bash
cd frontend

Install packages:

bash
npm install

Step 5. Start Frontend

bash
npm run dev

Frontend will run on:

http://localhost:5173


# API Endpoints

## Authentication

http
POST /api/auth/register
POST /api/auth/login


## Stories

http
GET /api/stories
GET /api/stories/:id
POST /api/stories/:id/bookmark




## Scraper

http
POST /api/scrape


Made by - 
Divas Srivastava