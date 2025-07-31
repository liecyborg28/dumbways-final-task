const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { Pool } = require("pg");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL connection pool
const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_eo3z2tDcypLM@ep-frosty-block-a1ufbbr9-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  ssl: {
    rejectUnauthorized: false,
  },
});

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Multer config for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "uploads");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${unique}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// ========== Routes ========== //

// GET / - untuk cek server hidup
app.get("/", (req, res) => {
  res.send("Hello World");
});

// GET /projects - list all projects
app.get("/projects", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM projects ORDER BY created_at DESC"
    );
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch projects" });
  }
});

// POST /projects - add new project
app.post("/projects", async (req, res) => {
  const {
    project_name,
    description,
    techs,
    github_url,
    live_demo_url,
    image_url,
  } = req.body;

  if (!project_name || !description || !techs || !image_url) {
    return res.status(400).json({
      success: false,
      message:
        "Missing required fields: project_name, description, techs, image_url",
    });
  }

  try {
    const query = `
      INSERT INTO projects (project_name, description, techs, github_url, live_demo_url, image_url)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const values = [
      project_name,
      description,
      techs,
      github_url,
      live_demo_url,
      image_url,
    ];

    const result = await pool.query(query, values);
    res.status(201).json({
      success: true,
      message: "Project created",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error creating project:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create project" });
  }
});

// Route untuk upload gambar
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file uploaded",
    });
  }

  // Buat URL absolut ke file
  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;

  res.status(200).json({
    success: true,
    message: "File uploaded successfully",
    url: fileUrl, // ini yang bisa digunakan di frontend sebagai src img
  });
});

// 404 Fallback
app.use("*", (req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
