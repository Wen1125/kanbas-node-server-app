// const express = require("express");
import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentsRoutes from "./assignments/routes.js";
import "dotenv/config";

const allowedOrigin = [
    "http://localhost:3000",
    "https://a5--deluxe-capybara-917dff.netlify.app"
    ];
    
const corsOptions = {
origin: function (origin, callback) {
    // Check if the request origin is in the allowedOrigins array or if it's a non-browser request (e.g., from Postman)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
    callback(null, true);
    } else {
    callback(new Error('Not allowed by CORS'));
    }
},
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentsRoutes(app);
Lab5(app);
app.listen(process.env.PORT || 4000);