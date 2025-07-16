# Demo E-commerce Website

A full-stack MERN (MongoDB, Express, React, Node.js) e-commerce application with modern login functionality.

## Project Structure

```
demo-e-commerce-website/
├── client/          # React frontend application
├── server/          # Node.js/Express backend application
├── package.json     # Root package.json for monorepo scripts
└── README.md
```

## Features

- **Frontend**: React application with modern login UI
- **Backend**: Express.js API with authentication endpoint
- **Responsive Design**: Clean, modern styling
- **Monorepo Structure**: Organized client and server directories

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install all dependencies:
   ```bash
   npm run install-all
   ```

### Running the Application

#### Development Mode (Both client and server)
```bash
npm run dev
```

#### Individual Services

**Frontend only:**
```bash
npm run client
```

**Backend only:**
```bash
npm run server
```

### API Endpoints

- `GET /` - Server health check
- `POST /api/auth/login` - User login endpoint

### Built With

- **Frontend**: React, Create React App
- **Backend**: Express.js, CORS
- **Styling**: CSS3 with modern design principles

### Login Component Features

- Email/Phone number input field
- Password input field
- Login button
- Forgot password functionality
- Responsive design
- Form validation

## Screenshots

![Login Component](https://github.com/user-attachments/assets/93ada86c-033a-47fd-af71-99b2a9bae21f)

## Future Enhancements

- User registration
- JWT authentication
- Database integration
- Shopping cart functionality
- Product catalog
- Order management
