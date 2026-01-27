/**
 * BlackRoad Ecosystem Types
 * 
 * Shared TypeScript types for BlackRoad OS Workers
 */

// Organization information
export interface Organization {
  name: string;
  repos: number;
  focus: string;
  url?: string;
}

// Ecosystem statistics
export interface EcosystemStats {
  organizations: number;
  repositories: string;
  workers: number;
  databases: number;
  kvNamespaces?: number;
  r2Buckets?: number;
  domains?: number;
}

// Worker response types
export interface HealthCheckResponse {
  status: 'healthy' | 'degraded' | 'unhealthy';
  service: string;
  timestamp: string;
  environment: string;
  version: string;
}

export interface VersionResponse {
  name: string;
  version: string;
  description: string;
  ecosystem: EcosystemStats;
  links: {
    website: string;
    github: string;
    index: string;
    docs: string;
  };
}

export interface StatusResponse {
  status: 'operational' | 'degraded' | 'down';
  region: string;
  country: string;
  timestamp: string;
}

// API response wrapper
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
  };
  timestamp: string;
}

// CloudFlare specific types
export interface CloudflareRequest extends Request {
  cf?: {
    colo?: string;
    country?: string;
    city?: string;
    continent?: string;
    latitude?: string;
    longitude?: string;
    postalCode?: string;
    timezone?: string;
    region?: string;
    regionCode?: string;
  };
}
