# Express.Chat

Express.Chat is a full-stack real-time chat application built with React, Vite, Zustand, TailwindCSS, DaisyUI, Express.js, MongoDB, Socket.IO, and Cloudinary.

## Features

- Real-time messaging with Socket.IO
- Profile management with avatar upload (Cloudinary)
- Online users indicator
- Responsive UI with multiple themes (DaisyUI)
- Message attachments (images)
- Protected routes and JWT-based authentication

## Tech Stack

- **Frontend:** React, Vite, Zustand, TailwindCSS, DaisyUI, Socket.IO Client, Axios
- **Backend:** Express.js, MongoDB, Mongoose, Socket.IO, Cloudinary, JWT, bcryptjs

## Folder Structure

```
backend/
  src/
    controllers/
    lib/
    middleware/
    models/
    routes/
  .env
  package.json

frontend/
  src/
    components/
    lib/
    pages/
    store/
    assets/
    constants/
    index.css
    App.jsx
    main.jsx
  public/
  index.html
  package.json
```

## Getting Started Locally

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or Atlas)
- Cloudinary account (for image uploads)

### Backend Setup

1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   NODE_ENV=development/production
   port=3000
   ```

4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```sh
   cd frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables

- **Backend:** See `.env` example above.
- **Frontend:** No environment variables required by default.


