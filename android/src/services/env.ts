// Authoritative Environment Configuration for Vendor Mobile Application
// Sourced from environment configuration
export const BACKEND_URL = 'https://customer-website-2x11.onrender.com';
export const API_URL = `${BACKEND_URL}/api`;
export const API_URL_ANDROID = `${BACKEND_URL}/api`;
export const API_URL_IOS = `${BACKEND_URL}/api`;
export const SOCKET_URL_ANDROID = BACKEND_URL;
export const SOCKET_URL_IOS = BACKEND_URL;

// Cloudinary Storage Configuration (Uploads handled securely by authenticated backend)
export const CLOUDINARY_CLOUD_NAME = 'r6vovvet';
export const CLOUDINARY_UPLOAD_PRESET = 'connect_uploads';
export const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com';
