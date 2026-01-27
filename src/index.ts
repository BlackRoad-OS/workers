/**
 * BlackRoad OS Workers - Main Entry Point
 * 
 * This is the main entry point for the BlackRoad Workers application.
 * It handles incoming requests and routes them to appropriate handlers.
 * 
 * @see https://developers.cloudflare.com/workers/
 */

import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';

// Types for Cloudflare Workers environment
export interface Env {
  // Environment variables
  ENVIRONMENT?: string;
  
  // Cloudflare bindings
  // KV?: KVNamespace;
  // DB?: D1Database;
  // BUCKET?: R2Bucket;
  
  // Secrets
  CLOUDFLARE_API_TOKEN?: string;
  GITHUB_TOKEN?: string;
  STRIPE_API_KEY?: string;
}

// Create Hono app
const app = new Hono<{ Bindings: Env }>();

// Middleware
app.use('*', logger());
app.use('*', cors());
app.use('*', prettyJSON());

// Health check endpoint
app.get('/health', (c) => {
  return c.json({
    status: 'healthy',
    service: 'blackroad-workers',
    timestamp: new Date().toISOString(),
    environment: c.env.ENVIRONMENT || 'development',
    version: '1.0.0',
  });
});

// API version endpoint
app.get('/version', (c) => {
  return c.json({
    name: 'BlackRoad OS Workers',
    version: '1.0.0',
    description: 'Edge computing infrastructure for the BlackRoad ecosystem',
    ecosystem: {
      organizations: 15,
      repositories: '315+',
      workers: 82,
      databases: 11,
      kvNamespaces: 20,
      r2Buckets: 9,
      domains: 21,
    },
    links: {
      website: 'https://blackroad.io',
      github: 'https://github.com/BlackRoad-OS',
      index: 'https://github.com/BlackRoad-OS/index',
      docs: 'https://github.com/BlackRoad-OS/blackroad-os-docs',
    },
  });
});

// Root endpoint
app.get('/', (c) => {
  return c.json({
    message: '🛣️ Welcome to BlackRoad OS Workers',
    tagline: 'Digital sovereignty and post-permission infrastructure',
    status: 'operational',
    endpoints: {
      health: '/health',
      version: '/version',
      api: '/api/v1',
    },
    ecosystem: {
      index: 'https://github.com/BlackRoad-OS/index',
      organizations: 'https://github.com/BlackRoad-OS',
      docs: 'https://github.com/BlackRoad-OS/blackroad-os-docs',
    },
  });
});

// API v1 routes
const apiV1 = new Hono<{ Bindings: Env }>();

apiV1.get('/status', (c) => {
  return c.json({
    status: 'operational',
    region: c.req.raw.cf?.colo || 'unknown',
    country: c.req.raw.cf?.country || 'unknown',
    timestamp: new Date().toISOString(),
  });
});

apiV1.get('/ecosystem', (c) => {
  return c.json({
    organizations: [
      { name: 'BlackRoad-OS', repos: 100, focus: 'Core infrastructure' },
      { name: 'BlackRoad-AI', repos: 52, focus: 'AI models & tools' },
      { name: 'BlackRoad-Cloud', repos: 20, focus: 'Cloud infrastructure' },
      { name: 'BlackRoad-Security', repos: 17, focus: 'Security tools' },
      { name: 'BlackRoad-Media', repos: 17, focus: 'Media platforms' },
      { name: 'BlackRoad-Foundation', repos: 15, focus: 'Core tools' },
      { name: 'BlackRoad-Interactive', repos: 14, focus: 'Gaming' },
      { name: 'BlackRoad-Labs', repos: 13, focus: 'R&D' },
      { name: 'BlackRoad-Hardware', repos: 13, focus: 'IoT & devices' },
      { name: 'BlackRoad-Studio', repos: 13, focus: 'Creative tools' },
      { name: 'BlackRoad-Ventures', repos: 12, focus: 'Business tools' },
      { name: 'BlackRoad-Education', repos: 11, focus: 'Learning' },
      { name: 'BlackRoad-Gov', repos: 10, focus: 'Governance' },
      { name: 'Blackbox-Enterprises', repos: 9, focus: 'Stealth R&D' },
      { name: 'BlackRoad-Archive', repos: 9, focus: 'Data preservation' },
    ],
    totals: {
      organizations: 15,
      repositories: '315+',
      workers: 82,
      databases: 11,
    },
    links: {
      index: 'https://github.com/BlackRoad-OS/index',
      internetMap: 'https://github.com/BlackRoad-OS/index/blob/main/INTERNET.md',
      claudeGuide: 'https://github.com/BlackRoad-OS/index/blob/main/CLAUDE.md',
    },
  });
});

app.route('/api/v1', apiV1);

// 404 handler
app.notFound((c) => {
  return c.json(
    {
      error: 'Not Found',
      message: 'The requested endpoint does not exist',
      availableEndpoints: ['/', '/health', '/version', '/api/v1/status', '/api/v1/ecosystem'],
    },
    404
  );
});

// Error handler
app.onError((err, c) => {
  console.error(`Error: ${err.message}`);
  return c.json(
    {
      error: 'Internal Server Error',
      message: err.message,
      timestamp: new Date().toISOString(),
    },
    500
  );
});

// Export the fetch handler
export default {
  fetch: app.fetch,
};
