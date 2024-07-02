# MediShop E-commerce Platform

Welcome to MediShop, a multi-vendor e-commerce platform specializing in the sale of medicines and healthcare products. This platform provides a seamless user experience for purchasing medications, submitting queries, and receiving expert advice.

## Admin Credentials
- **Username:** admin
- **Password:** [12345678@Ss]

## Live Site URL
Visit [MediShop Live](https://medicine-shop-auth.web.app/) to explore the platform.

## Key Features
- **Responsive Design:** Ensures usability across mobile, tablet, and desktop devices.
- **Persistent Authentication:** Users remain authenticated on private routes even after page reloads.
- **Secure Environment Variables:** Firebase and MongoDB credentials are securely managed using environment variables.
- **User-friendly Notifications:** Sweet Alerts and Toasts for CRUD operations, authentication actions, and more.
- **Efficient Data Fetching:** Implemented Tanstack queries for optimized data retrieval.

## Overview of Sections

### Home Page
- **Navbar:** Logo, website name, navigation links (Home, Shop, Cart), languages dropdown, and user profile dropdown (Update Profile, Dashboard, Logout).
- **Slider Section:** Displays product slides managed by the Admin.
- **Category Cards:** Highlights different medicine categories with links to respective category pages.
- **Discount Products:** Slider showcasing discounted products.
- **Queries Section:** Displays recent user queries with an option to view all.
- **Additional Sections:** Customizable sections to feature relevant content.
- **Footer:** Includes contact information, links, and social media icons.

### User Registration and Authentication
- **Sign Up Page:** Form for username, email, password, role selection (user or seller), and optional photo upload.
- **Login Page:** Standard email and password login with social login options (Google, GitHub).

### Shop Page
- Presents medicines in a tabular format with options to view details and add to cart.

### Category Details Medicine Page
- Lists medicines within a selected category with detailed information and image previews.

### Cart Page
- Shows selected medicines, allows quantity adjustments, removal of items, and clear cart option.
- Checkout button links to the payment gateway.

### Checkout Page
- Secure payment processing using Stripe.
- Redirects to an invoice page upon successful payment.

### Admin Dashboard Page
- **User Management:** Role assignments (user, seller, admin) and profile management.
- **Category Management:** CRUD operations for managing medicine categories.
- **Payment Management:** Tracks and manages payment statuses (pending, paid).
- **Sales Reports:** Generates and exports detailed sales reports with filtering options.
- **Banner Advertising:** Controls advertisements displayed on the homepage slider.

### Seller Dashboard Page
- **Medicine Management:** CRUD operations for managing medicines, including image uploads.
- **Payment History:** Displays sales history for medicines sold by the seller.
- **Advertisement Requests:** Manages requests to feature medicines in the homepage slider.

### User Dashboard Page
- **Payment History:** Displays transaction details, including payment statuses (pending, paid).
- **Query Management:** Lists user queries with links to detailed query pages.

## Challenge and Optional Features
- **Advanced Functionality:** Pagination, sorting, and search capabilities for medicine tables.
- **Enhanced Security:** Stores access tokens in local storage and verifies them on private route API calls.
- **Data Export:** Enables exporting sales reports in PDF, Excel, CSV, and other formats.
- **Customization:** Implements React Hook Form and React Helmet for enhanced form handling and SEO optimization.

## Optional Enhancements
- **Multilingual Support:** Translate the entire website into multiple languages.
- **Real-time Updates:** Display a digital clock in the navbar for enhanced user interaction.

