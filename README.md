# 💳 PlanTopia — Subscription Management System

PlanTopia is a full-stack **subscription management web application** built with Next.js, MongoDB, and TypeScript. It allows users to create accounts, browse available subscription plans, manage their subscriptions, and access a personalized dashboard.

The application also includes **role-based access control**, providing separate functionality for regular users and administrators.

## ✨ Features

### 👤 User Features

- User registration and login
- Secure password hashing using bcrypt
- JWT-based authentication
- Browse available subscription plans
- Subscribe to plans
- View and manage active subscriptions
- Personalized user dashboard
- Responsive user interface

### 🛡️ Admin Features

- Role-based administrator access
- Dedicated admin dashboard
- Manage subscription plans
- View application data through administrative functionality

## 🔐 Authentication & Security

PlanTopia implements authentication using:

- **bcrypt** for password hashing and verification
- **JSON Web Tokens (JWT)** for authentication
- Environment variables for sensitive configuration
- Role information stored with user accounts
- MongoDB for persistent user data

Sensitive values such as the MongoDB connection URI and JWT secret are stored in environment variables and are not committed to the repository.

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- CSS

### Backend

- Next.js API Routes
- Node.js

### Database

- MongoDB
- Mongoose

### Authentication

- JSON Web Tokens (JWT)
- bcryptjs

## 📂 Project Structure

```text
subscription-system/
├── app/
│   ├── admin/
│   │   └── page.tsx
│   ├── api/
│   │   ├── login/
│   │   ├── plans/
│   │   ├── register/
│   │   └── subscriptions/
│   ├── auth/
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── data/
│   ├── plans.json
│   └── users.json
├── lib/
│   └── mongodb.ts
├── models/
│   ├── Plan.ts
│   ├── Subscription.ts
│   └── User.ts
├── public/
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## ⚙️ Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Do not commit `.env.local` or other environment files to version control.

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/parnika0110/subscription-management-system.git
cd subscription-management-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create `.env.local` in the project root and add:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Visit:

```text
http://localhost:3000
```

## 🗄️ Database

The application uses MongoDB through Mongoose.

The database connection is configured through:

```text
MONGODB_URI
```

The application uses the database name:

```text
subscriptionDB
```

The main data models are:

- **User** — stores user account and role information
- **Plan** — stores subscription plan information
- **Subscription** — stores user subscription information

## 🔄 Application Flow

```text
User
  ↓
Register / Login
  ↓
Authentication
  ↓
Dashboard
  ↓
Browse Plans
  ↓
Manage Subscriptions
```

Administrative users can access separate admin functionality based on their stored role.

## 🔌 API Routes

The application contains API routes for:

| Route | Purpose |
|---|---|
| `/api/register` | Register a new user |
| `/api/login` | Authenticate a user |
| `/api/plans` | Handle subscription plan data |
| `/api/subscriptions` | Handle user subscriptions |

## 🔒 Repository Safety

- Environment files are excluded through `.gitignore`.
- MongoDB credentials are not hardcoded in the source code.
- JWT secrets are loaded through environment variables.
- Passwords are hashed using bcrypt before storage.
- Authentication verifies hashed passwords using bcrypt.
- Generated Next.js files and `node_modules` are excluded from Git.

## 🔮 Future Enhancements

- Email notifications for subscription renewals
- Subscription expiry reminders
- Payment gateway integration
- Advanced admin analytics
- Subscription usage statistics
- Improved authentication and session management
- Password reset functionality
- Additional subscription categories

## 📄 Note

PlanTopia was developed as a full-stack project to explore subscription management, authentication, role-based access control, REST-style API development, MongoDB integration, and modern web application development using Next.js.