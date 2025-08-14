require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// Database connection (cached for serverless)
connectDB();

// Parse CLIENT_URL env as comma-separated list
const getAllowedOrigins = () => {
  const raw = process.env.CLIENT_URL || "";
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
};

const allowedOrigins = getAllowedOrigins();

// CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.length === 0) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

// Root info route (avoid "Cannot GET /")
app.get("/", (req, res) => {
  res.status(200).json({
    ok: true,
    name: "FinancePal API",
    version: "1.0",
    endpoints: [
      "/health",
      "/api/v1/auth",
      "/api/v1/income",
      "/api/v1/expense",
      "/api/v1/dashboard",
    ],
  });
});

// API routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

// Static (note: ephemeral in serverless, kept for compatibility)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

module.exports = app;
