# MediShop

## Project Overview
MediShop is a comprehensive multi-vendor e-commerce platform designed to address the challenges of purchasing medicines and healthcare products online. It provides a seamless user experience for buying medications, submitting queries, and receiving expert advice.

## Features
- **Responsive Design:** Ensures usability across mobile, tablet, and desktop devices.
- **Persistent Authentication:** Users remain authenticated on private routes even after page reloads.
- **User-friendly Notifications:** Sweet Alerts and Toasts for all CRUD operations and authentication actions.

## Technologies Used
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase
- **Other:** Tanstack Query, Stripe for payments

## Steps to Clone and Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/medishop.git
   cd medishop
2.Install dependencies for both client and server:
    cd client
    npm install
    cd ../server
    npm install
3.Set up environment variables:
  Create a .env file in the server directory with Firebase config keys and MongoDB credentials.
4.Run the client and server:
  cd client
  npm run dev
  cd ../server
  nodemon index.js
5.Access the application:
  Open your browser and navigate to http://localhost:3000 for the client side.

