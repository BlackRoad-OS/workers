/**
 * BlackRoad Ecosystem Integration Library
 * 
 * Helper functions for integrating with other BlackRoad services
 */

import type { Organization, EcosystemStats } from '../types';

/**
 * BlackRoad organizations data
 * Source: https://github.com/BlackRoad-OS/index
 */
export const BLACKROAD_ORGANIZATIONS: Organization[] = [
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
];

/**
 * Get ecosystem statistics
 */
export function getEcosystemStats(): EcosystemStats {
  return {
    organizations: 15,
    repositories: '315+',
    workers: 82,
    databases: 11,
    kvNamespaces: 20,
    r2Buckets: 9,
    domains: 21,
  };
}

/**
 * Get all BlackRoad organizations
 */
export function getOrganizations(): Organization[] {
  return BLACKROAD_ORGANIZATIONS;
}

/**
 * Find organization by name
 */
export function findOrganization(name: string): Organization | undefined {
  return BLACKROAD_ORGANIZATIONS.find(
    (org) => org.name.toLowerCase() === name.toLowerCase()
  );
}

/**
 * Key infrastructure IDs from BlackRoad-OS/index
 */
export const INFRASTRUCTURE = {
  cloudflare: {
    accountId: '848cf0b18d51e0170e0d1537aec3505a',
    continuityDbId: 'f0721506-cb52-41ee-b587-38f7b42b97d9',
  },
  stripe: {
    accountId: 'acct_1SUDM8ChUUSEbzyh',
  },
  links: {
    index: 'https://github.com/BlackRoad-OS/index',
    docs: 'https://github.com/BlackRoad-OS/blackroad-os-docs',
    website: 'https://blackroad.io',
    api: 'https://api.blackroad.io',
    claudeGuide: 'https://github.com/BlackRoad-OS/index/blob/main/CLAUDE.md',
    internetMap: 'https://github.com/BlackRoad-OS/index/blob/main/INTERNET.md',
  },
};

/**
 * Worker endpoints in the BlackRoad ecosystem
 */
export const WORKER_ENDPOINTS = {
  // Core
  api: 'https://blackroad-api.workers.dev',
  continuity: 'https://blackroad-continuity-api.workers.dev',
  operator: 'https://blackroad-operator.workers.dev',
  
  // AI
  lucidia: 'https://lucidia.workers.dev',
  lucidiaCore: 'https://lucidia-core.workers.dev',
  
  // Auth
  auth: 'https://blackroad-auth.workers.dev',
  identity: 'https://blackroad-identity.workers.dev',
  
  // Payments
  paymentGateway: 'https://blackroad-payment-gateway.workers.dev',
  stripeBilling: 'https://blackroad-stripe-billing.workers.dev',
  
  // Data
  d1Api: 'https://blackroad-d1-api.workers.dev',
  kvManager: 'https://blackroad-kv-manager.workers.dev',
};

/**
 * Check if a request is from a BlackRoad service
 */
export function isBlackRoadService(origin: string): boolean {
  const blackroadDomains = [
    'blackroad.io',
    'blackroad.workers.dev',
    'lucidia.earth',
    'lucidia.studio',
  ];
  
  return blackroadDomains.some((domain) => origin.includes(domain));
}
