// global/globalConfiguration.js
export default function globalConfiguration(options = {}) {
    return {
      baseUrl: options.baseUrl || 'https://api.example.com',
      trackingApiKey: options.trackingApiKey || 'YOUR_TRACKING_API_KEY',
      routes: {
        publicRoutes: [],
        protectedRoutes: [],
        sharedRoutes: []
      }
      // Add additional global settings if needed.
    };
  }
  