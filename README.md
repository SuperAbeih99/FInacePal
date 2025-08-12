# FinancePal

FinancePal is a full-stack expense tracker built with the **MERN stack** (MongoDB, Express.js, React, Node.js).  
It allows users to track their expenses, view spending trends, and manage budgets securely.

## 🚀 Features
- User authentication and secure login
- Add, edit, and delete expenses
- Categorize expenses for better tracking
- View charts and summaries of spending habits
- Responsive design for desktop and mobile
- Backend API with JWT authentication

## 🛠 Tech Stack
**Frontend**:
- React
- CSS / TailwindCSS (if used)
- Axios

**Backend**:
- Node.js
- Express.js
- MongoDB (Atlas)

**Other**:
- JWT for authentication
- dotenv for environment variables

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:YourUsername/FinancePal.git
   cd FinancePal
2.Install dependencies for both frontend and backend:
cd backend
npm install
cd frontend/expense-tracker
npm install

3.Set up environment variables:
Create a .env file in the backend/ directory:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=8000

4.Start the development servers:
# In backend folder
npm run dev

# In frontend/expense-tracker folder
npm run dev

