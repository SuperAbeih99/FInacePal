# FinancePal

A modern financial management application built with React and Vite, featuring expense tracking, income management, and financial analytics.

## Features

## Environment & API

- Set `VITE_API_URL` to your backend base URL (e.g., `https://finance-pal-omega.vercel.app`).
- Auth endpoints used by the app:
  - Register: `POST ${VITE_API_URL}/api/v1/auth/register`
  - Login: `POST ${VITE_API_URL}/api/v1/auth/login`
  - Get user: `GET ${VITE_API_URL}/api/v1/auth/getUser`
- For cookie-based auth, ensure credentials are included in requests and backend CORS allows the frontend origin.

### cURL quick checks

```
curl -i https://finance-pal-omega.vercel.app/health
curl -i -X POST https://finance-pal-omega.vercel.app/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test User","email":"testuser@example.com","password":"Test1234!"}'
curl -i -X POST https://finance-pal-omega.vercel.app/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"testuser@example.com","password":"Test1234!"}'
```

- 💰 Expense and Income Tracking
- 📊 Financial Analytics and Charts
- 👤 User Authentication
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
