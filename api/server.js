const express = require('express');
const app = express();
const port = 3000;

const healthRouter = require('./routes/health');
const usersRouter = require('./routes/users');
const metricsRouter = require('./routes/metrics');

// Middleware
app.use(express.json());

// Routes
app.use('/health', healthRouter);
app.use('/users', usersRouter);
app.use('/metrics', metricsRouter);

// Start the server
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});