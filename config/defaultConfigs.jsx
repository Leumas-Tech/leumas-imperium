// config/defaultConfigs.jsx
export default function defaultConfig(options = {}) {
    return {
      apiKey: options.apiKey || 'YOUR_API_KEY_HERE',
      routes: {
        publicRoutes: [],
        protectedRoutes: [],
        sharedRoutes: []
      }
      // Extend with additional configuration as needed.
    };
  }
  