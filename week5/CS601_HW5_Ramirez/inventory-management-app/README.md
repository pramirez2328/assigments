# TechSphere App

## Overview

TechSphere is a modern React application that provides an intuitive platform to manage inventory. This project utilizes React, React Router, and modular components for easy scalability and maintenance.

## Features

- **Inventory Management**: List and display inventory items.
- **About Us Page**: Learn more about TechSphere.
- **Contact Form**: Easily get in touch with us.
- **Privacy Policy**: Understand how we handle your data.
- **Sticky Footer**: Ensures a consistent layout with a footer at the bottom.
- **Mobile Friendly**: Dinamically adjust its view to any screeen

## Folder Structure

```plaintext
src
├── assets/                  # Static assets (e.g., images, logos)
├── components/              # Reusable React components
│   ├── aboutUs/             # About Us component
│   ├── contact/             # Contact component
│   ├── footer/              # Footer component
│   ├── header/              # Header component
│   ├── inventoryItem/       # Inventory item component
│   ├── inventoryList/       # Inventory list component
│   ├── privacyPolicy/       # Privacy Policy component
├── data/                    # Data files (e.g., inventory.json)
├── App.css                  # Global CSS styles
├── App.tsx                  # Main App component with routing
├── index.css                # Global styles
├── main.tsx                 # Application entry point
├── vite-env.d.ts            # TypeScript definitions for Vite
```

## Installation

Follow these steps to set up and run the project locally:

1. Download the repository:

   ```bash
   cd TechSphere
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Scripts

- **Start Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`

## Routing

The application uses React Router for navigation:

| Path              | Component     | Description                 |
| ----------------- | ------------- | --------------------------- |
| `/`               | InventoryList | Displays inventory items.   |
| `/about`          | AboutUs       | Information about the app.  |
| `/contact`        | Contact       | Contact form for inquiries. |
| `/privacy-policy` | PrivacyPolicy | Details on data privacy.    |

## Technologies Used

- **React**: Component-based library for building user interfaces.
- **React Router**: Declarative routing for React.
- **TypeScript**: Strongly typed JavaScript.
- **Vite**: Fast development build tool.

## Author

Created by **[Pedro Ramirez](mailto:prlara23@bu.edu)**.
