const express = require('express');
const router = express.Router();
const client = require('prom-client'); // Prometheus client

// Initialize Prometheus metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });

const requestCount = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
});
register.registerMetric(requestCount);

// Middleware to collect metrics
router.use((req, res, next) => {
  res.on('finish', () => {
    requestCount.inc({
      method: req.method,
      route: req.route ? req.route.path : req.path,
      status: res.statusCode,
    });
  });
  next();
});

// Metrics route
router.get('/', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.send(await register.metrics());
});

module.exports = router;