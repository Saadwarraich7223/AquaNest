# AquaNest - Fish & Aquatic Products E-Commerce Platform

A full-stack e-commerce platform for selling fish and aquatic products, built with React and Node.js.

## Features

### Customer Features
- **Product Catalog** - Browse fish and aquatic products with detailed information
- **Search & Filter** - Find products by category and search query
- **Shopping Cart** - Add/remove items, update quantities
- **User Authentication** - Secure login and registration with JWT
- **Address Management** - Save and manage shipping addresses
- **Order Tracking** - View order history and status
- **Contact Form** - Reach out for inquiries

### Seller Features
- **Seller Dashboard** - Manage products, orders, and messages
- **Product Management** - Add, edit, and delete products with image uploads
- **Order Management** - View and process customer orders
- **Messaging System** - Communicate with customers

### Technical Features
- **Secure Payments** - Stripe integration for payment processing
- **Image Storage** - Cloudinary for product image hosting
- **Responsive Design** - Mobile-friendly UI with Tailwind CSS
- **Real-time Updates** - Toast notifications for user feedback

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS 4
- React Router DOM 7
- Axios
- Framer Motion (animations)
- Lucide React & React Icons

### Backend
- Node.js
- Express 5
- MongoDB with Mongoose
- JWT Authentication
- Stripe (payments)
- Cloudinary (image storage)
- Multer (file uploads)

## Project Structure

```
AquaNest/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/        # Images and static files
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # React context (state management)
│   │   └── pages/         # Page components
│   │       ├── seller/    # Seller dashboard pages
│   │       └── ...        # Customer pages
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Node.js backend
│   ├── configs/           # Database, Cloudinary, Multer configs
│   ├── controllers/       # Route handlers
│   ├── middlewares/       # Auth middleware
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── server.js         # Entry point
│   └── package.json
│
├── example.env            # Environment variables template
└── README.md
```

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/AquaNest.git
cd AquaNest
```

### 2. Set Up Environment Variables

The `example.env` file contains all required variables for both server and client.

**Server:**
1. Copy `example.env` to `server/.env`:
   ```bash
   cp example.env server/.env
   ```
2. Edit `server/.env` and fill in your credentials

**Client:**
1. Create `client/.env` with:
   ```env
   VITE_BACKEND_URL=http://localhost:5000
   VITE_CURRENCY=Rs
   ```

### 3. Install Dependencies

**Server:**
```bash
cd server
npm install
```

**Client:**
```bash
cd client
npm install
```

### 4. Start Development Servers

**Start the backend (Terminal 1):**
```bash
cd server
npm run server
```

**Start the frontend (Terminal 2):**
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## API Endpoints

### User Routes (`/api/user`)
- `POST /register` - Register new user
- `POST /login` - Login user
- `GET /is-auth` - Check authentication status
- `POST /logout` - Logout user

### Seller Routes (`/api/seller`)
- `POST /login` - Seller login
- `GET /is-auth` - Check seller authentication
- `POST /logout` - Seller logout

### Product Routes (`/api/product`)
- `GET /list` - Get all products
- `GET /:id` - Get product by ID
- `POST /add` - Add new product (seller)
- `PUT /:id` - Update product (seller)
- `DELETE /:id` - Delete product (seller)

### Cart Routes (`/api/cart`)
- `POST /update` - Update cart items

### Address Routes (`/api/address`)
- `POST /add` - Add new address
- `GET /list` - Get user addresses
- `DELETE /:id` - Delete address

### Order Routes (`/api/order`)
- `POST /place` - Place order
- `GET /list` - Get user orders
- `POST /stripe` - Stripe webhook

### Message Routes (`/api/message`)
- `POST /send` - Send message
- `GET /list` - Get messages (seller)

## Environment Variables Reference

### Server (`server/.env`)

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Server port | No | `5000` |
| `NODE_ENV` | Environment mode | No | `development` |
| `MONGODB_URI` | MongoDB connection string | Yes | - |
| `JWT_SECRET` | Secret key for JWT tokens | Yes | - |
| `SELLER_EMAIL` | Seller login email | Yes | - |
| `SELLER_PASSWORD` | Seller login password | Yes | - |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | Yes | - |
| `CLOUDINARY_API_KEY` | Cloudinary API key | Yes | - |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | Yes | - |
| `STRIPE_SECRET_KEY` | Stripe secret key | Yes | - |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret | Yes | - |

### Client (`client/.env`)

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_BACKEND_URL` | Backend API URL | Yes | - |
| `VITE_CURRENCY` | Currency symbol display | No | `Rs` |

## Deployment

### Backend (Vercel/Render/Railway)
1. Set environment variables in your hosting platform
2. Deploy the `server/` directory

### Frontend (Vercel/Netlify)
1. Set environment variables in your hosting platform
2. Deploy the `client/` directory

### Database
- Use MongoDB Atlas for production
- Update `MONGODB_URI` with your Atlas connection string

## License

ISC
