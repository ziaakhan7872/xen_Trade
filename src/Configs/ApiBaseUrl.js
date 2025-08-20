// config.js
export const AUTH_BASE_URL = 'http://13.112.207.218:9080/api/v1';
export const ASSETS_MANAGER_BASE_URL = 'http://13.112.207.218:9085';
export const TRADING_SERVICE_BASE_URL = 'http://13.112.207.218:9088';
export const ACCOUNTS_SERVICE_BASE_URL = 'http://13.112.207.218:9086';
export const ASSETS_MANAGER_BASE_URL2 = 'http://13.112.207.218:9087';
export const SOCKET_BASE_URL = 'ws://13.112.207.218:8000/connection/websocket';



// Common headers
export const getHeaders = (token) => ({
  'Content-Type': 'application/json',
  ...(token && { Authorization: `Bearer ${token}` }),
});
