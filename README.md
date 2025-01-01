# 🎌 YumeToshi Anime Discovery Website

YumeToshi is an anime discovery platform that allows users to explore a variety of anime, view detailed information about each anime, and participate in discussions through comments. The platform is built using React and Firebase, ensuring a seamless and secure user experience.

## ✨ Features

### 1. **🎥 Anime Discovery**
- Users can browse and discover anime from a database fetched via an external API.
- Each anime has a detailed page displaying its description, genre, and related information.

### 2. **💬 Comment System**
- Authenticated users can write comments on the detailed anime pages.
- Comments display the username of the author, ensuring accountability and personalization.
- The comment system is powered by Firebase.

### 3. **🔒 Authentication**
- Users must register and log in to access the comment feature.
- Login and registration functionalities are implemented using Firebase Authentication.
- Secure user management ensures a safe environment for all users.

### 4. **🚀 Future Enhancements**
- Add a **Welcome Page** to greet users and introduce the platform.
- Develop an **FAQ Page** to address common user questions.
- Integrate a **Search System** to quickly find anime based on titles or genres.
- Implement emojis to enhance user interaction within the comment section.

## 🛠️ Project Structure

### 📦 Components
- **Auth**: Includes authentication-related components such as `Login.jsx` and `Register.jsx`.
- **Layouts**: Components for structuring pages, such as `MainLayout.jsx` and `AuthLayout.jsx`.
- **Anime**: Components like `AnimeList.jsx` and `AnimeDetail.jsx` for displaying anime information.
- **Comment**: Components for creating and listing comments, such as `CommentCreate.jsx` and `CommentList.jsx`.

### 🎨 Css
- Each major component has a dedicated CSS file for modular styling.

### 🌐 Router
- **ProtectedRoute.jsx**: Ensures only authenticated users can access certain pages.
- **Router.jsx**: Manages the overall routing structure of the application.

### 🔄 Hooks
- Custom hooks like `useIsLogged.jsx` for managing authentication states.

### 🗂️ Slices
- Redux slices, such as `AnimeListSlice.jsx` and `CommentSlice.jsx`, for managing application state.

### 🔥 Firebase
- Firebase is used for authentication and real-time database functionalities.

## 💻 Technologies Used
- **React**: Frontend framework for building the user interface.
- **Firebase**: For authentication and comment management.
- **Redux**: State management for smoother application flow.
- **CSS**: Custom styling for an appealing user experience.

## 🚀 Getting Started

### 📋 Prerequisites
- Node.js and npm installed on your system.
- Firebase account configured for authentication and database.

### ⚙️ Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd YumeToshi
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### 🌍 Deployment
- Configure Firebase for deployment.
- Build the application:
  ```bash
  npm run build
  ```
- Deploy to Firebase Hosting:
  ```bash
  firebase deploy
  ```


---
Thank you for exploring YumeToshi! Your feedback and suggestions are highly appreciated.

