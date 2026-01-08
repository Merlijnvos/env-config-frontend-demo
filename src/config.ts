export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '',
  featureNewDashboard:
    import.meta.env.VITE_FEATURE_NEW_DASHBOARD === 'true',
};
